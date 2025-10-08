'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { FiCalendar, FiClock } from 'react-icons/fi'

type Props = {
    launchAt?: string
    title?: string
    subtitle?: string
}

const LOCALE = 'en-GB'
const TZ = 'Africa/Nairobi'

export default function ComingSoon({
    launchAt = '2025-12-01T10:00:00+03:00',
    title = 'We are launching soon',
    subtitle = 'We are preparing something clean and useful. Join the list to be notified at launch.',
}: Props) {
    const launchMs = useMemo(() => new Date(launchAt).getTime(), [launchAt])

    const [mounted, setMounted] = useState(false)
    const [now, setNow] = useState<number>(launchMs)

    useEffect(() => {
        setMounted(true)
        setNow(Date.now())
        const t = setInterval(() => setNow(Date.now()), 1000)
        return () => clearInterval(t)
    }, [])

    const remaining = Math.max(launchMs - now, 0)
    const dd = Math.floor(remaining / (1000 * 60 * 60 * 24))
    const hh = Math.floor((remaining / (1000 * 60 * 60)) % 24)
    const mm = Math.floor((remaining / (1000 * 60)) % 60)
    const ss = Math.floor((remaining / 1000) % 60)

    const formattedTarget = useMemo(
        () =>
            new Intl.DateTimeFormat(LOCALE, {
                timeZone: TZ,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            }).format(new Date(launchAt)),
        [launchAt],
    )

    return (
        <section className="bg-dark py-16 md:py-22.5 lg:py-32">
            <div className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-37.5 gap-10 items-center">
                    {/* Text + Button */}
                    <div>
                        <div className="bg-primary text-dark py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5">
                            <span className="inline-flex items-center gap-2">
                                <FiCalendar aria-hidden className="size-4" />{' '}
                                Launch notice
                            </span>
                        </div>

                        <h1 className="text-white lg:text-6xl md:text-5.5xl text-4xl mb-2.5">
                            {title}
                        </h1>
                        <p className="lg:mt-5 lg:mb-10 mt-2.5 mb-6 text-white/90 max-w-xl">
                            {subtitle}
                        </p>

                        {/* Countdown */}
                        <div className="grid grid-cols-4 gap-3 md:gap-4 lg:gap-5 max-w-lg">
                            {mounted ? (
                                <>
                                    <TimeBlock label="Days" value={dd} />
                                    <TimeBlock label="Hours" value={hh} />
                                    <TimeBlock label="Minutes" value={mm} />
                                    <TimeBlock label="Seconds" value={ss} />
                                </>
                            ) : (
                                // Static placeholders for SSR/first paint to avoid mismatches
                                <>
                                    <TimeBlock label="Days" value={0} />
                                    <TimeBlock label="Hours" value={0} />
                                    <TimeBlock label="Minutes" value={0} />
                                    <TimeBlock label="Seconds" value={0} />
                                </>
                            )}
                        </div>

                        {/* Join Waitlist button */}
                        <div className="mt-8 md:mt-10">
                            <Link
                                href="https://forms.gle/Peq5jNjPiii38LLd9"
                                target="_blank"
                                rel="noopener nofollow"
                                className="rounded-2xl px-7.5 py-3.5 font-medium transition-all duration-300 bg-primary text-dark hover:bg-neutral-900 hover:text-primary">
                                Join the Waitlist
                            </Link>
                        </div>

                        {/* Small helper line */}
                        <div className="flex items-center gap-2.5 text-white mt-6">
                            <FiClock aria-hidden className="size-5" />
                            <span className="text-sm">
                                Planned launch: {formattedTarget}
                            </span>
                        </div>
                    </div>

                    {/* Visual side */}
                    <div className="relative">
                        <div className="bg-white/5 rounded-2xl p-5 md:p-8 lg:p-10 border border-white/10">
                            <div className="grid grid-cols-2 gap-4">
                                <StatCard value="99%" label="Uptime target" />
                                <StatCard value=">10K" label="Waitlist goal" />
                                <StatCard value="24/7" label="Support hours" />
                                <StatCard
                                    value="3"
                                    label="New features at launch"
                                />
                            </div>
                        </div>
                        <div className="hidden md:block md:absolute md:-end-10 -end-7.5 -bottom-10">
                            <div className="bg-primary text-dark rounded-2xl px-4 py-2 font-medium shadow-sm">
                                Coming soon
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function TimeBlock({ label, value }: { label: string; value: number }) {
    const v = String(value).padStart(2, '0')
    return (
        <div className="bg-white rounded-2xl text-dark text-center p-4 md:p-5 border border-neutral-200">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold tabular-nums leading-none">
                {v}
            </div>
            <div className="mt-1 text-xs md:text-sm text-neutral-600">
                {label}
            </div>
        </div>
    )
}

function StatCard({ value, label }: { value: string; label: string }) {
    return (
        <div className="bg-white rounded-2xl p-4 border border-neutral-200 flex flex-col items-start">
            <div className="text-2xl font-semibold text-dark">{value}</div>
            <div className="text-sm text-neutral-600">{label}</div>
        </div>
    )
}
