import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-dark pt-15 pb-10 md:pt-17.5 md:pb-10 lg:pt-25 lg:pb-10 overflow-hidden">
            <div className="container">
                <div className="grid md:grid-cols-2 md:gap-12.5 lg:grid-cols-8 lg:gap-5 gap-10">
                    {/* Brand / Rating */}
                    <div className="lg:col-span-3">
                        <Link
                            href="/"
                            aria-label="GENO Wellness Hub Home"
                            className="inline-block">
                            <Image
                                src="/logo.png"
                                alt="GENO Wellness Hub"
                                className="h-11 w-auto"
                                width={176}
                                height={44}
                                priority
                            />
                        </Link>

                        <p className="mt-2.5 text-white">
                            Wellness You Can Trust, Growth You Can Feel
                        </p>

                        <div className="mt-10 flex items-center gap-3.5 md:mt-15">
                            <h2 className="md:text-5.5xl text-4xl text-white">
                                4.8
                            </h2>
                            <div>
                                <div className="mb-1 flex gap-1.5">
                                    <i className="iconify tabler--star-filled text-xl text-orange-300" />
                                    <i className="iconify tabler--star-filled text-xl text-orange-300" />
                                    <i className="iconify tabler--star-filled text-xl text-orange-300" />
                                    <i className="iconify tabler--star-filled text-xl text-orange-300" />
                                    <i className="iconify tabler--star-filled text-xl text-orange-300" />
                                </div>
                                <div className="text-white">
                                    Best Rated Wellness App
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="lg:col-span-3">
                        <h4 className="text-1.5xl mb-5 text-white">
                            Quick Links
                        </h4>

                        <div className="grid grid-cols-2 md:gap-12.5 lg:gap-5 gap-2.5">
                            {/* Column 1 */}
                            <div>
                                <ul className="flex flex-col justify-start gap-2.5 leading-normal">
                                    <li>
                                        <Link
                                            href="/about"
                                            className="hover:text-primary text-white transition-all duration-300">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact"
                                            className="hover:text-primary text-white transition-all duration-300">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/download-app"
                                            className="hover:text-primary text-white transition-all duration-300">
                                            Download App
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/brand-allies"
                                            className="hover:text-primary text-white transition-all duration-300">
                                            Our Brand Allies
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div>
                                <div className="mb-5">
                                    <ul className="flex flex-col justify-start gap-2.5 leading-normal">
                                        <li>
                                            <Link
                                                href="/serve/individuals"
                                                className="hover:text-primary text-white transition-all duration-300">
                                                Individuals
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/serve/corporate"
                                                className="hover:text-primary text-white transition-all duration-300">
                                                Corporate
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="flex flex-col justify-start gap-2.5 leading-normal">
                                        <li>
                                            <Link
                                                href="/news-events"
                                                className="hover:text-primary text-white transition-all duration-300">
                                                News &amp; Events
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/blog"
                                                className="hover:text-primary text-white transition-all duration-300">
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/glossary"
                                                className="hover:text-primary text-white transition-all duration-300">
                                                Glossary
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/faqs"
                                                className="hover:text-primary text-white transition-all duration-300">
                                                FAQs
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact / Social (unchanged UI structure) */}
                    <div className="lg:col-span-2">
                        <h4 className="text-1.5xl mb-5 text-white">
                            Contact us
                        </h4>
                        <div>
                            {/* <p className="mb-3.75 text-sm text-white md:text-base">
                                1234 Innovation drive, suite 100, tech city, CA
                                94043
                            </p>

                            <p className="hover:text-primary mb-3.75 text-sm text-white transition-all duration-300 md:text-base">
                                <a href="tel:1234567890">(123) 456-7890</a>
                            </p> */}

                            <p className="hover:text-primary mb-3.75 text-sm text-white underline transition-all duration-300 md:text-base">
                                <a href="mailto:hello@genowellnesshub.com">
                                    hello@genowellnesshub.com
                                </a>
                            </p>

                            <div className="mt-7.5 flex items-center gap-2.5 md:mt-12.5">
                                <div className="flex items-center">
                                    <p className="text-lg text-white">
                                        👋 Follow Us:
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <Link
                                        href="https://facebook.com"
                                        aria-label="Facebook"
                                        className="flex">
                                        <i className="iconify tabler--brand-meta size-5 text-white transform transition duration-300 hover:scale-110" />
                                    </Link>
                                    <Link
                                        href="https://dribbble.com"
                                        aria-label="Dribbble"
                                        className="flex">
                                        <i className="iconify tabler--brand-dribbble size-5 text-white transform transition duration-300 hover:scale-110" />
                                    </Link>
                                    <Link
                                        href="https://linkedin.com"
                                        aria-label="LinkedIn"
                                        className="flex">
                                        <i className="iconify tabler--brand-linkedin size-5 text-white transform transition duration-300 hover:scale-110" />
                                    </Link>
                                    <Link
                                        href="https://x.com"
                                        aria-label="X"
                                        className="flex">
                                        <i className="iconify tabler--brand-x size-5 text-white transform transition duration-300 hover:scale-110" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border-top mt-7.5 border-neutral-700 md:mt-15" />

                <div className="flex justify-between pt-7.5 md:pt-10">
                    <div className="text-sm text-white">
                        © {year}{' '}
                        <Link href="/" className="underline">
                            GENO Wellness Hub
                        </Link>
                    </div>

                    <div aria-hidden className="text-sm text-white" />
                </div>
            </div>
        </footer>
    )
}
