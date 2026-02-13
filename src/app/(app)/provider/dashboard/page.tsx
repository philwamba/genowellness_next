'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { PageHeader } from '@/components/layout/page-header'
import { useAuthStore } from '@/lib/stores/auth-store'
import { formatCurrency } from '@/lib/utils'
import {
    FiCalendar,
    FiClock,
    FiDollarSign,
    FiStar,
    FiUser,
    FiPieChart,
    FiSettings,
    FiTrendingUp,
} from 'react-icons/fi'

export default function ProviderDashboardPage() {
    const router = useRouter()
    const { user } = useAuthStore()
    const profile = user?.provider_profile
    const [stats, setStats] = useState({
        totalSessions: 0,
        totalEarnings: 0,
        rating: 0,
        reviews: 0,
        upcomingBookings: 0,
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate fetching stats
        // In real app, call API
        const loadStats = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            setStats({
                totalSessions: 142,
                totalEarnings: 12500,
                rating: 4.9,
                reviews: 84,
                upcomingBookings: 5,
            })
            setIsLoading(false)
        }
        loadStats()
    }, [])

    if (!user || !profile) {
        // Redirect or show loading/error if not a provider
        // For now, just show simple state
        return null
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            <PageHeader title="Provider Dashboard" />

            <main className="px-4 py-6 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-2 mb-2 text-primary">
                            <FiCalendar className="w-5 h-5" />
                            <span className="text-sm font-medium">Sessions</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">
                            {isLoading ? '-' : stats.totalSessions}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-2 mb-2 text-green-600">
                            <FiDollarSign className="w-5 h-5" />
                            <span className="text-sm font-medium">Earnings</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">
                            {isLoading ? '-' : formatCurrency(stats.totalEarnings)}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-2 mb-2 text-yellow-500">
                            <FiStar className="w-5 h-5" />
                            <span className="text-sm font-medium">Rating</span>
                        </div>
                        <div className="flex items-end gap-2">
                            <p className="text-2xl font-bold text-gray-900">
                                {isLoading ? '-' : stats.rating}
                            </p>
                            <span className="text-xs text-gray-500 mb-1">
                                ({stats.reviews} reviews)
                            </span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-2 mb-2 text-blue-600">
                            <FiClock className="w-5 h-5" />
                            <span className="text-sm font-medium">Upcoming</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">
                            {isLoading ? '-' : stats.upcomingBookings}
                        </p>
                    </div>
                </div>

                {/* Quick Actions */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                        Quick Actions
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <Link
                            href="/provider/availability"
                            className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <FiClock className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium text-gray-900">
                                Manage Availability
                            </span>
                        </Link>
                        <Link
                            href="/provider/profile"
                            className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                <FiUser className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium text-gray-900">
                                Edit Profile
                            </span>
                        </Link>
                        <Link
                            href="/provider/analytics"
                            className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <FiTrendingUp className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium text-gray-900">
                                Analytics
                            </span>
                        </Link>
                        <Link
                            href="/profile/settings"
                            className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                                <FiSettings className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium text-gray-900">
                                Settings
                            </span>
                        </Link>
                    </div>
                </section>

                {/* Upcoming Sessions Preview */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Upcoming Sessions
                        </h2>
                        <Link
                            href="/bookings"
                            className="text-sm font-medium text-primary hover:text-primary/80"
                        >
                            View All
                        </Link>
                    </div>
                    {/* Placeholder for bookings list */}
                    <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                        <FiCalendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">No sessions scheduled for today</p>
                    </div>
                </section>
            </main>
        </div>
    )
}
