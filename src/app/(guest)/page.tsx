import Image from 'next/image'
import HeroSection from '@/components/hero'
import QuickStartSection from '@/components/start'
import KeyFeaturesSection from '@/components/features'

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection />

            {/* Main Content */}
            <main>
                {/* Quick Start Section */}
                <QuickStartSection />

                <KeyFeaturesSection />

                {/* Background Image */}
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
                                    GENO supports you on your journey toward
                                    better mental health.
                                </p>

                                <div className="flex gap-4">
                                    <a href="#" className="inline-block">
                                        <Image
                                            src="/images/app-store.png"
                                            alt="Download on the App Store"
                                            width={180}
                                            height={60}
                                            className="h-14 w-auto"
                                        />
                                    </a>
                                    <a href="#" className="inline-block">
                                        <Image
                                            src="/images/play-store.png"
                                            alt="Get it on Google Play"
                                            width={180}
                                            height={60}
                                            className="h-14 w-auto"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
