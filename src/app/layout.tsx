import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { RenderAside } from './renderAside'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My.Tree',
  description: 'Faça sua própria árvore de links',
  publisher: 'CodeWave Digital Solutions',
  icons: {
    icon: '/favicon.ico',
  },
  applicationName: 'My.Tree',
  keywords: ['links', 'tree', 'my.tree'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <RenderAside>{children}</RenderAside>
      </body>
    </html>
  )
}
