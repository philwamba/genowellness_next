import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className="bg-dark py-12.5 lg:py-40 md:py-17.5">
            <div className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-37.5 gap-10">
                    <div data-aos="fade-right" className="aos-init aos-animate">
                        <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
                            Elevate your wellbeing
                        </div>
                        <h1 className="text-white lg:text-6xl md:text-5.5xl text-4xl mb-2.5 box">
                            Personalized Wellness for Mind, Body, and Lifestyle
                        </h1>
                        <p className="lg:mt-5 lg:mb-12.5 mt-2.5 mb-5 text-white">
                            Discover guided programs, nutrition plans, and
                            mindfulness tools—all in one place at GENO Wellness
                            Hub.
                        </p>

                        <Link
                            href="https://forms.gle/Peq5jNjPiii38LLd9"
                            target="_blank"
                            rel="noopener nofollow"
                            className="py-3.5 md:px-7.5 px-6 inline-flex bg-white font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-primary">
                            Join the Waitlist
                        </Link>

                        <div className="flex gap-4 mt-8">
                            {/* <a href="#" className="inline-block">
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
                            </a> */}
                        </div>
                    </div>

                    <div>
                        <div className="relative">
                            <Image
                                src="/images/mobile-app-mockup.png"
                                alt="GENO Wellness Hub preview"
                                className="rounded-2xl mt-[-100px] mx-auto"
                                width={400}
                                height={300}
                                priority
                            />
                            {/* <Image
                                src="/16-B4e3LIyM.svg"
                                alt="Decorative element"
                                className="md:absolute md:block md:-end-10 -end-7.5 -bottom-10 hidden"
                                width={220}
                                height={220}
                                priority
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
