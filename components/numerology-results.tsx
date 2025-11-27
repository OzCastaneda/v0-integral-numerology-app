"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, Loader2 } from "lucide-react"
import { NUMBER_MEANINGS } from "@/lib/numerology-constants"
import { getZodiacKabbalah } from "@/lib/astrology-kabbalah"
import { getNumberIcon } from "@/lib/getNumberIcon"
import type { NumerologyResult } from "@/types/NumerologyResult" // Import NumerologyResult

interface NumerologyResultsProps {
  results: NumerologyResult
  userData: {
    fullName: string
    birthDate: string
  }
  onNewReading: () => void
}

export function NumerologyResults({ results, userData, onNewReading }: NumerologyResultsProps) {
  const [activeTab, setActiveTab] = useState("resumen")
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

          {/* Separator component should be imported */}
          {/* <Separator /> */}

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

  const zodiacSign = getZodiacSign(userData.birthDate)
  const zodiacKabbalah = getZodiacKabbalah(userData.birthDate)

  return (
    <div className="min-h-screen relative">
      {/* MetatronsCube and SacredStar components should be imported */}
      {/* <MetatronsCube
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
      /> */}

      <div className="max-w-7xl mx-auto p-4 space-y-8 relative z-10">
        <div className="text-center space-y-6 py-8">
          <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text golden-glow italic leading-8 tracking-wide font-extrabold bg-card text-secondary-foreground">
            Tu Mapa Numerológico Integral
          </h1>
          <div className="space-y-3">
            <p className="text-2xl text-accent font-semibold">{userData.fullName}</p>
            <p className="text-lg text-muted-foreground">
              Nacido el {getFormattedBirthDate(userData.birthDate)} • Signo: {zodiacKabbalah.name}
            </p>
            <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                {/* Star component should be imported */}
                {/* <Star className="h-4 w-4 text-accent" /> */}
                Elemento: {zodiacKabbalah.element}
              </span>
              <span className="flex items-center gap-1">
                {/* Sun component should be imported */}
                {/* <Sun className="h-4 w-4 text-primary" /> */}
                Planeta: {zodiacKabbalah.planet}
              </span>
              <span className="flex items-center gap-1">
                {/* Moon component should be imported */}
                {/* <Moon className="h-4 w-4 text-accent" /> */}
                Mes Hebreo: {zodiacKabbalah.hebrewMonth}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="resumen">Resumen</TabsTrigger>
            <TabsTrigger value="analisis">Análisis Numerológico Completo</TabsTrigger>
            <TabsTrigger value="sintesis">Síntesis Integrada</TabsTrigger>
            <TabsTrigger value="astrologia">Astrología Cabalística</TabsTrigger>
          </TabsList>

          <TabsContent value="resumen" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <NumberCard
                title="Número de Destino"
                number={results.destiny}
                description="Tu misión de vida y propósito general. Este número revela tu propósito principal en esta encarnación y la dirección que debe tomar tu vida."
                type="Esencial"
              />
              <NumberCard
                title="Número del Alma"
                number={results.soul}
                description="Tus deseos internos y motivaciones profundas. Representa lo que realmente deseas, tus impulsos internos y tus verdaderas aspiraciones."
                type="Alma"
              />
              <NumberCard
                title="Número de Personalidad"
                number={results.personality}
                description="Cómo te perciben los demás. Este número muestra tu fachada externa, tu personalidad superficial y cómo interactúas en el mundo social."
                type="Personalidad"
              />
              <NumberCard
                title="Número de Expresión"
                number={results.expression}
                description="Tus talentos y habilidades naturales. Revela los dones específicos que posees y cómo puedes expresarte creativamente en el mundo."
                type="Expresión"
              />
              <NumberCard
                title="Número de Suerte"
                number={results.luck}
                description="Tu número de la fortuna y oportunidades. Indica qué energías externas te favorecen y qué circunstancias tienden a beneficiarte."
                type="Fortuna"
              />
              <NumberCard
                title="Año Personal"
                number={results.personalYear}
                description="La energía del año actual para ti. Muestra los temas principales a trabajar y las oportunidades disponibles durante este año."
                type="Temporal"
              />
            </div>
          </TabsContent>

          <TabsContent value="analisis" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Análisis Numerológico Completo</CardTitle>
                <p className="text-muted-foreground">
                  Interpretación profunda basada en la Numerología Pitagórica y la Cábala Hermética según los libros de
                  Montserrat Celard y el Rav Philip S. Berg
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-6">
                  {/* Número de Destino - Ampliado */}
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg space-y-3 border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      {/* Sun component should be imported */}
                      {/* <Sun className="w-5 h-5" /> */}
                      Número de Destino ({results.destiny})
                    </h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        <strong className="text-accent">Significado:</strong>{" "}
                        {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.title}
                      </p>
                      <p className="leading-relaxed">
                        {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.description}
                      </p>
                      <p className="leading-relaxed">
                        <strong className="text-accent">Espiritualidad Cabalística:</strong>{" "}
                        {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.spiritualMeaning}
                      </p>
                      <p className="leading-relaxed">
                        <strong className="text-accent">Corrección Espiritual (Tikún):</strong>{" "}
                        {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.tikun}
                      </p>
                      <p className="leading-relaxed">
                        <strong className="text-accent">Lección de Vida:</strong>{" "}
                        {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.lifeLesson}
                      </p>
                      <div className="pt-2">
                        <p className="text-accent font-medium mb-2">Palabras Clave:</p>
                        <div className="flex flex-wrap gap-2">
                          {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.keywords.map(
                            (keyword: string, i: number) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {keyword}
                              </Badge>
                            ),
                          )}
                        </div>
                      </div>
                      <div className="pt-2 grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-accent font-medium mb-1">Elemento:</p>
                          <Badge
                            variant="secondary"
                            style={{
                              backgroundColor: `${NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.color}20`,
                            }}
                          >
                            {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.element}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-accent font-medium mb-1">Letra Hebrea:</p>
                          <Badge variant="secondary">
                            {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.hebrewLetter}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-accent font-medium mb-1">Sefirot:</p>
                          <Badge variant="secondary">
                            {NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]?.sephira}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Número del Alma - Ampliado */}
                  <div className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg space-y-3 border border-accent/20">
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      {/* Heart component should be imported */}
                      {/* <Heart className="w-5 h-5" /> */}
                      Número del Alma ({results.soul})
                    </h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        <strong className="text-accent">Significado:</strong>{" "}
                        {NUMBER_MEANINGS[results.soul as keyof typeof NUMBER_MEANINGS]?.title}
                      </p>
                      <p className="leading-relaxed">
                        {NUMBER_MEANINGS[results.soul as keyof typeof NUMBER_MEANINGS]?.description}
                      </p>
                      <p className="leading-relaxed">
                        <strong className="text-accent">Espiritualidad Cabalística:</strong>{" "}
                        {NUMBER_MEANINGS[results.soul as keyof typeof NUMBER_MEANINGS]?.spiritualMeaning}
                      </p>
                      <p className="leading-relaxed">
                        <strong className="text-accent">Corrección Espiritual (Tikún):</strong>{" "}
                        {NUMBER_MEANINGS[results.soul as keyof typeof NUMBER_MEANINGS]?.tikun}
                      </p>
                      <div className="pt-2">
                        <p className="text-accent font-medium mb-2">Palabras Clave:</p>
                        <div className="flex flex-wrap gap-2">
                          {NUMBER_MEANINGS[results.soul as keyof typeof NUMBER_MEANINGS]?.keywords.map(
                            (keyword: string, i: number) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {keyword}
                              </Badge>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Número de Personalidad - Ampliado */}
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg space-y-3 border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      {/* Sparkles component should be imported */}
                      {/* <Sparkles className="w-5 h-5" /> */}
                      Número de Personalidad ({results.personality})
                    </h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        <strong className="text-accent">Significado:</strong>{" "}
                        {NUMBER_MEANINGS[results.personality as keyof typeof NUMBER_MEANINGS]?.title}
                      </p>
                      <p className="leading-relaxed">
                        {NUMBER_MEANINGS[results.personality as keyof typeof NUMBER_MEANINGS]?.description}
                      </p>
                      <p className="leading-relaxed">
                        <strong className="text-accent">Cómo los demás te perciben:</strong>{" "}
                        {NUMBER_MEANINGS[results.personality as keyof typeof NUMBER_MEANINGS]?.extendedMeaning}
                      </p>
                    </div>
                  </div>

                  {/* Número de Expresión - Ampliado */}
                  <div className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg space-y-3 border border-accent/20">
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      {/* Zap component should be imported */}
                      {/* <Zap className="w-5 h-5" /> */}
                      Número de Expresión ({results.expression})
                    </h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        <strong className="text-accent">Significado:</strong>{" "}
                        {NUMBER_MEANINGS[results.expression as keyof typeof NUMBER_MEANINGS]?.title}
                      </p>
                      <p className="leading-relaxed">
                        {NUMBER_MEANINGS[results.expression as keyof typeof NUMBER_MEANINGS]?.description}
                      </p>
                      <p className="leading-relaxed">
                        <strong className="text-accent">Tus Dones Naturales:</strong>{" "}
                        {NUMBER_MEANINGS[results.expression as keyof typeof NUMBER_MEANINGS]?.extendedMeaning}
                      </p>
                      <div className="pt-2">
                        <p className="text-accent font-medium mb-2">Talentos Especiales:</p>
                        <div className="flex flex-wrap gap-2">
                          {NUMBER_MEANINGS[results.expression as keyof typeof NUMBER_MEANINGS]?.keywords.map(
                            (keyword: string, i: number) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {keyword}
                              </Badge>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sintesis" className="space-y-6">
            <Card className="border-primary/20 bg-gradient-to-br from-background to-accent/5">
              <CardHeader className="border-b border-primary/20">
                <CardTitle className="text-2xl text-primary">
                  Síntesis Integrada: Tu Mapa Numerológico Completo
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <h3 className="font-semibold text-primary mb-2">Tu Esencia Numerológica</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      Tu número de destino (<span className="font-bold text-primary">{results.destiny}</span>)
                      representa tu misión de vida fundamental. Combinado con tu número del alma (
                      <span className="font-bold text-primary">{results.soul}</span>), que expresa tus deseos internos
                      más profundos, formas una personalidad única. Tu número de personalidad (
                      <span className="font-bold text-primary">{results.personality}</span>) es cómo los demás te
                      perciben, mientras que tu número de expresión (
                      <span className="font-bold text-primary">{results.expression}</span>) revela tus talentos
                      naturales.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <h3 className="font-semibold text-accent mb-2">Influencias Astrológicas</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      Tu signo zodiacal añade una capa adicional de influencia a tu carta numerológica. Según la cábala,
                      tu signo corresponde a energías específicas del Árbol de la Vida que se entrelazan con tus números
                      para crear un perfil espiritual único y personalizado.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <h3 className="font-semibold text-primary mb-2">Ciclos y Lecciones de Vida</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      Los números en tu carta trabajan en armonía para guiarte a través de ciclos de crecimiento
                      espiritual. La integración de estos números en tu vida cotidiana puede traer mayor claridad,
                      propósito y realización.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <h3 className="font-semibold text-accent mb-2">Recomendaciones Personales</h3>
                    <ul className="text-sm text-foreground/80 space-y-2">
                      <li>
                        • Estudia profundamente el significado de tu número de destino para alinear tus acciones con tu
                        propósito
                      </li>
                      <li>
                        • Cultiva las cualidades positivas de tu número del alma para satisfacer tus deseos más
                        auténticos
                      </li>
                      <li>• Desarrolla los talentos del número de expresión para maximizar tu potencial creativo</li>
                      <li>
                        • Equilibra tu percepción externa (personalidad) con tu realidad interna (alma) para mayor
                        autenticidad
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="astrologia" className="space-y-6">
            <Card className="border-primary/20 bg-gradient-to-br from-background to-accent/5">
              <CardHeader className="border-b border-primary/20">
                <CardTitle className="text-2xl text-primary">Astrología Cabalística: Tu Signo Zodiacal</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {(() => {
                  try {
                    const zodiacInfo = getZodiacKabbalah(userData.birthDate)

                    return (
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                          <h3 className="font-semibold text-primary mb-2 text-lg">{zodiacInfo.name}</h3>
                          <div className="grid gap-3 mb-3 text-sm">
                            <div>
                              <span className="font-semibold text-primary">Letra Hebrea: </span>
                              <span className="text-foreground/80">{zodiacInfo.hebrewLetter}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-primary">Mes Hebreo: </span>
                              <span className="text-foreground/80">{zodiacInfo.hebrewMonth}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-primary">Elemento: </span>
                              <span className="text-foreground/80">{zodiacInfo.element}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-primary">Planeta: </span>
                              <span className="text-foreground/80">{zodiacInfo.planet}</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                          <h3 className="font-semibold text-accent mb-2">Descripción Astrológica</h3>
                          <p className="text-sm text-foreground/80 leading-relaxed">{zodiacInfo.spiritualMeaning}</p>
                        </div>

                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                          <h3 className="font-semibold text-primary mb-2">Corrección Espiritual (Tikún)</h3>
                          <div className="space-y-3 text-sm">
                            <div>
                              <span className="font-semibold text-primary">Lección Actual: </span>
                              <span className="text-foreground/80">{zodiacInfo.tikun.currentLesson}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-primary">Vidas Pasadas: </span>
                              <span className="text-foreground/80">{zodiacInfo.tikun.pastLife}</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                          <h3 className="font-semibold text-accent mb-2">Corrección General del Signo</h3>
                          <p className="text-sm text-foreground/80 leading-relaxed">{zodiacInfo.correction}</p>
                        </div>

                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                          <h3 className="font-semibold text-primary mb-2">Estrategia Mensual Universal</h3>
                          <p className="text-sm text-foreground/80 leading-relaxed">{zodiacInfo.monthlyStrategy}</p>
                        </div>
                      </div>
                    )
                  } catch (error) {
                    console.error("[v0] Error loading zodiac info:", error)
                    return (
                      <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                        <p className="text-sm text-foreground/80">
                          No se pudo cargar la información astrológica cabalística. Por favor, verifica la fecha de
                          nacimiento.
                        </p>
                      </div>
                    )
                  }
                })()}
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

      {/* MysticalFooter component should be imported */}
      {/* <MysticalFooter /> */}
    </div>
  )
}

const TAROT_CORRESPONDENCES = {
  1: { card: "El Mago", arcana: "Mayor Arcana" },
  2: { card: "La Sacerdotisa", arcana: "Mayor Arcana" },
  3: { card: "La Empusa", arcana: "Mayor Arcana" },
  4: { card: "El Emperador", arcana: "Mayor Arcana" },
  5: { card: "La Emperatriz", arcana: "Mayor Arcana" },
  6: { card: "El Carro", arcana: "Mayor Arcana" },
  7: { card: "La Justicia", arcana: "Mayor Arcana" },
  8: { card: "El Ermitaño", arcana: "Mayor Arcana" },
  9: { card: "La Rueda de la Fortuna", arcana: "Mayor Arcana" },
  11: { card: "El Alquimista", arcana: "Mayor Arcana" },
  22: { card: "El Maestro", arcana: "Mayor Arcana" },
  33: { card: "El Mundo", arcana: "Mayor Arcana" },
}

const KABBALAH_CORRESPONDENCES = {
  1: { sephira: "Keter", meaning: "Crown", path: "Path of Binah to Keter" },
  2: { sephira: "Chokmah", meaning: "Wisdom", path: "Path of Chesed to Chokmah" },
  3: { sephira: "Binah", meaning: "Understanding", path: "Path of Geburah to Binah" },
  4: { sephira: "Geburah", meaning: "Strength", path: "Path of Tiphereth to Geburah" },
  5: { sephira: "Tiphereth", meaning: "Beauty", path: "Path of Netzach to Tiphereth" },
  6: { sephira: "Netzach", meaning: "Victory", path: "Path of Hod to Netzach" },
  7: { sephira: "Hod", meaning: "Splendor", path: "Path of Yesod to Hod" },
  8: { sephira: "Yesod", meaning: "Foundation", path: "Path of Malkuth to Yesod" },
  9: { sephira: "Malkuth", meaning: "Kingdom", path: "Path of Chesed to Malkuth" },
  11: { sephira: "Keter", meaning: "Crown", path: "Path of Binah to Keter" },
  22: { sephira: "Chokmah", meaning: "Wisdom", path: "Path of Chesed to Chokmah" },
  33: { sephira: "Tiphereth", meaning: "Beauty", path: "Path of Netzach to Tiphereth" },
}

const ASTROLOGY_CORRESPONDENCES = {
  1: { planet: "Sun", sign: "Leo", quality: "Cardinal" },
  2: { planet: "Moon", sign: "Cancer", quality: "Mutable" },
  3: { planet: "Mercury", sign: "Gemini", quality: "Mutable" },
  4: { planet: "Venus", sign: "Taurus", quality: "Fixed" },
  5: { planet: "Mars", sign: "Aries", quality: "Cardinal" },
  6: { planet: "Jupiter", sign: "Sagittarius", quality: "Mutable" },
  7: { planet: "Saturn", sign: "Capricorn", quality: "Cardinal" },
  8: { planet: "Uranus", sign: "Aquarius", quality: "Fixed" },
  9: { planet: "Neptune", sign: "Pisces", quality: "Mutable" },
  11: { planet: "Sun", sign: "Leo", quality: "Cardinal" },
  22: { planet: "Moon", sign: "Cancer", quality: "Mutable" },
  33: { planet: "Mercury", sign: "Gemini", quality: "Mutable" },
}

const getFormattedBirthDate = (birthDate: string) => {
  const [year, month, day] = birthDate.split("-").map(Number)
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]
  return `${day} de ${months[month - 1]} de ${year}`
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

// Assuming these components are imported from their respective files
// const Star = () => <div>Star Icon</div>
// const Moon = () => <div>Moon Icon</div>
// const Sun = () => <div>Sun Icon</div>
// const Sparkles = () => <div>Sparkles Icon</div>
// const Eye = () => <div>Eye Icon</div>
// const Crown = () => <div>Crown Icon</div>
// const Heart = () => <div>Heart Icon</div>
// const Zap = () => <div>Zap Icon</div> // Added for new import
// const Home = () => <div>Home Icon</div> // Added for new import
// const Compass = () => <div>Compass Icon</div> // Added for new import
// const Brain = () => <div>Brain Icon</div> // Added for new import
// const Target = () => <div>Target Icon</div> // Added for new import

// const MetatronsCube = () => <div>Metatron's Cube</div>
// const SacredStar = () => <div>Sacred Star</div>
// const MysticalOrb = () => <div>Mystical Orb</div>
// const MysticalFooter = () => <div>Mystical Footer</div>
// const Badge = () => <div>Badge</div>
// const Separator = () => <div>Separator</div> // Assuming Separator is a component
