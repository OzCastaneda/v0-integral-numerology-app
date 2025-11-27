import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { MysticalBackground } from "@/components/mystical-background"
import { FloatingSymbols } from "@/components/floating-symbols"
import { Navigation } from "@/components/navigation"
import "./globals.css"

import { Amatic_SC as V0_Font_Amatic_SC, Cormorant as V0_Font_Cormorant } from 'next/font/google'

// Initialize fonts
const _amaticSc = V0_Font_Amatic_SC({ subsets: ['latin'], weight: ["400","700"], variable: '--v0-font-amatic-sc' })
const _cormorant = V0_Font_Cormorant({ subsets: ['latin'], weight: ["300","400","500","600","700"], variable: '--v0-font-cormorant' })
const _v0_fontVariables = `${_amaticSc.variable} ${_cormorant.variable}`

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
