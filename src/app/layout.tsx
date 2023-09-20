import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

//component

import NavBar from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '42i - Challenge',
  description: 'Technical challenge to prove mi skills and try for a FullStack Junior position',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
