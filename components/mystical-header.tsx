"use client"

import { MetatronsCube, SacredStar, FlowerOfLife } from "@/components/sacred-symbols"
import { Star, Sparkles, Moon, Sun, Eye } from "lucide-react"

export function MysticalHeader() {
  return (
    <div className="relative text-center space-y-6 py-12">
      {/* Sacred symbols background */}
      <MetatronsCube className="top-0 left-1/4 -translate-x-1/2 -translate-y-1/2" size={120} color="#FFD700" />
      <SacredStar className="top-4 right-1/4 translate-x-1/2 -translate-y-1/2" size={80} color="#4169E1" />
      <FlowerOfLife className="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" size={100} color="#FFD700" />

      {/* Header content */}
      <div className="relative z-10 space-y-4">
        <div className="flex justify-center items-center space-x-3 mb-6">
          <Star className="h-10 w-10 text-accent animate-pulse golden-glow" />
          <Eye className="h-8 w-8 text-primary" />
          <Sparkles className="h-7 w-7 text-accent animate-pulse" />
          <Moon className="h-9 w-9 text-primary golden-glow" />
          <Sun className="h-8 w-8 text-accent" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent golden-glow">
          Numerología Integral
        </h1>

        <div className="max-w-4xl mx-auto space-y-3">
          <p className="text-xl md:text-2xl text-accent font-medium">Descubre los Secretos Sagrados de tu Alma</p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La numerología es la ciencia sagrada que revela los patrones divinos ocultos en tu nombre y fecha de
            nacimiento. A través de los números, podemos descifrar tu propósito de vida, tus dones espirituales y el
            camino hacia tu realización personal.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 text-accent" />
              Numerología Pitagórica
            </span>
            <span className="flex items-center gap-1">
              <Eye className="h-4 w-4 text-primary" />
              Cábala Hermética
            </span>
            <span className="flex items-center gap-1">
              <Moon className="h-4 w-4 text-accent" />
              Correspondencias Astrológicas
            </span>
            <span className="flex items-center gap-1">
              <Sun className="h-4 w-4 text-primary" />
              Simbolismo del Tarot
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
