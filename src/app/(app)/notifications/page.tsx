'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AppHeader } from '@/components/layout/app-header'
import { cn } from '@/lib/utils'
import {
    FiBell,
    FiCalendar,
    FiCheckCircle,
    FiMessageSquare,
    FiStar,
    FiTrash2,
} from 'react-icons/fi'

interface Notification {
    id: string
    type: 'session' | 'message' | 'achievement' | 'reminder' | 'general'
    title: string
    body: string
    link?: string
    read: boolean
    created_at: string
}

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState<Notification[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchNotifications()
    }, [])

    const fetchNotifications = async () => {
        try {
            // API call would go here
            // For now, using mock data
            setNotifications([
                {
                    id: '1',
                    type: 'session',
                    title: 'Session Reminder',
                    body: 'Your session with Dr. Smith starts in 1 hour',
                    link: '/sessions/123',
                    read: false,
                    created_at: new Date().toISOString(),
                },
                {
                    id: '2',
                    type: 'achievement',
                    title: 'New Badge Earned!',
                    body: 'Congratulations! You earned the "Week Warrior" badge',
                    link: '/profile',
                    read: false,
                    created_at: new Date(Date.now() - 3600000).toISOString(),
                },
                {
                    id: '3',
                    type: 'message',
                    title: 'New Message',
                    body: 'You have a new message from your wellness coach',
                    link: '/messages',
                    read: true,
                    created_at: new Date(Date.now() - 86400000).toISOString(),
                },
            ])
        } catch (error) {
            console.error('Failed to fetch notifications:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const markAsRead = async (id: string) => {
        setNotifications(
            notifications.map(n => (n.id === id ? { ...n, read: true } : n)),
        )
        // API call would go here
    }

    const markAllAsRead = async () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })))
        // API call would go here
    }

    const deleteNotification = async (id: string) => {
        setNotifications(notifications.filter(n => n.id !== id))
        // API call would go here
    }

    const getNotificationIcon = (type: string) => {
        switch (type) {
            case 'session':
                return <FiCalendar className="w-5 h-5 text-blue-500" />
            case 'message':
                return <FiMessageSquare className="w-5 h-5 text-green-500" />
            case 'achievement':
                return <FiStar className="w-5 h-5 text-yellow-500" />
            case 'reminder':
                return <FiBell className="w-5 h-5 text-purple-500" />
            default:
                return <FiBell className="w-5 h-5 text-gray-500" />
        }
    }

    const formatTime = (dateString: string) => {
        const date = new Date(dateString)
        const now = new Date()
        const diff = now.getTime() - date.getTime()

        if (diff < 60000) return 'Just now'
        if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`
        if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`
        if (diff < 604800000) return `${Math.floor(diff / 86400000)}d ago`
        return date.toLocaleDateString()
    }

    const unreadCount = notifications.filter(n => !n.read).length

    return (
        <div>
            <AppHeader
                title="Notifications"
                showGreeting={false}
                rightContent={
                    unreadCount > 0 && (
                        <button
                            onClick={markAllAsRead}
                            className="text-sm text-primary font-medium">
                            Mark all read
                        </button>
                    )
                }
            />

            <main className="px-4 py-6">
                {isLoading ? (
                    <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-4 animate-pulse">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-4 bg-gray-200 rounded w-3/4" />
                                        <div className="h-3 bg-gray-200 rounded w-full" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : notifications.length === 0 ? (
                    <div className="text-center py-12">
                        <FiBell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">No notifications yet</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {notifications.map(notification => (
                            <div
                                key={notification.id}
                                className={cn(
                                    'bg-white rounded-2xl p-4 shadow-sm relative',
                                    !notification.read &&
                                        'ring-1 ring-primary/20',
                                )}>
                                <Link
                                    href={notification.link || '#'}
                                    onClick={() => markAsRead(notification.id)}
                                    className="flex gap-3">
                                    <div
                                        className={cn(
                                            'w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0',
                                            notification.type === 'session' &&
                                                'bg-blue-100',
                                            notification.type === 'message' &&
                                                'bg-green-100',
                                            notification.type ===
                                                'achievement' &&
                                                'bg-yellow-100',
                                            notification.type === 'reminder' &&
                                                'bg-purple-100',
                                            notification.type === 'general' &&
                                                'bg-gray-100',
                                        )}>
                                        {getNotificationIcon(notification.type)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <h3
                                                className={cn(
                                                    'font-medium text-gray-900',
                                                    !notification.read &&
                                                        'font-semibold',
                                                )}>
                                                {notification.title}
                                            </h3>
                                            {!notification.read && (
                                                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-500 mt-0.5">
                                            {notification.body}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">
                                            {formatTime(
                                                notification.created_at,
                                            )}
                                        </p>
                                    </div>
                                </Link>
                                <button
                                    onClick={e => {
                                        e.preventDefault()
                                        deleteNotification(notification.id)
                                    }}
                                    className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 transition-colors">
                                    <FiTrash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}
