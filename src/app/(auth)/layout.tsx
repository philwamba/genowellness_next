'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/stores/auth-store'

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    const { isAuthenticated, isLoading } = useAuthStore()

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            router.push('/home')
        }
    }, [isLoading, isAuthenticated, router])

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
        )
    }

    if (isAuthenticated) {
        return null
    }

    return <div className="min-h-screen bg-white">{children}</div>
}
