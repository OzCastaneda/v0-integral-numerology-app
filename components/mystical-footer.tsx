"use client"

import { MetatronsCube, SacredStar } from "@/components/sacred-symbols"
import { Mail, Phone, MapPin, Heart, Star, Sparkles } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function MysticalFooter() {
  return (
    <footer className="relative mt-20 py-12 border-t border-border/50">
      {/* Sacred symbols background */}
      <SacredStar className="top-4 left-1/4 -translate-x-1/2 -translate-y-1/2" size={60} color="#FFD700" />
      <MetatronsCube className="top-4 right-1/4 translate-x-1/2 -translate-y-1/2" size={80} color="#4169E1" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent flex items-center gap-2">
              <Star className="h-5 w-5" />
              Información de Contacto
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>consultas@numerologia-integral.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Centro Místico Universal</span>
              </div>
            </div>
          </div>

          {/* About Numerology */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Sobre la Numerología
            </h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>
                La numerología es una ciencia sagrada milenaria que estudia la vibración de los números y su influencia
                en nuestras vidas.
              </p>
              <p>
                Cada número posee una energía única que revela aspectos profundos de nuestra personalidad, destino y
                propósito espiritual.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Nuestros Servicios
            </h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>• Análisis Numerológico Completo</p>
              <p>• Compatibilidad de Parejas</p>
              <p>• Numerología Empresarial</p>
              <p>• Consultas Personalizadas</p>
              <p>• Cursos de Numerología</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-accent" />
            <span>© 2025 Numerología Integral. Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-primary" />
            <span>
              Desarrollado con amor por <strong className="text-accent">Oswaldo Castañeda</strong>
            </span>
          </div>
        </div>

        {/* Mystical quote */}
        <div className="text-center mt-8 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
          <p className="text-sm text-muted-foreground italic">
            "Los números son el lenguaje universal con el que Dios escribió el universo" - Galileo Galilei
          </p>
        </div>
      </div>
    </footer>
  )
}
