import useSWR from 'swr'
import api, { notificationsApi } from '@/lib/api/client'
import { Notification, PaginatedResponse } from '@/types'

export function useNotifications() {
    const { data, error, mutate, isLoading } = useSWR<{
        notifications: Notification[]
        meta: PaginatedResponse<Notification>['meta']
    }>('/notifications', async (url: string) => {
        const res = await api.get<{ notifications: Notification[]; meta: PaginatedResponse<Notification>['meta'] }>(
            url,
        )
        return res
    })

    const { data: unreadCountData, mutate: mutateUnreadCount } = useSWR<{
        count: number
    }>('/notifications/unread-count', async (url: string) => {
        const res = await api.get<{ count: number }>(url)
        return res
    })

    const markAsRead = async (id: number) => {
        await notificationsApi.markAsRead(id)
        mutate()
        mutateUnreadCount()
    }

    const markAllAsRead = async () => {
        await notificationsApi.markAllAsRead()
        mutate()
        mutateUnreadCount()
    }

    const remove = async (id: number) => {
        await notificationsApi.delete(id)
        mutate()
        mutateUnreadCount()
    }

    return {
        notifications: data?.notifications || [],
        meta: data?.meta,
        unreadCount: unreadCountData?.count || 0,
        isLoading,
        isError: error,
        mutate,
        mutateUnreadCount,
        markAsRead,
        markAllAsRead,
        remove,
    }
}
