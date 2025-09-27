"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { MysticalOrb } from "@/components/mystical-orb"
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

  return (
    <div className="min-h-screen p-4 relative">
      <MysticalOrb
        size={400}
        color="#6B46C1"
        intensity={0.15}
        className="top-1/4 left-1/6 -translate-x-1/2 -translate-y-1/2"
      />
      <MysticalOrb
        size={350}
        color="#EC4899"
        intensity={0.12}
        className="bottom-1/3 right-1/6 translate-x-1/2 translate-y-1/2"
      />
      <MysticalOrb
        size={300}
        color="#8B5CF6"
        intensity={0.1}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Tu Mapa Numerológico Integral
          </h1>
          <div className="space-y-2">
            <p className="text-xl text-muted-foreground">{userData.fullName}</p>
            <p className="text-lg text-muted-foreground">Nacido el {getFormattedBirthDate(userData.birthDate)}</p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-4">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="detailed">Detallado</TabsTrigger>
            <TabsTrigger value="esoteric">Esotérico</TabsTrigger>
            <TabsTrigger value="synthesis" className="hidden lg:block">
              Síntesis
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <NumberCard
                title="Camino del Alma"
                number={results.soulPath}
                description="Tu propósito de vida fundamental"
                type="Esencial"
              />
              <NumberCard
                title="Número de Destino"
                number={results.destiny}
                description="Lo que estás destinado a lograr"
                type="Destino"
              />
              <NumberCard
                title="Número de Suerte"
                number={results.luck}
                description="Tu número de la fortuna"
                type="Fortuna"
              />
              <NumberCard
                title="Número de Karma"
                number={results.karma}
                description="Lecciones de vidas pasadas"
                type="Karma"
              />
              <NumberCard
                title="Expresión"
                number={results.expression}
                description="Tu forma natural de expresarte"
                type="Expresión"
              />
              <NumberCard
                title="Año Personal"
                number={results.personalYear}
                description="Energía de este año para ti"
                type="Temporal"
              />
            </div>
          </TabsContent>

          {/* Detailed Tab */}
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
                        <h4 className="font-medium text-primary mb-2">Camino del Alma ({results.soulPath})</h4>
                        <p className="text-sm text-muted-foreground">
                          Este número revela tu propósito de vida más profundo.
                          {NUMBER_MEANINGS[results.soulPath as keyof typeof NUMBER_MEANINGS]?.description}
                        </p>
                      </div>
                      <div className="p-4 bg-background/50 rounded-lg">
                        <h4 className="font-medium text-primary mb-2">Destino ({results.destiny})</h4>
                        <p className="text-sm text-muted-foreground">
                          Representa lo que estás destinado a lograr en esta vida.
                          {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-accent">Números Secundarios</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-background/50 rounded-lg">
                        <h4 className="font-medium text-primary mb-2">Expresión ({results.expression})</h4>
                        <p className="text-sm text-muted-foreground">
                          Tu forma natural de expresarte en el mundo.
                          {NUMBER_MEANINGS[results.expression as keyof typeof NUMBER_MEANINGS]?.description}
                        </p>
                      </div>
                      <div className="p-4 bg-background/50 rounded-lg">
                        <h4 className="font-medium text-primary mb-2">Año Personal ({results.personalYear})</h4>
                        <p className="text-sm text-muted-foreground">
                          La energía que te acompaña durante este año específico.
                          {NUMBER_MEANINGS[results.personalYear as keyof typeof NUMBER_MEANINGS]?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Esoteric Tab */}
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
                  {[results.soulPath, results.destiny, results.expression].map((num, index) => {
                    const tarot = TAROT_CORRESPONDENCES[num as keyof typeof TAROT_CORRESPONDENCES]
                    const titles = ["Camino del Alma", "Destino", "Expresión"]
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
                  {[results.soulPath, results.destiny, results.expression].map((num, index) => {
                    const kabbalah = KABBALAH_CORRESPONDENCES[num as keyof typeof KABBALAH_CORRESPONDENCES]
                    const titles = ["Camino del Alma", "Destino", "Expresión"]
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
                  {[results.soulPath, results.destiny, results.expression].map((num, index) => {
                    const astrology = ASTROLOGY_CORRESPONDENCES[num as keyof typeof ASTROLOGY_CORRESPONDENCES]
                    const titles = ["Camino del Alma", "Destino", "Expresión"]
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

          {/* Synthesis Tab */}
          <TabsContent value="synthesis" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Síntesis Numerológica</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <h3 className="text-xl font-semibold text-accent mb-4">Tu Esencia Numerológica</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Basado en tu mapa numerológico, tu esencia combina las energías del{" "}
                    <span className="text-primary font-medium">
                      {NUMBER_MEANINGS[results.soulPath as keyof typeof NUMBER_MEANINGS]?.title}
                    </span>{" "}
                    (Camino del Alma) con el{" "}
                    <span className="text-accent font-medium">
                      {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.title}
                    </span>{" "}
                    (Destino), creando un perfil único de crecimiento espiritual y manifestación material.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-primary">Fortalezas Principales</h4>
                    <ul className="space-y-2">
                      {NUMBER_MEANINGS[results.soulPath as keyof typeof NUMBER_MEANINGS]?.keywords.map(
                        (keyword, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-accent" />
                            {keyword}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-primary">Áreas de Desarrollo</h4>
                    <ul className="space-y-2">
                      {NUMBER_MEANINGS[results.karma as keyof typeof NUMBER_MEANINGS]?.keywords.map(
                        (keyword, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Sparkles className="w-4 h-4 text-primary" />
                            {keyword}
                          </li>
                        ),
                      )}
                    </ul>
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
    </div>
  )
}
