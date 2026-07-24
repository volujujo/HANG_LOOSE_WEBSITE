import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hang Loose Divers — Koh Tao',
  description: 'Scuba diving courses, fun dives and liveaboards in Koh Tao, Thailand',
  // Favicon is provided by the app/icon.png file convention (yellow circle logo).
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
