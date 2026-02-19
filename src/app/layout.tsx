import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// @ts-expect-error - Next.js CSS import
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bookmark Manager',
  description: 'Save and sync your bookmarks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}