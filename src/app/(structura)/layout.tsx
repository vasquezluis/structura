import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import '@/app/globals.css'

import Toast from '@/components/Loaders'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Structura',
	description: 'Generación de estructura SQL usando lenguaje natural.',
}

export const fetchCache = 'force-no-store'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='es'>
			<body
				className={(cn('min-h-screen font-sans antialiased'), inter.className)}
			>
				<NavBar />
				{children}
				<Toast />
			</body>
		</html>
	)
}
