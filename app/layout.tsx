import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { MysticalBackground } from "@/components/mystical-background"
import { FloatingSymbols } from "@/components/floating-symbols"
import { Navigation } from "@/components/navigation"
import "./globals.css"

import { PT_Sans_Narrow as V0_Font_PT_Sans_Narrow, Playfair_Display as V0_Font_Playfair_Display } from 'next/font/google'

// Initialize fonts
const _ptSansNarrow = V0_Font_PT_Sans_Narrow({ subsets: ['latin'], weight: ["400","700"], variable: '--v0-font-pt-sans-narrow' })
const _playfairDisplay = V0_Font_Playfair_Display({ subsets: ['latin'], weight: ["400","500","600","700","800","900"], variable: '--v0-font-playfair-display' })
const _v0_fontVariables = `${_ptSansNarrow.variable} ${_playfairDisplay.variable}`

export const metadata: Metadata = {
  title: "Numerología Integral - Descubre tu Destino",
  description:
    "Aplicación completa de numerología que combina sistemas pitagóricos, cábala, tarot y astrología para revelar tu mapa numerológico personal.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`font-serif antialiased ${_v0_fontVariables}`}>
        <MysticalBackground />
        <FloatingSymbols />
        <Navigation />
        <div className="relative z-20 pt-16">
          <Suspense fallback={null}>{children}</Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
