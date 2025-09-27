import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { MysticalBackground } from "@/components/mystical-background"
import { FloatingSymbols } from "@/components/floating-symbols"
import "./globals.css"

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
      <body className="font-sans antialiased">
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
