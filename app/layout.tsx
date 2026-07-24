import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hang Loose Divers — Koh Tao',
  description: 'Scuba diving courses, fun dives and liveaboards in Koh Tao, Thailand',
  icons: {
    icon: '/photos/logo-shaka.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
