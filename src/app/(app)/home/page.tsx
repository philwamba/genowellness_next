'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'sonner'
import { AppHeader } from '@/components/layout/app-header'
import { useAuthStore } from '@/lib/stores/auth-store'
import { useWellnessStore } from '@/lib/stores/wellness-store'
import { contentApi, servicesApi } from '@/lib/api/client'
import { Service, WellnessTip, Article } from '@/types'
import { getMoodEmoji, cn } from '@/lib/utils'
import {
    FiChevronRight,
    FiHeart,
    FiActivity,
    FiDollarSign,
    FiUsers,
    FiBriefcase,
    FiStar,
} from 'react-icons/fi'

const wellnessCategories = [
    {
        id: 'mental',
        label: 'Mental',
        icon: FiHeart,
        color: 'bg-purple-100 text-purple-600',
    },
    {
        id: 'physical',
        label: 'Physical',
        icon: FiActivity,
        color: 'bg-green-100 text-green-600',
    },
    {
        id: 'financial',
        label: 'Financial',
        icon: FiDollarSign,
        color: 'bg-yellow-100 text-yellow-600',
    },
    {
        id: 'social',
        label: 'Social',
        icon: FiUsers,
        color: 'bg-blue-100 text-blue-600',
    },
    {
        id: 'work',
        label: 'Work-Life',
        icon: FiBriefcase,
        color: 'bg-orange-100 text-orange-600',
    },
    {
        id: 'spiritual',
        label: 'Purpose',
        icon: FiStar,
        color: 'bg-pink-100 text-pink-600',
    },
]

const moods = [
    { id: 'very_happy', emoji: '😃' },
    { id: 'happy', emoji: '😊' },
    { id: 'neutral', emoji: '😐' },
    { id: 'sad', emoji: '😢' },
    { id: 'anxious', emoji: '😟' },
    { id: 'tired', emoji: '😴' },
]

// Map service slugs to local images
const serviceImages: Record<string, string> = {
    'counselling': '/images/services/counseling.jpg',
    'coaching': '/images/services/coaching.jpg',
    'training': '/images/services/exercise.jpg',
    'mentorship': '/images/services/mentorship.jpg',
    'consultation': '/images/services/consultation.jpg',
    'other': '/images/services/diary.jpg',
    'mental-wellness': '/images/services/mental_wellness.jpg',
    'medical': '/images/services/medical.jpg',
    'financial-wellness': '/images/services/finance.jpg',
    'social-wellness': '/images/services/community.jpg',
    'work-life': '/images/services/work.jpg',
    'purpose': '/images/services/spiritual.jpg',
}

export default function HomePage() {
    // ... existing code ...

    return (
        // ... existing code ...
                        {services.slice(0, 4).map(service => {
                            const imageSrc = serviceImages[service.slug] || service.image_path
                            
                            return (
                                <Link
                                    key={service.id}
                                    href={`/services/${service.slug}`}
                                    className="flex-shrink-0 w-36 bg-white rounded-xl overflow-hidden shadow-sm">
                                    <div className="relative h-20 bg-gray-200">
                                        {imageSrc && (
                                            <Image
                                                src={imageSrc}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="p-3">
                    // ... existing code ...
                                    <p className="font-medium text-gray-900 text-sm">
                                        {service.title}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                                        {service.subtitle}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Recommended Articles */}
                {articles.length > 0 && (
                    <section>
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="font-semibold text-gray-900">
                                Recommended for You
                            </h2>
                        </div>
                        <div className="space-y-3">
                            {articles.map(article => (
                                <Link
                                    key={article.id}
                                    href={`/articles/${article.slug}`}
                                    className="flex gap-3 bg-white rounded-xl p-3 shadow-sm">
                                    <div className="relative w-20 h-20 rounded-lg bg-gray-200 flex-shrink-0 overflow-hidden">
                                        {article.featured_image && (
                                            <Image
                                                src={article.featured_image}
                                                alt={article.title}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-900 line-clamp-2">
                                            {article.title}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {article.reading_time_minutes} min
                                            read
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Wellness Stats Preview */}
                {user?.wellness_stats && (
                    <section className="bg-white rounded-2xl p-4 shadow-sm">
                        <h2 className="font-semibold text-gray-900 mb-3">
                            Your Progress
                        </h2>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="text-2xl font-bold text-primary">
                                    {user.wellness_stats.total_points}
                                </p>
                                <p className="text-xs text-gray-500">Points</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-primary">
                                    {user.wellness_stats.current_streak}
                                </p>
                                <p className="text-xs text-gray-500">
                                    Day Streak
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-primary">
                                    Lv {user.wellness_stats.level}
                                </p>
                                <p className="text-xs text-gray-500">Level</p>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    )
}
