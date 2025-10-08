'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function CTA() {
    return (
        <section className="relative">
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-background.jpg"
                    alt="Woman with headphones in peaceful setting"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 py-20 lg:py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-2xl">
                        <h1 className="font-poppins font-bold mb-6 text-[3.5rem] leading-[1.1] tracking-[0] text-left text-[#f5f6fa]">
                            Mental Health Starts with You
                        </h1>

                        <p className="font-nunito font-normal mb-8 text-lg leading-[1.6] text-left text-[#f5f6fa]">
                            GENO supports you on your journey toward better
                            mental health.
                        </p>

                        <div className="flex gap-4">
                            <Link
                                href="https://forms.gle/Peq5jNjPiii38LLd9"
                                target="_blank"
                                rel="noopener nofollow"
                                className="rounded-2xl px-7.5 py-3.5 font-medium transition-all duration-300 bg-primary text-dark hover:bg-neutral-900 hover:text-primary">
                                Join the Waitlist
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
