'use client'

import { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'sonner'
import { AppHeader } from '@/components/layout/app-header'
import { contentApi } from '@/lib/api/client'
import { WellnessTip } from '@/types'
import { cn } from '@/lib/utils'
import {
    FiHeart,
    FiActivity,
    FiDollarSign,
    FiBriefcase,
    FiTarget,
    FiStar,
    FiChevronRight,
} from 'react-icons/fi'

const wellnessDimensions = [
    {
        id: 'mental',
        label: 'Mental & Emotional',
        icon: FiHeart,
        color: 'bg-purple-500',
        bgLight: 'bg-purple-50',
    },
    {
        id: 'physical',
        label: 'Physical',
        icon: FiActivity,
        color: 'bg-green-500',
        bgLight: 'bg-green-50',
    },
    {
        id: 'financial',
        label: 'Financial',
        icon: FiDollarSign,
        color: 'bg-yellow-500',
        bgLight: 'bg-yellow-50',
    },
    {
        id: 'occupational',
        label: 'Occupational',
        icon: FiBriefcase,
        color: 'bg-blue-500',
        bgLight: 'bg-blue-50',
    },
    {
        id: 'social',
        label: 'Social',
        icon: FiTarget,
        color: 'bg-pink-500',
        bgLight: 'bg-pink-50',
    },
    {
        id: 'spiritual',
        label: 'Spiritual',
        icon: FiStar,
        color: 'bg-orange-500',
        bgLight: 'bg-orange-50',
    },
]

export default function WellnessPage() {
    const searchParams = useSearchParams()
    const initialArea = searchParams.get('area') || 'mental'

    const [activeArea, setActiveArea] = useState(initialArea)
    const [tips, setTips] = useState<WellnessTip[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchTips = useCallback(async () => {
        setIsLoading(true)
        try {
            // Using contentApi since wellness tips are part of content
            const response = await contentApi.getDailyTip()
            // Wrap the single tip in an array for display
            setTips(response.tip ? [response.tip as WellnessTip] : [])
        } catch (_error) {
            toast.error('Failed to fetch tips')
        } finally {
            setIsLoading(false)
        }
    }, [activeArea])

    useEffect(() => {
        fetchTips()
    }, [fetchTips])

    const activeDimension =
        wellnessDimensions.find(d => d.id === activeArea) ||
        wellnessDimensions[0]
    const ActiveIcon = activeDimension.icon

    return (
        <div>
            <AppHeader title="Wellness" showGreeting={false} />

            <main className="px-4 py-6 space-y-6">
                {/* Dimension Selector */}
                <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
                    {wellnessDimensions.map(dimension => {
                        const Icon = dimension.icon
                        return (
                            <button
                                key={dimension.id}
                                onClick={() => setActiveArea(dimension.id)}
                                className={cn(
                                    'flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors',
                                    activeArea === dimension.id
                                        ? `${dimension.color} text-white`
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                                )}>
                                <Icon className="w-4 h-4" />
                                <span className="text-sm font-medium">
                                    {dimension.label}
                                </span>
                            </button>
                        )
                    })}
                </div>

                {/* Active Dimension Overview */}
                <section
                    className={cn('rounded-2xl p-6', activeDimension.bgLight)}>
                    <div className="flex items-center gap-4 mb-4">
                        <div
                            className={cn(
                                'w-14 h-14 rounded-2xl flex items-center justify-center',
                                activeDimension.color,
                            )}>
                            <ActiveIcon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">
                                {activeDimension.label}
                            </h2>
                            <p className="text-sm text-gray-600">
                                Wellness Dimension
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-600">
                        {activeArea === 'mental' &&
                            'Focus on your emotional health, stress management, and mental clarity.'}
                        {activeArea === 'physical' &&
                            'Maintain your body through exercise, nutrition, and proper rest.'}
                        {activeArea === 'financial' &&
                            'Build financial security and healthy money management habits.'}
                        {activeArea === 'occupational' &&
                            'Find purpose and satisfaction in your work and career.'}
                        {activeArea === 'social' &&
                            'Nurture meaningful relationships and community connections.'}
                        {activeArea === 'spiritual' &&
                            'Connect with your inner self and find meaning in life.'}
                    </p>
                </section>

                {/* Quick Actions */}
                <section className="bg-white rounded-2xl p-4 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-4">
                        Quick Actions
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        <Link
                            href={`/services?category=${activeArea}`}
                            className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <h4 className="font-medium text-gray-900 mb-1">
                                Find Services
                            </h4>
                            <p className="text-xs text-gray-500">
                                Browse {activeDimension.label} services
                            </p>
                        </Link>
                        <Link
                            href="/profile"
                            className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <h4 className="font-medium text-gray-900 mb-1">
                                Daily Check-in
                            </h4>
                            <p className="text-xs text-gray-500">
                                Log your mood today
                            </p>
                        </Link>
                    </div>
                </section>

                {/* Tips & Resources */}
                <section className="bg-white rounded-2xl p-4 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-4">
                        Tips & Resources
                    </h3>

                    {isLoading ? (
                        <div className="space-y-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="animate-pulse">
                                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
                                    <div className="h-4 bg-gray-200 rounded w-full" />
                                </div>
                            ))}
                        </div>
                    ) : tips.length === 0 ? (
                        <p className="text-gray-500 text-center py-4">
                            No tips available for this area
                        </p>
                    ) : (
                        <div className="space-y-3">
                            {tips.map(tip => (
                                <Link
                                    key={tip.id}
                                    href={`/wellness/tips/${tip.id}`}
                                    className="block p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="flex-1">
                                            <h4 className="font-medium text-gray-900 mb-1">
                                                {tip.title}
                                            </h4>
                                            <p className="text-sm text-gray-500 line-clamp-2">
                                                {tip.content}
                                            </p>
                                        </div>
                                        <FiChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </section>

                {/* Progress Tracking */}
                <section className="bg-white rounded-2xl p-4 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-4">
                        Your Progress
                    </h3>
                    <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">
                            Track your {activeDimension.label.toLowerCase()}{' '}
                            wellness journey
                        </p>
                        <Link
                            href="/profile"
                            className="inline-block px-6 py-2 bg-primary text-white rounded-full text-sm font-medium">
                            View Dashboard
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    )
}
