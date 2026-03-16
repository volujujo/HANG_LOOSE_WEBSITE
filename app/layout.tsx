import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/Footer'
import WhatsappButton from '@/components/ui/WhatsappButton'

export const metadata: Metadata = {
  title: 'Hang Loose Divers — Koh Tao',
  description: 'Scuba diving courses, fun dives and liveaboards in Koh Tao, Thailand',
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
