import './css/style.css'

import {  Syne, Arimo } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const arimo = Arimo({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})


export const metadata = {
  title: 'Revisora.babi',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${arimo.variable} font-inter antialiased bg-roxo-500 text-cinza-500 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Banner />
        </div>
      </body>
    </html>
  )
}
