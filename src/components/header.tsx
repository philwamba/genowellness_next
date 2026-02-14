'use client'

import { Fragment, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    Dialog,
    Disclosure,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import { BsArrowRight } from 'react-icons/bs'

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <>
            {/* Fixed header */}
            <header className="fixed top-0 inset-x-0 z-[100] w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-neutral-100">
                <div className="container">
                    <div className="flex items-center justify-between py-2.5 lg:py-4.5">
                        {/* Logo */}
                        <div className="text-lg font-bold">
                            <Link
                                href="/"
                                aria-label="GENO Wellness Hub"
                                className="inline-flex items-center">
                                <Image
                                    src="/logo.png"
                                    alt="GENO Wellness Hub"
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
                            className="hidden lg:flex items-center gap-2">
                            {/* Home */}
                            <NavLink href="/">Home</NavLink>

                            {/* For Individuals (Dropdown) */}
                            <Menu as="div" className="relative">
                                <MenuButton className="nav-trigger flex items-center outline-0 text-lg font-medium text-neutral-900 hover:text-neutral-700">
                                    <span>For Individuals</span>
                                    <FiChevronDown
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </MenuButton>
                                <Dropdown>
                                    <div className="p-3">
                                        <DropdownItem href="/individuals/wellness-plans">
                                            Wellness Plans
                                        </DropdownItem>
                                        <DropdownItem href="/individuals/coaching">
                                            1-on-1 Coaching
                                        </DropdownItem>
                                        <DropdownItem href="/individuals/resources">
                                            Self-Care Library
                                        </DropdownItem>
                                    </div>
                                </Dropdown>
                            </Menu>

                            {/* For Corporate */}
                            <NavLink href="/corporate">For Corporate</NavLink>

                            {/* <Popover className="relative">
                                <PopoverButton className="nav-trigger flex text-dark">
                                    <span>For Corporate</span>
                                    <FiChevronDown
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </PopoverButton>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-150"
                                    enterFrom="opacity-0 -translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 -translate-y-1">
                                    <PopoverPanel
                                        anchor="bottom start"
                                        className="z-[110] mt-2 w-[560px] rounded-2xl bg-white border border-neutral-200 shadow-xl focus:outline-none">
                                        <div className="grid grid-cols-2 gap-5 p-5">
                                            <div>
                                                <Image
                                                    src="/corporate-teaser.jpg"
                                                    alt="Corporate programs preview"
                                                    className="rounded-2xl w-full h-auto object-cover"
                                                    width={400}
                                                    height={260}
                                                />
                                            </div>
                                            <div className="flex flex-col justify-center gap-2.5">
                                                <MegaLink
                                                    href="/corporate/onboarding"
                                                    emoji="🏁"
                                                    title="Seamless onboarding"
                                                    desc="Quick, easy setup."
                                                />
                                                <MegaLink
                                                    href="/corporate/programs"
                                                    emoji="⚙️"
                                                    title="Responsive programs"
                                                    desc="Great on any device."
                                                />
                                                <MegaLink
                                                    href="/corporate/analytics"
                                                    emoji="📊"
                                                    title="Integrated analytics"
                                                    desc="Real-time insights."
                                                />
                                            </div>
                                        </div>
                                    </PopoverPanel>
                                </Transition>
                            </Popover> */}

                            {/* About */}
                            <NavLink href="/about">About Us</NavLink>

                            {/* Resources (Dropdown, 2 cols) */}
                            <Menu as="div" className="relative">
                                <MenuButton className="nav-trigger flex items-center outline-0 text-lg font-medium text-neutral-900 hover:text-neutral-700">
                                    <span className="mr-1">Resources</span>
                                    <FiChevronDown
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </MenuButton>
                                <Dropdown className="w-[360px]">
                                    <div className="grid grid-cols-2 gap-6 p-5">
                                        <div className="space-y-1">
                                            <DropdownItem href="/resources/news-events">
                                                News &amp; Events
                                            </DropdownItem>
                                            <DropdownItem href="/blog">
                                                Blog
                                            </DropdownItem>
                                            <DropdownItem href="/glossary">
                                                Glossary
                                            </DropdownItem>
                                            <DropdownItem href="/faqs">
                                                FAQs
                                            </DropdownItem>
                                        </div>
                                        <div className="space-y-1">
                                            <DropdownItem href="/resources/guides">
                                                Guides
                                            </DropdownItem>
                                            <DropdownItem href="/resources/case-studies">
                                                Case Studies
                                            </DropdownItem>
                                            <DropdownItem href="/resources/press">
                                                Press
                                            </DropdownItem>
                                            <DropdownItem href="/privacy">
                                                Privacy Policy
                                            </DropdownItem>
                                        </div>
                                    </div>
                                </Dropdown>
                            </Menu>

                            {/* Contact */}
                            <NavLink href="/contact">Contact Us</NavLink>
                        </nav>

                        {/* Right side */}
                        <div className="flex items-center md:gap-4 gap-2.5">
                            {/* Log In + CTA */}
                            <div className="hidden md:flex items-center gap-3">
                                <Link
                                    href="/login"
                                    className="rounded-2xl px-6 py-3.5 font-medium transition-all duration-300 border border-neutral-300 text-neutral-900 hover:bg-neutral-100">
                                    Log In
                                </Link>
                                <Link
                                    href="https://forms.gle/Peq5jNjPiii38LLd9"
                                    target="_blank"
                                    rel="noopener nofollow"
                                    className="rounded-2xl px-7.5 py-3.5 font-medium transition-all duration-300 bg-primary text-dark hover:bg-neutral-900 hover:text-primary">
                                    Join the Waitlist
                                </Link>
                            </div>

                            {/* Mobile toggle */}
                            <div className="flex lg:hidden">
                                <button
                                    type="button"
                                    onClick={() => setMobileOpen(true)}
                                    className="inline-flex items-center justify-center rounded-2xl md:size-13 size-11 p-3.5 font-medium transition-all duration-300 bg-neutral-900 text-white hover:bg-neutral-800"
                                    aria-haspopup="dialog"
                                    aria-expanded={mobileOpen}
                                    aria-controls="mobileMenuOffcanvas"
                                    aria-label="Open menu">
                                    <FiMenu className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Global trigger style (ensures chevron & text same line) */}
                <style jsx global>{`
                    .nav-trigger {
                        @apply inline-flex items-center gap-2 whitespace-nowrap px-3 py-2.5 text-base font-medium text-neutral-900 hover:text-neutral-700 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-300;
                    }
                `}</style>
            </header>

            {/* Spacer */}
            <div aria-hidden="true" className="h-[64px] lg:h-[84px]" />

            {/* Mobile Off-Canvas */}
            <Dialog
                as="div"
                open={mobileOpen}
                onClose={setMobileOpen}
                className="relative z-[200]">
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
                            {({ open }) => (
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
                            {({ open }) => (
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
                            {({ open }) => (
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

                        {/* Log In */}
                        <Link
                            href="/login"
                            onClick={() => setMobileOpen(false)}
                            className="block text-center border border-neutral-300 text-neutral-900 hover:bg-neutral-100 rounded-2xl px-7.5 py-3.5 font-medium transition-all duration-300 mt-2">
                            Log In
                        </Link>

                        {/* CTA */}
                        <Link
                            href="https://forms.gle/Peq5jNjPiii38LLd9"
                            target="_blank"
                            rel="noopener nofollow"
                            onClick={() => setMobileOpen(false)}
                            className="block text-center bg-primary text-dark hover:text-primary hover:bg-neutral-900 rounded-2xl px-7.5 py-3.5 font-medium transition-all duration-300 mt-2">
                            Join the Waitlist
                        </Link>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

/* ---------- Reusable UI ---------- */
function NavLink({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) {
    return (
        <Link
            href={href}
            className="px-3 py-2.5 text-lg font-medium text-neutral-900 hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-300 rounded-lg">
            {children}
        </Link>
    )
}

function Dropdown({
    children,
    className = 'w-60',
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <Transition
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1">
            <MenuItems
                anchor="bottom start"
                className={`z-[110] mt-2 origin-top-left rounded-2xl bg-white border border-neutral-200 shadow-xl focus:outline-none ${className}`}>
                {children}
            </MenuItems>
        </Transition>
    )
}

function DropdownItem({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) {
    return (
        <MenuItem>
            {({ active }) => (
                <Link
                    href={href}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-[15px] font-medium ${
                        active
                            ? 'bg-neutral-50 text-neutral-900'
                            : 'text-neutral-800'
                    }`}>
                    <span className="truncate">{children}</span>
                    <BsArrowRight className="ms-2 h-4 w-4 opacity-60 shrink-0" />
                </Link>
            )}
        </MenuItem>
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

/* ---------- Types & props ---------- */
declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        anchor?: string
    }
}
