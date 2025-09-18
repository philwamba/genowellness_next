import Image from 'next/image'

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="px-6 py-4">
                <nav className="flex items-center justify-between max-w-7xl mx-auto">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                                G
                            </span>
                        </div>
                        <span className="font-nunito text-[18px] leading-[27px] text-[#141b2c]">
                            GENO
                        </span>
                    </div>

                    <div className="flex items-center gap-8">
                        <a
                            href="#"
                            className="font-nunito text-[18px] leading-[27px] text-[#141b2c]">
                            Science
                        </a>
                        <a
                            href="#"
                            className="font-nunito text-[18px] leading-[27px] text-[#141b2c]">
                            For Your Organization
                        </a>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <main className="relative">
                {/* Background Image */}
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
            </main>
        </div>
    )
}
