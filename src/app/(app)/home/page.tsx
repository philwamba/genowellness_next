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

export default function HomePage() {
    const { user } = useAuthStore()
    const { todayMood, logMood, fetchTodayMood, isMoodLoading } =
        useWellnessStore()
    const [dailyTip, setDailyTip] = useState<WellnessTip | null>(null)
    const [services, setServices] = useState<Service[]>([])
    const [articles, setArticles] = useState<Article[]>([])

    const fetchDailyTip = useCallback(async () => {
        try {
            const response = await contentApi.getDailyTip()
            setDailyTip(response.tip as WellnessTip)
        } catch (error) {
            console.error('Failed to fetch daily tip:', error)
            toast.error('Failed to fetch daily tip')
        }
    }, [])

    const fetchServices = useCallback(async () => {
        try {
            const response = await servicesApi.list()
            setServices(response.services as Service[])
        } catch (error) {
            console.error('Failed to fetch services:', error)
            toast.error('Failed to fetch services')
        }
    }, [])

    const fetchArticles = useCallback(async () => {
        try {
            const response = await contentApi.getFeaturedArticles()
            setArticles((response.articles as Article[]).slice(0, 4))
        } catch (error) {
            console.error('Failed to fetch articles:', error)
            toast.error('Failed to fetch articles')
        }
    }, [])

    useEffect(() => {
        fetchTodayMood()
        fetchDailyTip()
        fetchServices()
        fetchArticles()
    }, [fetchTodayMood, fetchDailyTip, fetchServices, fetchArticles])

    const handleMoodSelect = async (mood: string) => {
        try {
            const result = await logMood(mood)
            if (result.points_earned > 0) {
                toast.success(`You earned ${result.points_earned} points!`)
            }
        } catch (error) {
            console.error('Failed to log mood:', error)
            toast.error('Failed to log mood')
        }
    }

    return (
        <div>
            <AppHeader showGreeting />

            <main className="px-4 py-6 space-y-6">
                {/* Daily Wellness Tip */}
                {dailyTip && (
                    <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-4">
                        <p className="text-sm text-gray-600 mb-1">
                            Daily Wellness Bite
                        </p>
                        <p className="text-gray-900 font-medium">
                            {dailyTip.content}
                        </p>
                        {dailyTip.author && (
                            <p className="text-xs text-gray-500 mt-2">
                                — {dailyTip.author}
                            </p>
                        )}
                    </section>
                )}

                {/* Mood Check-in */}
                <section className="bg-white rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-semibold text-gray-900">
                            How are you feeling?
                        </h2>
                        {todayMood && (
                            <span className="text-2xl">
                                {getMoodEmoji(todayMood.mood)}
                            </span>
                        )}
                    </div>
                    <div className="flex justify-between">
                        {moods.map(mood => (
                            <button
                                key={mood.id}
                                onClick={() => handleMoodSelect(mood.id)}
                                disabled={isMoodLoading}
                                className={cn(
                                    'w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all',
                                    todayMood?.mood === mood.id
                                        ? 'bg-primary/20 ring-2 ring-primary scale-110'
                                        : 'bg-gray-100 hover:bg-gray-200',
                                )}>
                                {mood.emoji}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Wellness Categories */}
                <section>
                    <h2 className="font-semibold text-gray-900 mb-3">
                        Explore Wellness
                    </h2>
                    <div className="grid grid-cols-3 gap-3">
                        {wellnessCategories.map(category => {
                            const Icon = category.icon
                            return (
                                <Link
                                    key={category.id}
                                    href={`/wellness?area=${category.id}`}
                                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                                    <div
                                        className={cn(
                                            'w-10 h-10 rounded-lg flex items-center justify-center mb-2',
                                            category.color,
                                        )}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                        {category.label}
                                    </p>
                                </Link>
                            )
                        })}
                    </div>
                </section>

                {/* Services */}
                <section>
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="font-semibold text-gray-900">
                            Our Services
                        </h2>
                        <Link
                            href="/services"
                            className="text-primary text-sm font-medium flex items-center">
                            See all <FiChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
                        {services.slice(0, 4).map(service => (
                            <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                className="flex-shrink-0 w-36 bg-white rounded-xl overflow-hidden shadow-sm">
                                <div className="relative h-20 bg-gray-200">
                                    {service.image_path && (
                                        <Image
                                            src={service.image_path}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                                <div className="p-3">
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
