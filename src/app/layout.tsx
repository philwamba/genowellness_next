import type { Metadata } from 'next'
import { Domine, Outfit } from 'next/font/google'
import './globals.css'
import './styles/app.css'

const domine = Domine({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-domine',
})

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-outfit',
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
                className={`${domine.variable} ${outfit.variable} antialiased`}>
                {children}
            </body>
        </html>
    )
}
