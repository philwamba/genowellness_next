'use client'

import Link from 'next/link'
import { useAuthStore } from '@/lib/stores/auth-store'
import { getGreeting, getInitials } from '@/lib/utils'
import { FiBell } from 'react-icons/fi'

interface AppHeaderProps {
    showGreeting?: boolean
    title?: string
}

export function AppHeader({ showGreeting = true, title }: AppHeaderProps) {
    const { user } = useAuthStore()

    return (
        <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
            <div className="px-4 py-4">
                <div className="flex items-center justify-between">
                    {showGreeting && user ? (
                        <div>
                            <p className="text-sm text-gray-500">
                                {getGreeting()}
                            </p>
                            <h1 className="text-xl font-bold text-gray-900">
                                {user.name?.split(' ')[0]}
                            </h1>
                        </div>
                    ) : title ? (
                        <h1 className="text-xl font-bold text-gray-900">
                            {title}
                        </h1>
                    ) : (
                        <div className="w-24 h-8">
                            <Link href="/home">
                                <span className="text-xl font-bold text-primary">
                                    GENO
                                </span>
                            </Link>
                        </div>
                    )}

                    <div className="flex items-center gap-3">
                        <Link
                            href="/notifications"
                            className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                            <FiBell className="w-6 h-6" />
                            {/* Notification badge */}
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                        </Link>

                        {user && (
                            <Link href="/profile" className="flex-shrink-0">
                                {user.avatar ? (
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-medium">
                                        {getInitials(user.name)}
                                    </div>
                                )}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
