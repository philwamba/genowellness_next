import Image from 'next/image'
import HeroSection from '@/components/hero'
import QuickStartSection from '@/components/start'
import KeyFeaturesSection from '@/components/features'
import Link from 'next/link'
import CTA from '@/components/cta'

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection />

            {/* Main Content */}
            <main>
                {/* Quick Start Section */}
                <QuickStartSection />

                {/* Features Section */}
                <KeyFeaturesSection />

                {/* CTA */}
                <CTA />
            </main>
        </div>
    )
}
