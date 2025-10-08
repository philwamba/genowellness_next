'use client'

import Image from 'next/image'

export default function QuickStartSection() {
    return (
        <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
            <div className="container">
                <div className="text-center">
                    <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-gray-900">
                        Simple Steps to Wellness
                    </div>
                    <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl text-gray-900">
                        Quick Start Guide
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Get started with GENO Wellness App in just three simple
                        steps.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 md:gap-12.5 my-12.5 gap-5">
                    {/* Step 1 */}
                    <div className="flex lg:gap-3.5 lg:flex-row gap-3 flex-col">
                        <div className="flex-shrink-1">
                            <div className="lg:size-11 size-10 bg-primary rounded-full inline-flex items-center justify-center">
                                <h5 className="lg:text-1.5xl text-xl font-semibold">
                                    01
                                </h5>
                            </div>
                        </div>

                        <div className="flex-grow">
                            <h3 className="lg:text-1.5xl text-xl mb-2.5 text-gray-900 font-semibold">
                                Sign Up
                            </h3>
                            <p className="text-base mb-2.5 text-gray-600">
                                Create your GENO Wellness App account in
                                seconds.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex lg:gap-3.5 lg:flex-row gap-3 flex-col">
                        <div className="flex-shrink-2">
                            <div className="lg:size-11 size-10 bg-primary rounded-full inline-flex items-center justify-center">
                                <h5 className="lg:text-1.5xl text-xl font-semibold">
                                    02
                                </h5>
                            </div>
                        </div>

                        <div>
                            <h3 className="lg:text-1.5xl text-xl mb-2.5 text-gray-900 font-semibold">
                                Track Your Progress
                            </h3>
                            <p className="text-base mb-2.5 text-gray-600">
                                Monitor your wellness journey with personalized
                                insights.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex lg:gap-3.5 lg:flex-row gap-3 flex-col">
                        <div className="flex-shrink-2">
                            <div className="lg:size-11 size-10 bg-primary rounded-full inline-flex items-center justify-center">
                                <h5 className="lg:text-1.5xl text-xl font-semibold">
                                    03
                                </h5>
                            </div>
                        </div>

                        <div>
                            <h3 className="lg:text-1.5xl text-xl mb-2.5 text-gray-900 font-semibold">
                                Stay Connected
                            </h3>
                            <p className="text-base mb-2.5 text-gray-600">
                                Engage with the community and receive expert
                                guidance.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <button className="bg-primary font-medium py-3 px-6 rounded-lg hover:opacity-90 transition text-dark">
                        Join Waitlist
                    </button>
                </div>

                <div className="mt-10">
                    <Image
                        src="/images/wellness-support.jpg"
                        alt="GENO Wellness Quick Start"
                        width={1200}
                        height={600}
                        className="rounded-2xl mx-auto"
                    />
                </div>
            </div>
        </section>
    )
}
