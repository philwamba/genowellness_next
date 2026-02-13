'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { PageHeader } from '@/components/layout/page-header'
import { formatCurrency } from '@/lib/utils'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
} from 'recharts'
import { FiDollarSign, FiCalendar, FiUsers, FiTrendingUp } from 'react-icons/fi'

const MOCK_EARNINGS_DATA = [
    { name: 'Mon', amount: 120 },
    { name: 'Tue', amount: 300 },
    { name: 'Wed', amount: 240 },
    { name: 'Thu', amount: 450 },
    { name: 'Fri', amount: 180 },
    { name: 'Sat', amount: 600 },
    { name: 'Sun', amount: 400 },
]

const MOCK_SESSIONS_DATA = [
    { name: 'Mon', count: 2 },
    { name: 'Tue', count: 5 },
    { name: 'Wed', count: 4 },
    { name: 'Thu', count: 7 },
    { name: 'Fri', count: 3 },
    { name: 'Sat', count: 10 },
    { name: 'Sun', count: 6 },
]

export default function AnalyticsPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800)
        return () => clearTimeout(timer)
    }, [])

    const stats = [
        {
            label: 'Total Earnings',
            value: formatCurrency(2290),
            change: '+12.5%',
            isPositive: true,
            icon: FiDollarSign,
            color: 'text-green-600',
            bg: 'bg-green-100',
        },
        {
            label: 'Total Sessions',
            value: '37',
            change: '+8.2%',
            isPositive: true,
            icon: FiCalendar,
            color: 'text-blue-600',
            bg: 'bg-blue-100',
        },
        {
            label: 'New Clients',
            value: '12',
            change: '-2.4%',
            isPositive: false,
            icon: FiUsers,
            color: 'text-purple-600',
            bg: 'bg-purple-100',
        },
        {
            label: 'Avg. Rate',
            value: '$62/hr',
            change: '+4.1%',
            isPositive: true,
            icon: FiTrendingUp,
            color: 'text-orange-600',
            bg: 'bg-orange-100',
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            <PageHeader
                title="Analytics"
                showBack
                onBack={() => router.back()}
            />

            <main className="px-4 py-6 space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-2xl shadow-sm"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div
                                    className={`w-10 h-10 ${stat.bg} rounded-full flex items-center justify-center`}
                                >
                                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                </div>
                                <span
                                    className={`text-xs font-medium ${
                                        stat.isPositive
                                            ? 'text-green-600'
                                            : 'text-red-500'
                                    }`}
                                >
                                    {stat.change}
                                </span>
                            </div>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                            <p className="text-xl font-bold text-gray-900">
                                {isLoading ? '-' : stat.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Earnings Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">
                        Weekly Earnings
                    </h3>
                    <div className="h-64 w-full">
                        {isLoading ? (
                            <div className="h-full w-full bg-gray-100 animate-pulse rounded-lg" />
                        ) : (
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={MOCK_EARNINGS_DATA}>
                                    <defs>
                                        <linearGradient
                                            id="colorEarnings"
                                            x1="0"
                                            y1="0"
                                            x2="0"
                                            y2="1"
                                        >
                                            <stop
                                                offset="5%"
                                                stopColor="#10b981"
                                                stopOpacity={0.8}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="#10b981"
                                                stopOpacity={0}
                                            />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: '#6b7280' }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: '#6b7280' }}
                                        tickFormatter={(value) => `$${value}`}
                                    />
                                    <Tooltip
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        formatter={(value: any) => [`$${value}`, 'Earnings']}
                                        contentStyle={{
                                            borderRadius: '12px',
                                            border: 'none',
                                            boxShadow:
                                                '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                        }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="amount"
                                        stroke="#10b981"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorEarnings)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </div>

                {/* Sessions Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">
                        Sessions Overview
                    </h3>
                    <div className="h-64 w-full">
                        {isLoading ? (
                            <div className="h-full w-full bg-gray-100 animate-pulse rounded-lg" />
                        ) : (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={MOCK_SESSIONS_DATA}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: '#6b7280' }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: '#6b7280' }}
                                    />
                                    <Tooltip
                                        cursor={{ fill: '#f3f4f6' }}
                                        contentStyle={{
                                            borderRadius: '12px',
                                            border: 'none',
                                            boxShadow:
                                                '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                        }}
                                    />
                                    <Bar
                                        dataKey="count"
                                        name="Sessions"
                                        fill="#3b82f6"
                                        radius={[4, 4, 0, 0]}
                                        barSize={30}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}
