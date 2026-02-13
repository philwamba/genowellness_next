'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/stores/auth-store'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'

export default function LoginPage() {
    const router = useRouter()
    const { loginWithEmail, loginWithGoogle, isLoading, error, setError } =
        useAuthStore()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)

        try {
            await loginWithEmail(email, password)
            router.push('/home')
        } catch (error) {
            // Error is already set in the store
        }
    }

    const handleGoogleLogin = async () => {
        setError(null)
        try {
            await loginWithGoogle()
            router.push('/home')
        } catch (error) {
            // Error is already set in the store
        }
    }

    return (
        <div className="min-h-screen flex flex-col px-6 py-12">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">GENO</h1>
                <p className="text-gray-500">Welcome back</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 flex-1">
                {error && (
                    <div className="p-3 bg-red-50 text-red-600 rounded-xl text-sm">
                        {error}
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <div className="relative">
                        <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            {showPassword ? (
                                <FiEyeOff className="w-5 h-5" />
                            ) : (
                                <FiEye className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="text-right">
                    <Link
                        href="/forgot-password"
                        className="text-sm text-primary font-medium">
                        Forgot password?
                    </Link>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50">
                    {isLoading ? 'Signing in...' : 'Sign In'}
                </button>

                {/* Divider */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">
                            or continue with
                        </span>
                    </div>
                </div>

                {/* Social Login */}
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    disabled={isLoading}
                    className="w-full py-3 border border-gray-200 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors disabled:opacity-50">
                    <FcGoogle className="w-5 h-5" />
                    Continue with Google
                </button>
            </form>

            {/* Footer */}
            <div className="text-center mt-8">
                <p className="text-gray-500">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-primary font-medium">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}
