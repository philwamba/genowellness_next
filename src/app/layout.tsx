import type { Metadata } from 'next'
import { Nunito, Poppins } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito',
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: 'GENO Wellness - Your Mental Health Companion',
    description: 'Wellness platform for personalized health insights',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${nunito.variable} ${poppins.variable} antialiased`}>
                {children}
            </body>
        </html>
    )
}
