"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MetatronsCube, SacredStar } from "@/components/sacred-symbols"
import { MysticalFooter } from "@/components/mystical-footer"
import { Navigation } from "@/components/navigation"
import { ZODIAC_KABBALAH } from "@/lib/astrology-kabbalah"
import { Sun, Star, Heart } from "lucide-react"

export default function AstrologiaPage() {
  return (
    <div className="min-h-screen relative pt-20">
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

      <Navigation />

      <div className="max-w-7xl mx-auto p-4 space-y-8 relative z-10">
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Astrología Cabalística
          </h1>
          <p className="text-lg text-muted-foreground">
            Los 12 signos zodiacales a través del lente de la Cábala Hermética
          </p>
        </div>

        <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Introducción a la Astrología Cabalística</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              La Astrología Cabalística combina la sabiduría del zodíaco antiguo con las enseñanzas del Árbol de la
              Vida. Según el Rav Philip S. Berg, cada signo zodiacal corresponde a una letra hebrea, un mes del
              calendario hebreo, un planeta, y un área específica en el Árbol de la Vida. Esto crea un sistema integrado
              donde los ciclos astrológicos reflejan lecciones espirituales profundas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Lo más revelador de la Astrología Cabalística es el concepto del Tikún (corrección espiritual). Según esta
              enseñanza, cada signo zodiacal representa una corrección de su signo opuesto del ciclo anterior,
              reflejando un proceso de reencarnación y evolución espiritual continua.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary text-center">Los 12 Signos Zodiacales</h2>

          {Object.entries(ZODIAC_KABBALAH).map(([key, sign]) => (
            <Card
              key={key}
              className="bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <CardTitle className="text-2xl text-primary">{sign.name}</CardTitle>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">{sign.hebrewMonth}</Badge>
                    <Badge variant="secondary">{sign.element}</Badge>
                    <Badge variant="secondary">{sign.planet}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Información Básica
                      </h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>
                          <strong className="text-accent">Letra Hebrea:</strong> {sign.hebrewLetter}
                        </p>
                        <p>
                          <strong className="text-accent">Mes Hebreo:</strong> {sign.hebrewMonth}
                        </p>
                        <p>
                          <strong className="text-accent">Planeta:</strong> {sign.planet}
                        </p>
                        <p>
                          <strong className="text-accent">Elemento:</strong> {sign.element}
                        </p>
                        <p>
                          <strong className="text-accent">Mes de:</strong> {sign.monthOf}
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        Características
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {sign.characteristics.map((char, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Significado Espiritual</h4>
                      <p className="text-sm text-muted-foreground">{sign.spiritualMeaning}</p>
                    </div>

                    <div className="p-4 bg-accent/5 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2">Corrección (Tikún)</h4>
                      <p className="text-sm text-muted-foreground">{sign.correction}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-3">Ciclos de Reencarnación</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-accent font-medium mb-1">Vidas Pasadas:</p>
                        <p className="text-muted-foreground">{sign.tikun.pastLife}</p>
                      </div>
                      <div>
                        <p className="text-accent font-medium mb-1">Lección Actual:</p>
                        <p className="text-muted-foreground">{sign.tikun.currentLesson}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-accent/5 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                      <Sun className="w-4 h-4" />
                      Estrategia Mensual
                    </h4>
                    <p className="text-sm text-muted-foreground">{sign.monthlyStrategy}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Principios de la Astrología Cabalística</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">El Árbol de la Vida</h4>
                <p className="text-sm text-muted-foreground">
                  Los 12 signos zodiacales corresponden a los 12 caminos del Árbol de la Vida. Estos caminos conectan
                  las 10 Sefirot (esferas de poder) y representan diferentes aspectos de la conciencia divina.
                </p>
              </div>
              <div className="p-4 bg-accent/5 rounded-lg">
                <h4 className="font-semibold text-accent mb-2">Reencarnación y Karma</h4>
                <p className="text-sm text-muted-foreground">
                  Cada signo zodiacal es una corrección del signo opuesto. Esto sugiere que el alma elige su signo
                  zodiacal para resolver deudas kármicas y completar lecciones espirituales específicas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <MysticalFooter />
    </div>
  )
}
