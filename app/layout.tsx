import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/Footer'
import WhatsappButton from '@/components/ui/WhatsappButton'

export const metadata: Metadata = {
  title: 'Hang Loose Divers — Koh Tao',
  description: 'Scuba diving courses, fun dives and liveaboards in Koh Tao, Thailand',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%23FFA500"/><text x="50" y="60" font-size="40" font-weight="bold" text-anchor="middle" fill="white" font-family="Arial">🤙</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  )
}
