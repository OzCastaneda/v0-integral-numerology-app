"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { MysticalOrb } from "@/components/mystical-orb"
import { MysticalFooter } from "@/components/mystical-footer"
import { MetatronsCube, SacredStar } from "@/components/sacred-symbols"
import {
  NUMBER_MEANINGS,
  TAROT_CORRESPONDENCES,
  KABBALAH_CORRESPONDENCES,
  ASTROLOGY_CORRESPONDENCES,
} from "@/lib/numerology-constants"
import type { NumerologyResult } from "@/lib/numerology-calculations"
import { getFormattedBirthDate } from "@/lib/numerology-calculations"
import { Star, Moon, Sun, Sparkles, Eye, Crown, Heart, Download, Loader2 } from "lucide-react"

interface NumerologyResultsProps {
  results: NumerologyResult
  userData: {
    fullName: string
    birthDate: string
  }
  onNewReading: () => void
}

export function NumerologyResults({ results, userData, onNewReading }: NumerologyResultsProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  const handleGeneratePDF = async () => {
    setIsGeneratingPDF(true)
    try {
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          results,
          userData,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate PDF")
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.style.display = "none"
      a.href = url
      a.download = `reporte-numerologico-${userData.fullName.replace(/\s+/g, "-").toLowerCase()}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Error al generar el PDF. Por favor, inténtalo de nuevo.")
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  const getNumberIcon = (number: number) => {
    const icons = {
      1: Sun,
      2: Moon,
      3: Sparkles,
      4: Crown,
      5: Star,
      6: Heart,
      7: Eye,
      8: Crown,
      9: Star,
      11: Eye,
      22: Crown,
      33: Heart,
    }
    const IconComponent = icons[number as keyof typeof icons] || Star
    return <IconComponent className="w-6 h-6" />
  }

  const NumberCard = ({
    title,
    number,
    description,
    type,
  }: {
    title: string
    number: number
    description: string
    type: string
  }) => {
    const meaning = NUMBER_MEANINGS[number as keyof typeof NUMBER_MEANINGS]
    const tarot = TAROT_CORRESPONDENCES[number as keyof typeof TAROT_CORRESPONDENCES]
    const kabbalah = KABBALAH_CORRESPONDENCES[number as keyof typeof KABBALAH_CORRESPONDENCES]
    const astrology = ASTROLOGY_CORRESPONDENCES[number as keyof typeof ASTROLOGY_CORRESPONDENCES]

    return (
      <Card className="bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
        <MysticalOrb
          size={100}
          color={meaning?.color || "#6B46C1"}
          intensity={0.1}
          className="top-0 right-0 translate-x-1/2 -translate-y-1/2"
        />
        <CardHeader className="pb-3 relative z-10">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-primary flex items-center gap-2">
              {getNumberIcon(number)}
              {title}
            </CardTitle>
            <Badge variant="secondary" className="text-xs">
              {type}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 relative z-10">
          <div className="text-center">
            <div
              className="text-6xl font-bold mb-2 bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent"
              style={{
                textShadow: `0 0 20px ${meaning?.color}40`,
              }}
            >
              {number}
            </div>
            <h3 className="text-xl font-semibold text-accent mb-1">{meaning?.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{description}</p>
          </div>

          <Separator />

          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-primary mb-2">Características</h4>
              <p className="text-sm text-muted-foreground mb-2">{meaning?.description}</p>
              <div className="flex flex-wrap gap-1">
                {meaning?.keywords.map((keyword, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>

            {tarot && (
              <div>
                <h4 className="font-medium text-primary mb-1">Tarot</h4>
                <p className="text-sm text-muted-foreground">
                  {tarot.card} - {tarot.arcana}
                </p>
              </div>
            )}

            {kabbalah && (
              <div>
                <h4 className="font-medium text-primary mb-1">Kabbalah</h4>
                <p className="text-sm text-muted-foreground">
                  {kabbalah.sephira} ({kabbalah.meaning}) - {kabbalah.path}
                </p>
              </div>
            )}

            {astrology && (
              <div>
                <h4 className="font-medium text-primary mb-1">Astrología</h4>
                <p className="text-sm text-muted-foreground">
                  {astrology.planet} en {astrology.sign} - {astrology.quality}
                </p>
              </div>
            )}

            <div>
              <h4 className="font-medium text-primary mb-1">Elemento</h4>
              <Badge variant="secondary" className="text-xs" style={{ backgroundColor: `${meaning?.color}20` }}>
                {meaning?.element}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const getZodiacSign = (birthDate: string) => {
    const [year, month, day] = birthDate.split("-").map(Number)

    const zodiacSigns = [
      { name: "Capricornio", start: [12, 22], end: [1, 19], element: "Tierra", planet: "Saturno" },
      { name: "Acuario", start: [1, 20], end: [2, 18], element: "Aire", planet: "Urano" },
      { name: "Piscis", start: [2, 19], end: [3, 20], element: "Agua", planet: "Neptuno" },
      { name: "Aries", start: [3, 21], end: [4, 19], element: "Fuego", planet: "Marte" },
      { name: "Tauro", start: [4, 20], end: [5, 20], element: "Tierra", planet: "Venus" },
      { name: "Géminis", start: [5, 21], end: [6, 20], element: "Aire", planet: "Mercurio" },
      { name: "Cáncer", start: [6, 21], end: [7, 22], element: "Agua", planet: "Luna" },
      { name: "Leo", start: [7, 23], end: [8, 22], element: "Fuego", planet: "Sol" },
      { name: "Virgo", start: [8, 23], end: [9, 22], element: "Tierra", planet: "Mercurio" },
      { name: "Libra", start: [9, 23], end: [10, 22], element: "Aire", planet: "Venus" },
      { name: "Escorpio", start: [10, 23], end: [11, 21], element: "Agua", planet: "Plutón" },
      { name: "Sagitario", start: [11, 22], end: [12, 21], element: "Fuego", planet: "Júpiter" },
    ]

    for (const sign of zodiacSigns) {
      const [startMonth, startDay] = sign.start
      const [endMonth, endDay] = sign.end

      // Handle signs that cross year boundary (like Capricornio)
      if (startMonth > endMonth) {
        if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
          return sign
        }
      } else {
        // Handle normal signs within the same year
        if (
          (month === startMonth && day >= startDay) ||
          (month === endMonth && day <= endDay) ||
          (month > startMonth && month < endMonth)
        ) {
          return sign
        }
      }
    }

    return zodiacSigns[0] // Default to Capricornio
  }

  const zodiacSign = getZodiacSign(userData.birthDate)

  return (
    <div className="min-h-screen relative">
      <MetatronsCube
        size={200}
        color="#FFD700"
        intensity={0.15}
        className="top-1/4 left-1/6 -translate-x-1/2 -translate-y-1/2"
      />
      <SacredStar
        size={150}
        color="#4169E1"
        intensity={0.12}
        className="bottom-1/3 right-1/6 translate-x-1/2 translate-y-1/2"
      />
      <MetatronsCube
        size={180}
        color="#4169E1"
        intensity={0.1}
        className="top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2"
      />

      <div className="max-w-7xl mx-auto p-4 space-y-8 relative z-10">
        <div className="text-center space-y-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent golden-glow">
            Tu Mapa Numerológico Integral
          </h1>
          <div className="space-y-3">
            <p className="text-2xl text-accent font-semibold">{userData.fullName}</p>
            <p className="text-lg text-muted-foreground">
              Nacido el {getFormattedBirthDate(userData.birthDate)} • Signo: {zodiacSign.name}
            </p>
            <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 text-accent" />
                Elemento: {zodiacSign.element}
              </span>
              <span className="flex items-center gap-1">
                <Sun className="h-4 w-4 text-primary" />
                Planeta: {zodiacSign.planet}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="detailed">Detallado</TabsTrigger>
            <TabsTrigger value="synthesis">Síntesis</TabsTrigger>
            <TabsTrigger value="esoteric">Esotérico</TabsTrigger>
            <TabsTrigger value="astrology">Astrología</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <NumberCard
                title="Número de Destino"
                number={results.destiny}
                description="Tu misión de vida y propósito general"
                type="Esencial"
              />
              <NumberCard
                title="Número del Alma"
                number={results.soul}
                description="Tus deseos internos y motivaciones"
                type="Alma"
              />
              <NumberCard
                title="Número de Personalidad"
                number={results.personality}
                description="Cómo te perciben los demás"
                type="Personalidad"
              />
              <NumberCard
                title="Número de Expresión"
                number={results.expression}
                description="Tus talentos y habilidades naturales"
                type="Expresión"
              />
              <NumberCard
                title="Número de Suerte"
                number={results.luck}
                description="Tu número de la fortuna"
                type="Fortuna"
              />
              <NumberCard
                title="Año Personal"
                number={results.personalYear}
                description="Energía de este año para ti"
                type="Temporal"
              />
            </div>
          </TabsContent>

          <TabsContent value="detailed" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Interpretación Detallada</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-accent">Números Principales</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-background/50 rounded-lg">
                        <h4 className="font-medium text-primary mb-2">Número de Destino ({results.destiny})</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Cálculo:</strong> Suma de todos los dígitos de tu fecha de nacimiento
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Este número revela tu misión de vida y propósito general.{" "}
                          {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.description}
                        </p>
                      </div>
                      <div className="p-4 bg-background/50 rounded-lg">
                        <h4 className="font-medium text-primary mb-2">Número del Alma ({results.soul})</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Cálculo:</strong> Suma de las vocales de tu nombre completo
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Representa tus deseos internos y motivaciones más profundas.{" "}
                          {NUMBER_MEANINGS[results.soul as keyof typeof NUMBER_MEANINGS]?.description}
                        </p>
                      </div>
                      <div className="p-4 bg-background/50 rounded-lg">
                        <h4 className="font-medium text-primary mb-2">
                          Número de Personalidad ({results.personality})
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Cálculo:</strong> Suma de las consonantes de tu nombre completo
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Indica cómo te perciben los demás y tu imagen externa.{" "}
                          {NUMBER_MEANINGS[results.personality as keyof typeof NUMBER_MEANINGS]?.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-accent">Números Secundarios</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-background/50 rounded-lg">
                        <h4 className="font-medium text-primary mb-2">Número de Expresión ({results.expression})</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Cálculo:</strong> Suma de todas las letras de tu nombre completo
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Revela tus talentos y habilidades naturales.{" "}
                          {NUMBER_MEANINGS[results.expression as keyof typeof NUMBER_MEANINGS]?.description}
                        </p>
                      </div>
                      <div className="p-4 bg-background/50 rounded-lg">
                        <h4 className="font-medium text-primary mb-2">Número de Suerte ({results.luck})</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Cálculo:</strong> Combinación de tu Destino y Expresión
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Tu número de la fortuna que atrae oportunidades favorables.{" "}
                          {NUMBER_MEANINGS[results.luck as keyof typeof NUMBER_MEANINGS]?.description}
                        </p>
                      </div>
                      <div className="p-4 bg-background/50 rounded-lg">
                        <h4 className="font-medium text-primary mb-2">Año Personal ({results.personalYear})</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Cálculo:</strong> Año actual + mes y día de nacimiento
                        </p>
                        <p className="text-sm text-muted-foreground">
                          La energía que te acompaña durante este año específico.{" "}
                          {NUMBER_MEANINGS[results.personalYear as keyof typeof NUMBER_MEANINGS]?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />
                <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <Crown className="w-5 h-5" />
                    Números Maestros
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Los números maestros (11, 22, 33, 44) NO se reducen a un solo dígito porque poseen una vibración
                    especial y más elevada.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <div className="text-sm">
                      <strong className="text-accent">Ejemplo correcto:</strong>
                      <p className="text-muted-foreground">25 → 2+5 = 7 ✓</p>
                      <p className="text-muted-foreground">33 → NO reducir (es maestro) ✓</p>
                    </div>
                    <div className="text-sm">
                      <strong className="text-accent">Números maestros:</strong>
                      <p className="text-muted-foreground">11 - El Visionario</p>
                      <p className="text-muted-foreground">22 - El Maestro Constructor</p>
                      <p className="text-muted-foreground">33 - El Maestro Sanador</p>
                      <p className="text-muted-foreground">44 - El Maestro Manifestador</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="esoteric" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Correspondencias Tarot
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[results.destiny, results.soul, results.expression].map((num, index) => {
                    const tarot = TAROT_CORRESPONDENCES[num as keyof typeof TAROT_CORRESPONDENCES]
                    const titles = ["Número de Destino", "Número del Alma", "Número de Expresión"]
                    return tarot ? (
                      <div key={index} className="p-3 bg-background/50 rounded-lg">
                        <h4 className="font-medium text-accent mb-1">{titles[index]}</h4>
                        <p className="text-sm text-muted-foreground">
                          {tarot.card} - {tarot.arcana}
                        </p>
                      </div>
                    ) : null
                  })}
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Crown className="w-5 h-5" />
                    Árbol de la Vida
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[results.destiny, results.soul, results.expression].map((num, index) => {
                    const kabbalah = KABBALAH_CORRESPONDENCES[num as keyof typeof KABBALAH_CORRESPONDENCES]
                    const titles = ["Número de Destino", "Número del Alma", "Número de Expresión"]
                    return kabbalah ? (
                      <div key={index} className="p-3 bg-background/50 rounded-lg">
                        <h4 className="font-medium text-accent mb-1">{titles[index]}</h4>
                        <p className="text-sm text-muted-foreground">
                          {kabbalah.sephira} - {kabbalah.meaning}
                        </p>
                        <p className="text-xs text-muted-foreground/80">{kabbalah.path}</p>
                      </div>
                    ) : null
                  })}
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Sun className="w-5 h-5" />
                    Astrología
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[results.destiny, results.soul, results.expression].map((num, index) => {
                    const astrology = ASTROLOGY_CORRESPONDENCES[num as keyof typeof ASTROLOGY_CORRESPONDENCES]
                    const titles = ["Número de Destino", "Número del Alma", "Número de Expresión"]
                    return astrology ? (
                      <div key={index} className="p-3 bg-background/50 rounded-lg">
                        <h4 className="font-medium text-accent mb-1">{titles[index]}</h4>
                        <p className="text-sm text-muted-foreground">
                          {astrology.planet} en {astrology.sign}
                        </p>
                        <p className="text-xs text-muted-foreground/80">{astrology.quality}</p>
                      </div>
                    ) : null
                  })}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="synthesis" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  Síntesis Integrada: Numerología y Astrología
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* 1. Análisis Numerológico Completo */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-accent border-b border-border/50 pb-2">
                    1. Análisis Numerológico Completo
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                          <Sun className="w-4 h-4" />
                          Número de Destino ({results.destiny})
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Significado:</strong>{" "}
                          {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Tu misión de vida fundamental es desarrollar las cualidades de{" "}
                          {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.keywords
                            .join(", ")
                            .toLowerCase()}
                          . Este número revela tu propósito general en esta vida.
                        </p>
                      </div>

                      <div className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                          <Heart className="w-4 h-4" />
                          Número del Alma ({results.soul})
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Significado:</strong>{" "}
                          {NUMBER_MEANINGS[results.soul as keyof typeof NUMBER_MEANINGS]?.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Tus deseos internos y motivaciones más profundas se relacionan con{" "}
                          {NUMBER_MEANINGS[results.soul as keyof typeof NUMBER_MEANINGS]?.keywords[0]?.toLowerCase()}.
                          Este número revela lo que tu alma verdaderamente anhela.
                        </p>
                      </div>

                      <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          Número de Personalidad ({results.personality})
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Significado:</strong>{" "}
                          {NUMBER_MEANINGS[results.personality as keyof typeof NUMBER_MEANINGS]?.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Los demás te perciben como alguien con{" "}
                          {NUMBER_MEANINGS[
                            results.personality as keyof typeof NUMBER_MEANINGS
                          ]?.keywords[0]?.toLowerCase()}
                          . Este número indica tu imagen externa y primera impresión.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                          <Crown className="w-4 h-4" />
                          Número de Expresión ({results.expression})
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Significado:</strong>{" "}
                          {NUMBER_MEANINGS[results.expression as keyof typeof NUMBER_MEANINGS]?.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Tus talentos y habilidades naturales se manifiestan a través de{" "}
                          {NUMBER_MEANINGS[
                            results.expression as keyof typeof NUMBER_MEANINGS
                          ]?.keywords[1]?.toLowerCase()}
                          . Este número revela cómo expresas tu esencia única.
                        </p>
                      </div>

                      <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                          <Star className="w-4 h-4" />
                          Número de Suerte ({results.luck})
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          La combinación de tu Destino y Expresión crea este número de la fortuna. Representa las
                          oportunidades que naturalmente se alinean contigo cuando sigues tu propósito auténtico.
                        </p>
                      </div>

                      <div className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          Año Personal ({results.personalYear})
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Este año está influenciado por la energía del {results.personalYear}, lo que significa que es
                          un tiempo para enfocarte en{" "}
                          {NUMBER_MEANINGS[
                            results.personalYear as keyof typeof NUMBER_MEANINGS
                          ]?.keywords[0]?.toLowerCase()}
                          . Aprovecha esta vibración cósmica para tu crecimiento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 2. Análisis Astrológico Detallado */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-accent border-b border-border/50 pb-2">
                    2. Análisis Astrológico Detallado
                  </h3>

                  <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                    <div className="text-center mb-6">
                      <h4 className="text-2xl font-bold text-accent mb-2">{zodiacSign.name}</h4>
                      <p className="text-lg text-muted-foreground">
                        Elemento {zodiacSign.element} • Planeta {zodiacSign.planet}
                      </p>
                    </div>

                    {/* Zodiac-specific interpretation */}
                    <div className="space-y-4 text-left">
                      {zodiacSign.name === "Aries" && (
                        <p className="text-muted-foreground">
                          Como Aries, tu energía numerológica se amplifica con el fuego marciano. Eres un pionero
                          natural, y tus números revelan un camino de liderazgo y iniciativa.
                        </p>
                      )}
                      {zodiacSign.name === "Tauro" && (
                        <p className="text-muted-foreground">
                          La influencia venusina de Tauro estabiliza tus números, otorgándote perseverancia y una
                          conexión profunda con la belleza y los valores materiales.
                        </p>
                      )}
                      {zodiacSign.name === "Géminis" && (
                        <p className="text-muted-foreground">
                          Mercurio potencia tu versatilidad numerológica. Tus números indican una mente ágil y una
                          capacidad natural para la comunicación y el aprendizaje.
                        </p>
                      )}
                      {zodiacSign.name === "Cáncer" && (
                        <p className="text-muted-foreground">
                          La Luna intensifica tu sensibilidad numerológica. Tus números revelan una conexión profunda
                          con las emociones y los ciclos naturales de la vida.
                        </p>
                      )}
                      {zodiacSign.name === "Leo" && (
                        <p className="text-muted-foreground">
                          El Sol ilumina tu expresión numerológica con creatividad y magnetismo personal. Tus números
                          indican un destino brillante y una naturaleza generosa.
                        </p>
                      )}
                      {zodiacSign.name === "Virgo" && (
                        <p className="text-muted-foreground">
                          Mercurio en Virgo perfecciona tu análisis numerológico. Tus números revelan una búsqueda
                          constante de la perfección y el servicio a otros.
                        </p>
                      )}
                      {zodiacSign.name === "Libra" && (
                        <p className="text-muted-foreground">
                          Venus en Libra armoniza tus números con belleza y equilibrio. Tu camino numerológico busca la
                          justicia y las relaciones armoniosas.
                        </p>
                      )}
                      {zodiacSign.name === "Escorpio" && (
                        <p className="text-muted-foreground">
                          Plutón transforma profundamente tu expresión numerológica. Tus números indican una capacidad
                          única para la regeneración y la transformación.
                        </p>
                      )}
                      {zodiacSign.name === "Sagitario" && (
                        <p className="text-muted-foreground">
                          Júpiter expande tu visión numerológica hacia horizontes filosóficos. Tus números revelan una
                          búsqueda constante de sabiduría y aventura.
                        </p>
                      )}
                      {zodiacSign.name === "Capricornio" && (
                        <p className="text-muted-foreground">
                          Saturno estructura tu camino numerológico con disciplina y ambición. Tus números indican una
                          capacidad natural para el logro y la responsabilidad.
                        </p>
                      )}
                      {zodiacSign.name === "Acuario" && (
                        <p className="text-muted-foreground">
                          Urano electrifica tu expresión numerológica con innovación y originalidad. Tus números revelan
                          una visión futurista y un espíritu humanitario.
                        </p>
                      )}
                      {zodiacSign.name === "Piscis" && (
                        <p className="text-muted-foreground">
                          Neptuno disuelve las barreras de tu intuición numerológica. Tus números indican una conexión
                          profunda con lo espiritual y lo creativo.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-accent border-b border-border/50 pb-2">
                    3. Puntos de Convergencia entre Numerología y Astrología
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Convergencias Principales</h4>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <p>
                            Tu Número de Destino {results.destiny} (
                            {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.title}) resuena
                            perfectamente con la energía {zodiacSign.element.toLowerCase()} de {zodiacSign.name},
                            amplificando tu capacidad para{" "}
                            {NUMBER_MEANINGS[
                              results.destiny as keyof typeof NUMBER_MEANINGS
                            ]?.keywords[0]?.toLowerCase()}
                            .
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Crown className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <p>
                            El planeta {zodiacSign.planet} que rige tu signo potencia tu Número de Expresión{" "}
                            {results.expression}, creando una sinergia única para manifestar{" "}
                            {NUMBER_MEANINGS[
                              results.expression as keyof typeof NUMBER_MEANINGS
                            ]?.keywords[1]?.toLowerCase()}
                            .
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Heart className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <p>
                            Tu Número del Alma {results.soul} se alinea con las cualidades naturales de{" "}
                            {zodiacSign.name}, facilitando la expresión de tus deseos más profundos.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Diferencias Complementarias</h4>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <Eye className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <p>
                            Mientras tu numerología enfatiza{" "}
                            {NUMBER_MEANINGS[
                              results.destiny as keyof typeof NUMBER_MEANINGS
                            ]?.keywords[0]?.toLowerCase()}
                            , tu signo {zodiacSign.name} aporta la cualidad complementaria del elemento{" "}
                            {zodiacSign.element.toLowerCase()}.
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <p>
                            Tu Número de Personalidad {results.personality} puede encontrar equilibrio a través de las
                            fortalezas naturales que te otorga {zodiacSign.planet}, creando un camino de desarrollo
                            integral.
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Moon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <p>
                            La influencia temporal de tu Año Personal {results.personalYear} se ve modulada por los
                            ciclos naturales de {zodiacSign.name}, creando oportunidades únicas de crecimiento.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 4. Análisis Integral de la Personalidad */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-accent border-b border-border/50 pb-2">
                    4. Análisis Integral de la Personalidad
                  </h3>

                  <div className="p-6 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-lg">
                    <h4 className="text-lg font-semibold text-primary mb-4 text-center">Tu Perfil Integrado</h4>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="text-center text-lg leading-relaxed">
                        Eres una persona cuya esencia combina la sabiduría numerológica del{" "}
                        <span className="text-primary font-semibold">
                          {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.title}
                        </span>{" "}
                        con la energía cósmica de {zodiacSign.name}. Esta combinación única te otorga una perspectiva
                        especial sobre la vida, donde la{" "}
                        {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.keywords[0]?.toLowerCase()}
                        se expresa a través del elemento {zodiacSign.element.toLowerCase()}.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="text-center p-4 bg-background/50 rounded-lg">
                          <h5 className="font-semibold text-accent mb-2">Fortaleza Principal</h5>
                          <p className="text-sm">
                            {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.keywords[0]}
                            potenciada por la energía {zodiacSign.element.toLowerCase()} de {zodiacSign.name}
                          </p>
                        </div>
                        <div className="text-center p-4 bg-background/50 rounded-lg">
                          <h5 className="font-semibold text-accent mb-2">Desafío a Superar</h5>
                          <p className="text-sm">
                            Equilibrar tu{" "}
                            {NUMBER_MEANINGS[
                              results.personality as keyof typeof NUMBER_MEANINGS
                            ]?.keywords[0]?.toLowerCase()}
                            externa con la influencia de {zodiacSign.planet}
                          </p>
                        </div>
                        <div className="text-center p-4 bg-background/50 rounded-lg">
                          <h5 className="font-semibold text-accent mb-2">Propósito Integrado</h5>
                          <p className="text-sm">
                            Manifestar{" "}
                            {NUMBER_MEANINGS[
                              results.expression as keyof typeof NUMBER_MEANINGS
                            ]?.keywords[1]?.toLowerCase()}
                            a través de tu naturaleza {zodiacSign.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 5. Recomendaciones Personalizadas */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-accent border-b border-border/50 pb-2">
                    5. Recomendaciones Personalizadas
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Para tu Crecimiento Espiritual</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-background/50 rounded-lg">
                          <h5 className="font-medium text-accent mb-1">Meditación Recomendada</h5>
                          <p className="text-sm text-muted-foreground">
                            Practica meditación enfocada en el elemento {zodiacSign.element.toLowerCase()} para
                            armonizar tu energía numerológica {results.destiny} con tu naturaleza astrológica.
                          </p>
                        </div>
                        <div className="p-3 bg-background/50 rounded-lg">
                          <h5 className="font-medium text-accent mb-1">Afirmación Personal</h5>
                          <p className="text-sm text-muted-foreground italic">
                            "Soy {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.title.toLowerCase()}
                            y expreso mi{" "}
                            {NUMBER_MEANINGS[
                              results.destiny as keyof typeof NUMBER_MEANINGS
                            ]?.keywords[0]?.toLowerCase()}
                            a través de la sabiduría de {zodiacSign.name}."
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Para tu Desarrollo Personal</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-background/50 rounded-lg">
                          <h5 className="font-medium text-accent mb-1">Área de Enfoque</h5>
                          <p className="text-sm text-muted-foreground">
                            Desarrolla tu{" "}
                            {NUMBER_MEANINGS[
                              results.expression as keyof typeof NUMBER_MEANINGS
                            ]?.keywords[1]?.toLowerCase()}
                            aprovechando la influencia natural de {zodiacSign.planet} en tu carta natal.
                          </p>
                        </div>
                        <div className="p-3 bg-background/50 rounded-lg">
                          <h5 className="font-medium text-accent mb-1">Consejo para este Año</h5>
                          <p className="text-sm text-muted-foreground">
                            Tu Año Personal {results.personalYear} te invita a enfocarte en{" "}
                            {NUMBER_MEANINGS[
                              results.personalYear as keyof typeof NUMBER_MEANINGS
                            ]?.keywords[0]?.toLowerCase()}
                            , lo cual se alinea perfectamente con las cualidades de {zodiacSign.name}.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                    <h4 className="font-semibold text-primary mb-3 text-center">Mensaje Integrado para tu Camino</h4>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      Tu combinación única de numerología y astrología te convierte en{" "}
                      {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.title.toLowerCase()}
                      con alma de {zodiacSign.name}. Abraza tanto tu{" "}
                      {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.keywords[0]?.toLowerCase()}
                      numerológica como tu naturaleza {zodiacSign.element.toLowerCase()}, pues en esta síntesis
                      encontrarás tu mayor poder y tu contribución más auténtica al mundo. El universo te ha dotado de
                      herramientas tanto terrestres como cósmicas para cumplir tu propósito divino.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Updated Astrology Tab with correct nomenclature */}
          <TabsContent value="astrology" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Sun className="w-6 h-6" />
                  Interpretación Astrológica
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <h3 className="text-2xl font-bold text-accent mb-2">{zodiacSign.name}</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Elemento {zodiacSign.element} • Regido por {zodiacSign.planet}
                  </p>

                  {/* Zodiac-specific interpretation */}
                  <div className="space-y-4 text-left">
                    {zodiacSign.name === "Aries" && (
                      <p className="text-muted-foreground">
                        Como Aries, tu energía numerológica se amplifica con el fuego marciano. Eres un pionero natural,
                        y tus números revelan un camino de liderazgo y iniciativa.
                      </p>
                    )}
                    {zodiacSign.name === "Tauro" && (
                      <p className="text-muted-foreground">
                        La influencia venusina de Tauro estabiliza tus números, otorgándote perseverancia y una conexión
                        profunda con la belleza y los valores materiales.
                      </p>
                    )}
                    {zodiacSign.name === "Géminis" && (
                      <p className="text-muted-foreground">
                        Mercurio potencia tu versatilidad numerológica. Tus números indican una mente ágil y una
                        capacidad natural para la comunicación y el aprendizaje.
                      </p>
                    )}
                    {zodiacSign.name === "Cáncer" && (
                      <p className="text-muted-foreground">
                        La Luna intensifica tu sensibilidad numerológica. Tus números revelan una conexión profunda con
                        las emociones y los ciclos naturales de la vida.
                      </p>
                    )}
                    {zodiacSign.name === "Leo" && (
                      <p className="text-muted-foreground">
                        El Sol ilumina tu expresión numerológica con creatividad y magnetismo personal. Tus números
                        indican un destino brillante y una naturaleza generosa.
                      </p>
                    )}
                    {zodiacSign.name === "Virgo" && (
                      <p className="text-muted-foreground">
                        Mercurio en Virgo perfecciona tu análisis numerológico. Tus números revelan una búsqueda
                        constante de la perfección y el servicio a otros.
                      </p>
                    )}
                    {zodiacSign.name === "Libra" && (
                      <p className="text-muted-foreground">
                        Venus en Libra armoniza tus números con belleza y equilibrio. Tu camino numerológico busca la
                        justicia y las relaciones armoniosas.
                      </p>
                    )}
                    {zodiacSign.name === "Escorpio" && (
                      <p className="text-muted-foreground">
                        Plutón transforma profundamente tu expresión numerológica. Tus números indican una capacidad
                        única para la regeneración y la transformación.
                      </p>
                    )}
                    {zodiacSign.name === "Sagitario" && (
                      <p className="text-muted-foreground">
                        Júpiter expande tu visión numerológica hacia horizontes filosóficos. Tus números revelan una
                        búsqueda constante de sabiduría y aventura.
                      </p>
                    )}
                    {zodiacSign.name === "Capricornio" && (
                      <p className="text-muted-foreground">
                        Saturno estructura tu camino numerológico con disciplina y ambición. Tus números indican una
                        capacidad natural para el logro y la responsabilidad.
                      </p>
                    )}
                    {zodiacSign.name === "Acuario" && (
                      <p className="text-muted-foreground">
                        Urano electrifica tu expresión numerológica con innovación y originalidad. Tus números revelan
                        una visión futurista y un espíritu humanitario.
                      </p>
                    )}
                    {zodiacSign.name === "Piscis" && (
                      <p className="text-muted-foreground">
                        Neptuno disuelve las barreras de tu intuición numerológica. Tus números indican una conexión
                        profunda con lo espiritual y lo creativo.
                      </p>
                    )}
                  </div>
                </div>

                {/* Numerological-Astrological synthesis */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-primary">Síntesis Astro-Numerológica</h4>
                    <p className="text-sm text-muted-foreground">
                      Tu Número de Destino ({results.destiny}) resuena con la energía {zodiacSign.element.toLowerCase()}{" "}
                      de {zodiacSign.name}, creando una vibración única que combina
                      {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.keywords[0]?.toLowerCase()}
                      con la influencia planetaria de {zodiacSign.planet}.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-primary">Compatibilidad Cósmica</h4>
                    <p className="text-sm text-muted-foreground">
                      Tu Número de Expresión ({results.expression}) se alinea perfectamente con las cualidades de{" "}
                      {zodiacSign.name}, potenciando tu capacidad para manifestar
                      {NUMBER_MEANINGS[results.expression as keyof typeof NUMBER_MEANINGS]?.keywords[1]?.toLowerCase()}
                      en el plano material.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={onNewReading} variant="outline" className="w-full sm:w-auto bg-transparent">
            Nueva Consulta
          </Button>
          <Button
            onClick={handleGeneratePDF}
            disabled={isGeneratingPDF}
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            {isGeneratingPDF ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generando PDF...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Generar Reporte PDF
              </>
            )}
          </Button>
        </div>
      </div>

      <MysticalFooter />
    </div>
  )
}
