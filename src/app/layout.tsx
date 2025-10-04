import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.scss'

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Pizzaria Dev',
  description: 'A maior pizzaria para desenvolvedores web da América Latina!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  )
}
