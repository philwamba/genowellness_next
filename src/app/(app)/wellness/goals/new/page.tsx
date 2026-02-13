'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { AppHeader } from '@/components/layout/app-header'
import { GoalForm } from '@/components/wellness/goals'
import { type GoalCategoryValue } from '@/lib/validations/wellness'

export default function NewGoalPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const initialCategory = searchParams.get('category') as GoalCategoryValue | null

    const handleSuccess = () => {
        router.push('/wellness/goals')
    }

    const handleCancel = () => {
        router.back()
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            <AppHeader
                title="Create Goal"
                showBack
                onBack={() => router.back()}
            />

            <main className="p-4">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                    <GoalForm
                        initialCategory={initialCategory || undefined}
                        onSuccess={handleSuccess}
                        onCancel={handleCancel}
                    />
                </div>
            </main>
        </div>
    )
}
