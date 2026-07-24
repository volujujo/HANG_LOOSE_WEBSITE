import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/Footer'
import WhatsappButton from '@/components/ui/WhatsappButton'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <WhatsappButton />
    </>
  )
}
