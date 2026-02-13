'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMail, FiArrowLeft, FiCheckCircle } from 'react-icons/fi'

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setIsLoading(true)

        try {
            // API call would go here
            const response = await fetch('/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            })

            if (!response.ok) {
                throw new Error('Failed to send reset link')
            }

            setIsSubmitted(true)
        } catch (err) {
            setError('Failed to send reset link. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
                <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiCheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        Check your email
                    </h1>
                    <p className="text-gray-500 mb-8">
                        We've sent a password reset link to
                        <br />
                        <span className="font-medium text-gray-700">
                            {email}
                        </span>
                    </p>
                    <Link
                        href="/login"
                        className="inline-flex items-center gap-2 text-primary font-medium">
                        <FiArrowLeft className="w-4 h-4" />
                        Back to Sign In
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col px-6 py-12">
            {/* Back Link */}
            <Link
                href="/login"
                className="flex items-center gap-2 text-gray-600 mb-8">
                <FiArrowLeft className="w-5 h-5" />
                Back
            </Link>

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Forgot Password
                </h1>
                <p className="text-gray-500">
                    Enter your email address and we'll send you a link to reset
                    your password.
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
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

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50">
                    {isLoading ? 'Sending...' : 'Send Reset Link'}
                </button>
            </form>

            {/* Footer */}
            <div className="text-center mt-8">
                <p className="text-gray-500">
                    Remember your password?{' '}
                    <Link href="/login" className="text-primary font-medium">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    )
}
