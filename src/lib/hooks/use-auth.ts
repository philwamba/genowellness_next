import { useAuthStore } from '@/lib/stores/auth-store'

export function useAuth() {
    const store = useAuthStore()

    return {
        ...store,
        mutate: store.refreshUser,
    }
}
