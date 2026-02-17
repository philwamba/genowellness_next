import { useMemo } from 'react'
import { useAuthStore } from '@/lib/stores/auth-store'

export function useAuth() {
    const store = useAuthStore()

    return useMemo(
        () => ({
            ...store,
            mutate: store.refreshUser,
        }),
        [store],
    )
}
