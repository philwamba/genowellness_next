'use client'

import Image from 'next/image'

export default function KeyFeaturesSection() {
    return (
        <section className="bg-[#f3f3e5] lg:py-25 md:py-22.5 py-17.5">
            <div className="container">
                {/* Header */}
                <div className="lg:mb-12.5 text-center mb-7.5">
                    <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
                        Key Features That Support Your Wellness
                    </h2>
                    <p className="text-base mb-2.5 text-gray-600">
                        Discover tools designed to simplify healthy habits and
                        keep you on track.
                    </p>
                </div>

                {/* Content grid */}
                <div className="grid md:grid-cols-8 lg:gap-12.5 gap-5 items-center">
                    {/* Left card */}
                    <div className="md:col-span-5">
                        <div className="bg-white rounded-2xl lg:p-12.5 h-full pe-0 p-4">
                            <div className="grid md:grid-cols-2 lg:flex-row lg:gap-15 flex-col gap-7.5">
                                <div>
                                    <div className="md:size-15 size-12.5 mb-5 bg-primary rounded-full flex items-center justify-center">
                                        <i className="iconify solar--chart-square-linear lg:size-7.5 size-6.5 text-dark" />
                                    </div>
                                    <h3 className="lg:text-2.5xl md:text-2.5xl text-1.5xl mb-2.5">
                                        Personalized Insights, Instantly
                                    </h3>
                                    <p className="text-base lg:mt-35 md:mt-25 mt-5 text-gray-600">
                                        See trends across sleep, mood, activity,
                                        and nutrition with clear, actionable
                                        suggestions to improve your day.
                                    </p>
                                </div>

                                <div className="flex items-end relative">
                                    <Image
                                        src="/1-LlsmceSN.png"
                                        alt="GENO Wellness insights preview"
                                        width={640}
                                        height={420}
                                        className="rounded-2xl flex"
                                        priority
                                    />
                                    <Image
                                        src="/2-BXjLFFfl.svg"
                                        alt="Decorative overlay"
                                        width={200}
                                        height={200}
                                        className="absolute md:block md:-start-7.5 bottom-auto lg:top-22.5 hidden"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right dark card */}
                    <div className="md:col-span-3">
                        <div className="flex lg:p-12.5 p-5 bg-dark rounded-2xl lg:gap-24 gap-15 flex-col">
                            <div>
                                <div className="md:size-15 size-12.5 mb-5 bg-primary rounded-full flex items-center justify-center">
                                    <i className="iconify solar--bolt-linear lg:size-7.5 size-6.5 text-dark" />
                                </div>
                                <h4 className="text-white lg:text-2.5xl md:text-2.5xl text-1.5xl mb-2.5">
                                    Stay on Track, Wherever You Are
                                </h4>
                            </div>

                            <div>
                                <div className="gap-3.5 flex flex-col">
                                    <div className="flex gap-2.5">
                                        <i className="iconify tabler--circle-check size-6 text-primary" />
                                        <div className="text-white text-base">
                                            Habit & Routine Tracking
                                        </div>
                                    </div>
                                    <div className="flex gap-2.5">
                                        <i className="iconify tabler--circle-check size-6 text-primary" />
                                        <div className="text-white text-base">
                                            Mood & Stress Check-ins
                                        </div>
                                    </div>
                                    <div className="flex gap-2.5">
                                        <i className="iconify tabler--circle-check size-6 text-primary" />
                                        <div className="text-white text-base">
                                            Smart Reminders & Nudges
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stat band */}
                <div className="mt-10 bg-primary rounded-2xl lg:p-10 p-5">
                    <div className="grid md:grid-cols-3 lg:gap-10 gap-5">
                        <div>
                            <h5 className="md:text-2.5xl text-1.5xl">
                                Clear progress with every check-in.
                            </h5>
                        </div>

                        <div>
                            <div className="lg:flex items-center gap-5">
                                <h6 className="lg:text-5.5xl md:text-4.6xl text-3.4xl">
                                    99%
                                </h6>
                                <div className="fs-base text-dark">
                                    Report better awareness of daily habits
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="lg:flex items-center gap-5">
                                <h6 className="lg:text-5.5xl md:text-4.6xl text-3.4xl">
                                    4.8
                                </h6>
                                <div className="gap-1 flex-col flex">
                                    <div className="flex gap-1.5">
                                        <i className="iconify tabler--star-filled lg:size-6 size-5.5 text-dark" />
                                        <i className="iconify tabler--star-filled lg:size-6 size-5.5 text-dark" />
                                        <i className="iconify tabler--star-filled lg:size-6 size-5.5 text-dark" />
                                        <i className="iconify tabler--star-filled lg:size-6 size-5.5 text-dark" />
                                        <i className="iconify tabler--star-half-filled lg:size-6 size-5.5 text-dark" />
                                    </div>
                                    <div className="fs-base text-dark">
                                        Loved by wellness seekers
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact / CTA strip */}
                <div className="flex md:justify-center gap-2.5 mt-10 flex-wrap justify-start">
                    <i className="iconify solar--dialog-2-bold size-5.5 text-dark" />
                    <div className="text-dark fs-base">
                        Questions about GENO Wellness?
                    </div>

                    <a
                        href="/contact"
                        className="flex items-center gap-1 text-dark font-medium">
                        <div className="underline gap-1">Let&apos;s chat</div>
                        <i className="iconify tabler--arrow-right size-6" />
                    </a>
                </div>
            </div>
        </section>
    )
}
