import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Providers } from '@/app/providers'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Your Name | Portfolio',
	description: 'Modern portfolio built with Next.js 15',
}

export default function RootLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} antialiased`}>
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
