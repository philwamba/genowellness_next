'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/stores/auth-store'

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    const { isAuthenticated, isLoading, initializeAuth } = useAuthStore()
    const [isInitialized, setIsInitialized] = useState(false)

    useEffect(() => {
        const unsubscribe = initializeAuth()
        setIsInitialized(true)
        return () => unsubscribe?.()
    }, [initializeAuth])

    useEffect(() => {
        if (isInitialized && !isLoading && isAuthenticated) {
            router.push('/home')
        }
    }, [isInitialized, isLoading, isAuthenticated, router])

    // Show initial loading only before first auth check
    if (!isInitialized) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
        )
    }

    if (isAuthenticated) {
        return null
    }

    // Keep children mounted, show overlay when loading to preserve form state
    return (
        <div className="min-h-screen bg-white relative">
            {children}
            {isLoading && (
                <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
                </div>
            )}
        </div>
    )
}
