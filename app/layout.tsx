import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { MysticalBackground } from "@/components/mystical-background"
import { FloatingSymbols } from "@/components/floating-symbols"
import "./globals.css"

import { Titillium_Web as V0_Font_Titillium_Web, Vollkorn as V0_Font_Vollkorn } from 'next/font/google'

// Initialize fonts
const _titilliumWeb = V0_Font_Titillium_Web({ subsets: ['latin'], weight: ["200","300","400","600","700","900"], variable: '--v0-font-titillium-web' })
const _vollkorn = V0_Font_Vollkorn({ subsets: ['latin'], weight: ["400","500","600","700","800","900"], variable: '--v0-font-vollkorn' })
const _v0_fontVariables = `${_titilliumWeb.variable} ${_vollkorn.variable}`

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
        <div className="relative z-20">
          <Suspense fallback={null}>{children}</Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
