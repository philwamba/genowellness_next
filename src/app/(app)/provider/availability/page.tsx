'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PageHeader } from '@/components/layout/page-header'
import { FiPlus, FiTrash2, FiClock, FiSave } from 'react-icons/fi'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

type TimeSlot = {
    start: string
    end: string
}

type WeekDay = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

type WeeklySchedule = Record<WeekDay, TimeSlot[]>

const DAYS: { id: WeekDay; label: string }[] = [
    { id: 'monday', label: 'Monday' },
    { id: 'tuesday', label: 'Tuesday' },
    { id: 'wednesday', label: 'Wednesday' },
    { id: 'thursday', label: 'Thursday' },
    { id: 'friday', label: 'Friday' },
    { id: 'saturday', label: 'Saturday' },
    { id: 'sunday', label: 'Sunday' },
]

export default function AvailabilityPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [schedule, setSchedule] = useState<WeeklySchedule>({
        monday: [{ start: '09:00', end: '17:00' }],
        tuesday: [{ start: '09:00', end: '17:00' }],
        wednesday: [{ start: '09:00', end: '17:00' }],
        thursday: [{ start: '09:00', end: '17:00' }],
        friday: [{ start: '09:00', end: '15:00' }],
        saturday: [],
        sunday: [],
    })

    const addSlot = (day: WeekDay) => {
        setSchedule((prev) => ({
            ...prev,
            [day]: [...prev[day], { start: '09:00', end: '10:00' }],
        }))
    }

    const removeSlot = (day: WeekDay, index: number) => {
        setSchedule((prev) => ({
            ...prev,
            [day]: prev[day].filter((_, i) => i !== index),
        }))
    }

    const updateSlot = (
        day: WeekDay,
        index: number,
        field: keyof TimeSlot,
        value: string,
    ) => {
        setSchedule((prev) => ({
            ...prev,
            [day]: prev[day].map((slot, i) =>
                i === index ? { ...slot, [field]: value } : slot,
            ),
        }))
    }

    const handleSave = async () => {
        setIsLoading(true)
        try {
            // Mock API call
            await new Promise((resolve) => setTimeout(resolve, 1000))
            toast.success('Availability updated successfully')
            router.push('/provider/dashboard')
        } catch (error) {
            toast.error('Failed to update availability')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            <PageHeader
                title="Manage Availability"
                showBack
                onBack={() => router.back()}
            />

            <main className="px-4 py-6">
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex items-center gap-2 text-gray-900">
                            <FiClock className="w-5 h-5 text-primary" />
                            <h2 className="text-lg font-semibold">Weekly Schedule</h2>
                        </div>
                        <p className="text-gray-500 text-sm mt-1">
                            Set your recurring availability for each day of the week.
                        </p>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {DAYS.map((day) => (
                            <div
                                key={day.id}
                                className={cn(
                                    'p-6 transition-colors',
                                    schedule[day.id].length === 0 && 'bg-gray-50/50',
                                )}
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-4">
                                    <div className="w-32 pt-2">
                                        <span className="font-medium text-gray-900">
                                            {day.label}
                                        </span>
                                    </div>

                                    <div className="flex-1 space-y-3">
                                        {schedule[day.id].length === 0 ? (
                                            <p className="text-gray-400 text-sm py-2">
                                                Unavailable
                                            </p>
                                        ) : (
                                            schedule[day.id].map((slot, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-3"
                                                >
                                                    <input
                                                        type="time"
                                                        value={slot.start}
                                                        onChange={(e) =>
                                                            updateSlot(
                                                                day.id,
                                                                index,
                                                                'start',
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                    />
                                                    <span className="text-gray-400">-</span>
                                                    <input
                                                        type="time"
                                                        value={slot.end}
                                                        onChange={(e) =>
                                                            updateSlot(
                                                                day.id,
                                                                index,
                                                                'end',
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                    />
                                                    <button
                                                        onClick={() =>
                                                            removeSlot(day.id, index)
                                                        }
                                                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                        aria-label="Remove slot"
                                                    >
                                                        <FiTrash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ))
                                        )}
                                        <button
                                            onClick={() => addSlot(day.id)}
                                            className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1"
                                        >
                                            <FiPlus className="w-4 h-4" />
                                            Add Time Slot
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 bg-gray-50 flex justify-end">
                        <button
                            onClick={handleSave}
                            disabled={isLoading}
                            className="px-6 py-2 bg-primary text-white rounded-xl font-medium flex items-center gap-2 hover:bg-primary/90 disabled:opacity-50 transition-colors"
                        >
                            {isLoading ? (
                                'Saving...'
                            ) : (
                                <>
                                    <FiSave className="w-4 h-4" />
                                    Save Changes
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
