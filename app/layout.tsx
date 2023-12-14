import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Tasty recipes',
  description: 'Web app with tasty recipes',
  keywords: 'Tasty recipe, cooking, healthy food, food',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navigation />
        {children}
      </body>
    </html>
  )
}
