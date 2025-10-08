'use client'

import { Fragment, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <header className="bg-white sticky transition-all text-white top-0 inset-x-0 w-screen z-20 duration-300">
            <div className="container">
                <div className="flex items-center justify-between py-2.5 lg:py-4.5">
                    {/* Logo */}
                    <div className="text-lg font-bold">
                        <Link href="/" aria-label="GENO Wellness Hub">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                className="h-8.5 lg:h-9 w-auto"
                                width={160}
                                height={36}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav
                        id="navbar"
                        className="lg:flex hidden justify-center gap-5">
                        {/* Home (single) */}
                        <Link
                            href="/"
                            className="text-dark flex items-center py-2.5 font-medium">
                            Home
                        </Link>

                        {/* For Individuals */}
                        <Menu
                            as="div"
                            className="m-1 relative inline-flex transition-all duration-300">
                            <Menu.Button className="cursor-pointer text-dark flex items-center py-2.5 font-medium">
                                For Individuals
                                <FiChevronDown
                                    className="ps-5 h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Menu.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-150"
                                enterFrom="opacity-0 -translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 -translate-y-1">
                                <Menu.Items className="absolute left-0 mt-2 w-60 origin-top-left rounded-2xl bg-white border border-neutral-200 focus:outline-none">
                                    <div className="p-5">
                                        <MenuLink
                                            href="/individuals/wellness-plans"
                                            label="Wellness Plans"
                                        />
                                        <MenuLink
                                            href="/individuals/coaching"
                                            label="1-on-1 Coaching"
                                        />
                                        <MenuLink
                                            href="/individuals/resources"
                                            label="Self-Care Library"
                                        />
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        {/* For Corporate */}
                        <Menu
                            as="div"
                            className="m-1 relative inline-flex transition-all duration-300">
                            <Menu.Button className="cursor-pointer text-dark flex items-center py-2.5 font-medium">
                                For Corporate
                                <FiChevronDown
                                    className="ps-5 h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Menu.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-150"
                                enterFrom="opacity-0 -translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 -translate-y-1">
                                <Menu.Items className="absolute left-0 mt-2 w-[560px] origin-top-left rounded-2xl bg-white border border-neutral-200 focus:outline-none">
                                    <div className="grid grid-cols-2 p-5 gap-5">
                                        <div>
                                            <Image
                                                src="/corporate-teaser.jpg" // optional illustration
                                                alt=""
                                                className="rounded-2xl w-62.5 h-auto"
                                                width={400}
                                                height={260}
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center gap-2.5 py-5">
                                            <Link
                                                href="/corporate/onboarding"
                                                className="flex items-center gap-1.25 p-4 transition-all duration-300 hover:bg-body-bg rounded-2xl">
                                                <span className="text-black text-2xl">
                                                    🏁
                                                </span>
                                                <div>
                                                    <div className="text-black">
                                                        Seamless onboarding
                                                    </div>
                                                    <p className="text-dark text-sm">
                                                        Quick, easy setup.
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link
                                                href="/corporate/programs"
                                                className="flex items-center gap-1.25 p-4 transition-all duration-300 hover:bg-body-bg rounded-2xl">
                                                <span className="text-black text-2xl">
                                                    ⚙️
                                                </span>
                                                <div>
                                                    <div className="text-black">
                                                        Responsive programs
                                                    </div>
                                                    <p className="text-dark text-sm">
                                                        Great on any device.
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link
                                                href="/corporate/analytics"
                                                className="flex items-center gap-1.25 p-4 transition-all duration-300 hover:bg-body-bg rounded-2xl">
                                                <span className="text-black text-2xl">
                                                    📊
                                                </span>
                                                <div>
                                                    <div className="text-black">
                                                        Integrated analytics
                                                    </div>
                                                    <p className="text-dark text-sm">
                                                        Real-time insights.
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        {/* About Us */}
                        <Link
                            href="/about"
                            className="text-dark flex items-center py-2.5 font-medium">
                            About Us
                        </Link>

                        {/* Resources */}
                        <Menu as="div" className="m-1 relative inline-flex">
                            <Menu.Button className="cursor-pointer text-dark flex items-center py-2.5 font-medium">
                                Resources
                                <FiChevronDown
                                    className="ps-5 h-4 w-4"
                                    aria-hidden="true"
                                />
                            </Menu.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-150"
                                enterFrom="opacity-0 -translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 -translate-y-1">
                                <Menu.Items className="absolute left-0 mt-2 w-[360px] origin-top-left rounded-2xl bg-white border border-neutral-200 focus:outline-none">
                                    <div className="grid grid-cols-2 p-5 gap-10">
                                        <div>
                                            <MenuLink
                                                href="/resources/news-events"
                                                label="News & Events"
                                            />
                                            <MenuLink
                                                href="/blog"
                                                label="Blog"
                                            />
                                            <MenuLink
                                                href="/glossary"
                                                label="Glossary"
                                            />
                                            <MenuLink
                                                href="/faqs"
                                                label="FAQs"
                                            />
                                        </div>
                                        <div>
                                            <MenuLink
                                                href="/resources/guides"
                                                label="Guides"
                                            />
                                            <MenuLink
                                                href="/resources/case-studies"
                                                label="Case Studies"
                                            />
                                            <MenuLink
                                                href="/resources/press"
                                                label="Press"
                                            />
                                            <MenuLink
                                                href="/privacy"
                                                label="Privacy Policy"
                                            />
                                        </div>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        {/* Contact us */}
                        <Link
                            href="/contact"
                            className="flex items-center font-medium text-dark rounded-lg text-base py-1.25 hover:underline">
                            Contact us
                        </Link>
                    </nav>

                    {/* Right side */}
                    <div className="flex flex-row justify-center items-center md:gap-4 gap-2.5">

                        {/* Join Now CTA */}
                        <div className="md:flex hidden">
                            <Link
                                href="/join-waitlist"
                                className="bg-primary text-dark hover:text-primary hover:bg-dark rounded-2xl px-7.5 py-3.5 font-medium transition-all duration-300">
                                Join Now
                            </Link>
                        </div>

                        {/* Mobile toggle */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileOpen(true)}
                                className="bg-dark text-white focus:text-black focus:bg-primary inline-flex justify-center items-center rounded-2xl md:size-13 size-11 p-3.5 font-medium transition-all duration-300"
                                aria-haspopup="dialog"
                                aria-expanded={mobileOpen}
                                aria-controls="mobileMenuOffcanvas">
                                <FiMenu className="h-5 w-5 text-2xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Off-Canvas */}
            <Dialog
                as="div"
                open={mobileOpen}
                onClose={setMobileOpen}
                className="relative z-[60]">
                <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
                <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
                    <div className="flex items-center justify-between p-4 border-b border-neutral-200">
                        <Link
                            href="/"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2">
                            <Image
                                src="/geno-logo.svg"
                                alt="GENO Wellness Hub"
                                width={120}
                                height={32}
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="rounded-xl p-2 hover:bg-neutral-100"
                            aria-label="Close menu">
                            <FiX className="h-6 w-6 text-neutral-800" />
                        </button>
                    </div>

                    <div className="p-4 space-y-2">
                        {/* Home */}
                        <MobileLink
                            href="/"
                            onClose={() => setMobileOpen(false)}>
                            Home
                        </MobileLink>

                        {/* Individuals */}
                        <Disclosure>
                            {({ open }: { open: boolean }) => (
                                <div className="border border-neutral-200 rounded-xl">
                                    <Disclosure.Button className="w-full flex justify-between items-center px-4 py-3 text-left">
                                        <span className="text-neutral-900 font-medium">
                                            For Individuals
                                        </span>
                                        <FiChevronDown
                                            className={`h-5 w-5 transition ${
                                                open ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-2 pb-3">
                                        <MobileSubLink
                                            href="/individuals/wellness-plans"
                                            onClose={() =>
                                                setMobileOpen(false)
                                            }>
                                            Wellness Plans
                                        </MobileSubLink>
                                        <MobileSubLink
                                            href="/individuals/coaching"
                                            onClose={() =>
                                                setMobileOpen(false)
                                            }>
                                            1-on-1 Coaching
                                        </MobileSubLink>
                                        <MobileSubLink
                                            href="/individuals/resources"
                                            onClose={() =>
                                                setMobileOpen(false)
                                            }>
                                            Self-Care Library
                                        </MobileSubLink>
                                    </Disclosure.Panel>
                                </div>
                            )}
                        </Disclosure>

                        {/* Corporate */}
                        <Disclosure>
                            {({ open }: { open: boolean }) => (
                                <div className="border border-neutral-200 rounded-xl">
                                    <Disclosure.Button className="w-full flex justify-between items-center px-4 py-3 text-left">
                                        <span className="text-neutral-900 font-medium">
                                            For Corporate
                                        </span>
                                        <FiChevronDown
                                            className={`h-5 w-5 transition ${
                                                open ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-2 pb-3">
                                        <MobileSubLink
                                            href="/corporate/onboarding"
                                            onClose={() =>
                                                setMobileOpen(false)
                                            }>
                                            Seamless onboarding
                                        </MobileSubLink>
                                        <MobileSubLink
                                            href="/corporate/programs"
                                            onClose={() =>
                                                setMobileOpen(false)
                                            }>
                                            Responsive programs
                                        </MobileSubLink>
                                        <MobileSubLink
                                            href="/corporate/analytics"
                                            onClose={() =>
                                                setMobileOpen(false)
                                            }>
                                            Integrated analytics
                                        </MobileSubLink>
                                    </Disclosure.Panel>
                                </div>
                            )}
                        </Disclosure>

                        {/* About */}
                        <MobileLink
                            href="/about"
                            onClose={() => setMobileOpen(false)}>
                            About Us
                        </MobileLink>

                        {/* Resources */}
                        <Disclosure>
                            {({ open }: { open: boolean }) => (
                                <div className="border border-neutral-200 rounded-xl">
                                    <Disclosure.Button className="w-full flex justify-between items-center px-4 py-3 text-left">
                                        <span className="text-neutral-900 font-medium">
                                            Resources
                                        </span>
                                        <FiChevronDown
                                            className={`h-5 w-5 transition ${
                                                open ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-2 pb-3 grid grid-cols-1">
                                        <MobileSubLink
                                            href="/resources/news-events"
                                            onClose={() =>
                                                setMobileOpen(false)
                                            }>
                                            News &amp; Events
                                        </MobileSubLink>
                                        <MobileSubLink
                                            href="/blog"
                                            onClose={() =>
                                                setMobileOpen(false)
                                            }>
                                            Blog
                                        </MobileSubLink>
                                        <MobileSubLink
                                            href="/glossary"
                                            onClose={() =>
                                                setMobileOpen(false)
                                            }>
                                            Glossary
                                        </MobileSubLink>
                                        <MobileSubLink
                                            href="/faqs"
                                            onClose={() =>
                                                setMobileOpen(false)
                                            }>
                                            FAQs
                                        </MobileSubLink>
                                    </Disclosure.Panel>
                                </div>
                            )}
                        </Disclosure>

                        {/* Contact */}
                        <MobileLink
                            href="/contact"
                            onClose={() => setMobileOpen(false)}>
                            Contact us
                        </MobileLink>

                        {/* CTA */}
                        <Link
                            href="/join-waitlist"
                            onClick={() => setMobileOpen(false)}
                            className="block text-center bg-primary text-dark hover:text-primary hover:bg-dark rounded-2xl px-7.5 py-3.5 font-medium transition-all duration-300 mt-2">
                            Join Now
                        </Link>
                    </div>
                </div>
            </Dialog>
        </header>
    )
}

/* ---------- Helpers ---------- */
function MenuLink({ href, label }: { href: string; label: string }) {
    return (
        <Menu.Item>
            {({ active }: { active: boolean }) => (
                <Link
                    href={href}
                    className={`flex items-center font-medium text-dark rounded-lg text-base py-1.25 hover:underline ${
                        active ? 'underline' : ''
                    }`}>
                    {label}
                </Link>
            )}
        </Menu.Item>
    )
}

function MobileLink({
    href,
    children,
    onClose,
}: {
    href: string
    children: React.ReactNode
    onClose: () => void
}) {
    return (
        <Link
            href={href}
            onClick={onClose}
            className="block px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 font-medium">
            {children}
        </Link>
    )
}

function MobileSubLink({
    href,
    children,
    onClose,
}: {
    href: string
    children: React.ReactNode
    onClose: () => void
}) {
    return (
        <Link
            href={href}
            onClick={onClose}
            className="block px-3 py-2 rounded-lg text-neutral-800 hover:bg-neutral-50">
            {children}
        </Link>
    )
}
