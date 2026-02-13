import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '@/types'
import { api, authApi } from '../api/client'
import {
    signInWithEmail,
    createAccountWithEmail,
    signInWithGoogle,
    firebaseSignOut,
    authenticateWithBackend,
    subscribeToAuthState,
    AuthUser,
} from '../firebase/auth'

interface AuthState {
    user: User | null
    firebaseUser: AuthUser | null
    token: string | null
    isLoading: boolean
    isAuthenticated: boolean
    error: string | null

    // Actions
    setUser: (user: User | null) => void
    setFirebaseUser: (user: AuthUser | null) => void
    setToken: (token: string | null) => void
    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void

    // Auth methods
    loginWithEmail: (email: string, password: string) => Promise<void>
    registerWithEmail: (
        name: string,
        email: string,
        password: string,
    ) => Promise<void>
    loginWithGoogle: () => Promise<void>
    logout: () => Promise<void>
    refreshUser: () => Promise<void>
    initializeAuth: () => void
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null,
            firebaseUser: null,
            token: null,
            isLoading: true,
            isAuthenticated: false,
            error: null,

            setUser: user => set({ user, isAuthenticated: !!user }),
            setFirebaseUser: firebaseUser => set({ firebaseUser }),
            setToken: token => {
                api.setToken(token)
                set({ token })
            },
            setLoading: isLoading => set({ isLoading }),
            setError: error => set({ error }),

            loginWithEmail: async (email, password) => {
                set({ isLoading: true, error: null })
                try {
                    const firebaseUser = await signInWithEmail(email, password)
                    const response = await authenticateWithBackend(firebaseUser)
                    set({
                        user: response.user as User,
                        firebaseUser,
                        token: response.token,
                        isAuthenticated: true,
                        isLoading: false,
                    })
                } catch (error) {
                    set({
                        error:
                            error instanceof Error
                                ? error.message
                                : 'Login failed',
                        isLoading: false,
                    })
                    throw error
                }
            },

            registerWithEmail: async (name, email, password) => {
                set({ isLoading: true, error: null })
                try {
                    const firebaseUser = await createAccountWithEmail(
                        email,
                        password,
                        name,
                    )
                    const response = await authenticateWithBackend(firebaseUser)
                    set({
                        user: response.user as User,
                        firebaseUser,
                        token: response.token,
                        isAuthenticated: true,
                        isLoading: false,
                    })
                } catch (error) {
                    set({
                        error:
                            error instanceof Error
                                ? error.message
                                : 'Registration failed',
                        isLoading: false,
                    })
                    throw error
                }
            },

            loginWithGoogle: async () => {
                set({ isLoading: true, error: null })
                try {
                    const firebaseUser = await signInWithGoogle()
                    const response = await authenticateWithBackend(firebaseUser)
                    set({
                        user: response.user as User,
                        firebaseUser,
                        token: response.token,
                        isAuthenticated: true,
                        isLoading: false,
                    })
                } catch (error) {
                    set({
                        error:
                            error instanceof Error
                                ? error.message
                                : 'Google login failed',
                        isLoading: false,
                    })
                    throw error
                }
            },

            logout: async () => {
                set({ isLoading: true })
                try {
                    await firebaseSignOut()
                    await authApi.logout().catch(() => {}) // Ignore errors
                    api.setToken(null)
                    set({
                        user: null,
                        firebaseUser: null,
                        token: null,
                        isAuthenticated: false,
                        isLoading: false,
                    })
                } catch (error) {
                    set({ isLoading: false })
                    throw error
                }
            },

            refreshUser: async () => {
                const { token } = get()
                if (!token) return

                try {
                    const response = await authApi.getUser()
                    set({ user: response.user as User })
                } catch (error) {
                    // Token might be invalid, clear auth state
                    get().logout()
                }
            },

            initializeAuth: () => {
                const unsubscribe = subscribeToAuthState(async firebaseUser => {
                    if (firebaseUser) {
                        set({ firebaseUser })
                        const { token } = get()
                        if (token) {
                            // Refresh user data
                            get().refreshUser()
                        } else {
                            // Authenticate with backend
                            try {
                                const response =
                                    await authenticateWithBackend(firebaseUser)
                                set({
                                    user: response.user as User,
                                    token: response.token,
                                    isAuthenticated: true,
                                })
                            } catch (error) {
                                console.error('Backend auth failed:', error)
                            }
                        }
                    } else {
                        set({
                            user: null,
                            firebaseUser: null,
                            token: null,
                            isAuthenticated: false,
                        })
                    }
                    set({ isLoading: false })
                })

                return unsubscribe
            },
        }),
        {
            name: 'geno-auth',
            partialize: state => ({
                token: state.token,
            }),
        },
    ),
)
