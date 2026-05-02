import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Outfit } from 'next/font/google'
import { Providers } from '@/app/providers'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import '@/styles/globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Tharuksha Pramod | AI/ML Engineer',
	description: 'Portfolio of Tharuksha Pramod, an AI/ML Engineer and Fullstack Developer.',
}

export default function RootLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${outfit.className} antialiased`}>
				<Providers>
					<div className="min-h-screen bg-background">
						<Navbar />
						<main className="pt-16">{children}</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	)
}
