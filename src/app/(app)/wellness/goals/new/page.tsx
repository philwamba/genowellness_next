'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { AppHeader } from '@/components/layout/app-header'
import { GoalForm } from '@/components/wellness/goals'
import { type GoalCategoryValue } from '@/lib/validations/wellness'

const VALID_CATEGORIES: GoalCategoryValue[] = [
    'physical',
    'mental',
    'financial',
    'social',
    'occupational',
    'spiritual',
]

export default function NewGoalPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const categoryParam = searchParams.get('category')
    // Validate that the category is a valid GoalCategoryValue
    const initialCategory = categoryParam && VALID_CATEGORIES.includes(categoryParam as GoalCategoryValue)
        ? (categoryParam as GoalCategoryValue)
        : undefined

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
                        initialCategory={initialCategory}
                        onSuccess={handleSuccess}
                        onCancel={handleCancel}
                    />
                </div>
            </main>
        </div>
    )
}
