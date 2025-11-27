"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { MetatronsCube, SacredStar } from "@/components/sacred-symbols"
import { MysticalFooter } from "@/components/mystical-footer"
import { Navigation } from "@/components/navigation"
import { Star, Wand2, Crown, Heart } from "lucide-react"

const MAJOR_ARCANA = [
  {
    number: 0,
    name: "El Loco",
    numerology: "No se reduce (infinito)",
    meaning: "Comienzos, fe, aventura, libertad",
    cabalah: "Aire (Aleph)",
    astrology: "Urano",
    description:
      "Representa el espíritu libre, la fe en el universo, y el comienzo de un viaje espiritual. El loco se lanza al abismo de lo desconocido con total confianza.",
  },
  {
    number: 1,
    name: "El Mago",
    numerology: "1",
    meaning: "Poder, manifestación, creatividad, acción",
    cabalah: "Mercurio (Bet)",
    astrology: "Mercurio",
    description:
      "Simboliza el poder de manifestar la realidad a través de la voluntad y la habilidad. El mago es un canal entre lo divino y lo terrenal.",
  },
  {
    number: 2,
    name: "La Sacerdotisa",
    numerology: "2",
    meaning: "Intuición, misterio, sabiduría oculta, lo femenino",
    cabalah: "Luna (Gimel)",
    astrology: "Luna",
    description:
      "Representa el conocimiento intuitivo y los misterios ocultos. La Sacerdotisa es guardiana de la sabiduría antigua y la intuición femenina.",
  },
  {
    number: 3,
    name: "La Emperatriz",
    numerology: "3",
    meaning: "Abundancia, fertilidad, creación, feminidad",
    cabalah: "Venus (Dalet)",
    astrology: "Venus",
    description:
      "Simboliza la creación, abundancia y el poder generador de la naturaleza. Es la madre universal que nutre todas las cosas.",
  },
  {
    number: 4,
    name: "El Emperador",
    numerology: "4",
    meaning: "Autoridad, poder, estructura, liderazgo",
    cabalah: "Aries (Hei)",
    astrology: "Aries",
    description:
      "Representa la autoridad, estructura y poder del líder. Es la manifestación del orden y la voluntad de gobernar.",
  },
  {
    number: 5,
    name: "El Papa",
    numerology: "5",
    meaning: "Tradición, espiritualidad, enseñanza, autoridad moral",
    cabalah: "Tauro (Vav)",
    astrology: "Tauro",
    description:
      "Simboliza la sabiduría espiritual, la tradición y la enseñanza. El Papa es un puente entre lo divino y lo humano.",
  },
  {
    number: 6,
    name: "Los Amantes",
    numerology: "6",
    meaning: "Amor, relaciones, dualidad, opciones",
    cabalah: "Géminis (Záin)",
    astrology: "Géminis",
    description:
      "Representa el amor en sus formas más puras, la conexión entre seres y las opciones cruciales que afectan nuestro camino.",
  },
  {
    number: 7,
    name: "El Carro",
    numerology: "7",
    meaning: "Victoria, control, determinación, movimiento",
    cabalah: "Cáncer (Chet)",
    astrology: "Cáncer",
    description:
      "Simboliza la victoria a través de la determinación y el control de las fuerzas opuestas. Es el triunfo del espíritu sobre la materia.",
  },
  {
    number: 8,
    name: "La Justicia",
    numerology: "8",
    meaning: "Justicia, equilibrio, karma, responsabilidad",
    cabalah: "Leo (Tet)",
    astrology: "Leo",
    description:
      "Representa la ley de causa y efecto, el equilibrio kármico y la responsabilidad por las acciones. La justicia es imparcial y equilibrada.",
  },
  {
    number: 9,
    name: "El Ermitaño",
    numerology: "9",
    meaning: "Introspección, sabiduría, soledad, búsqueda",
    cabalah: "Virgo (Yod)",
    astrology: "Virgo",
    description:
      "Simboliza la búsqueda de sabiduría a través de la introspección y la soledad. El ermitaño ilumina el camino interior.",
  },
  {
    number: 10,
    name: "La Rueda de la Fortuna",
    numerology: "1 (1+0)",
    meaning: "Ciclos, destino, oportunidad, cambio",
    cabalah: "Júpiter (Kaf)",
    astrology: "Júpiter",
    description:
      "Representa los ciclos de la vida, el destino en movimiento y las oportunidades que surgen. Lo que sube debe bajar.",
  },
  {
    number: 11,
    name: "La Fuerza",
    numerology: "11 (Número Maestro)",
    meaning: "Poder interior, coraje, dominio espiritual",
    cabalah: "Libra (Lamed)",
    astrology: "Libra",
    description:
      "Simboliza el poder interior que domina las fuerzas externas. Es la fuerza del amor que domina la bestia física.",
  },
  {
    number: 12,
    name: "El Colgado",
    numerology: "3 (1+2)",
    meaning: "Sacrificio, perspectiva nueva, iluminación",
    cabalah: "Agua (Mem)",
    astrology: "Neptuno",
    description:
      "Representa el sacrificio voluntario que trae perspectiva nueva y comprensión más profunda. El cambio viene del abandono.",
  },
  {
    number: 13,
    name: "La Muerte",
    numerology: "4 (1+3)",
    meaning: "Transformación, final y comienzo, renovación",
    cabalah: "Escorpio (Nun)",
    astrology: "Plutón",
    description:
      "Simboliza la transformación radical y la muerte de lo viejo para permitir lo nuevo. Es la renovación total del ser.",
  },
  {
    number: 14,
    name: "La Templanza",
    numerology: "5 (1+4)",
    meaning: "Equilibrio, moderación, armonia, síntesis",
    cabalah: "Sagitario (Samech)",
    astrology: "Sagitario",
    description:
      "Representa el equilibrio entre opuestos y la búsqueda de la armonía. La templanza es la clave del bienestar.",
  },
  {
    number: 15,
    name: "El Diablo",
    numerology: "6 (1+5)",
    meaning: "Materialismo, ilusión, encadenamiento, tentación",
    cabalah: "Capricornio (Áin)",
    astrology: "Saturno",
    description:
      "Simboliza las ataduras autoimponibles y las ilusiones que nos encarcelan. El poder está siempre en nuestras manos para liberarnos.",
  },
  {
    number: 16,
    name: "La Torre",
    numerology: "7 (1+6)",
    meaning: "Destrucción, liberación, revelación súbita",
    cabalah: "Aire (Tzadi)",
    astrology: "Marte",
    description:
      "Representa la destrucción necesaria que conduce a la liberación. Lo falso es removido para revelar la verdad.",
  },
  {
    number: 17,
    name: "La Estrella",
    numerology: "8 (1+7)",
    meaning: "Esperanza, inspiración, guía, claridad",
    cabalah: "Acuario (Kuf)",
    astrology: "Saturno/Urano",
    description:
      "Simboliza la esperanza, inspiración y la guía hacia el futuro. Es la brújula espiritual en la oscuridad.",
  },
  {
    number: 18,
    name: "La Luna",
    numerology: "9 (1+8)",
    meaning: "Intuición, misterio, lo inconsciente, emociones",
    cabalah: "Piscis (Resh)",
    astrology: "Neptuno/Psique",
    description:
      "Representa el mundo de las emociones, los sueños y lo inconsciente. Es el acceso a los misterios interiores.",
  },
  {
    number: 19,
    name: "El Sol",
    numerology: "1 (1+9)",
    meaning: "Éxito, alegría, vitalidad, verdad",
    cabalah: "Fuego (Pei)",
    astrology: "Sol",
    description:
      "Simboliza la victoria final, la alegría y la verdad luminosa. El Sol ilumina todo y trae vida a todas las cosas.",
  },
  {
    number: 20,
    name: "El Juicio",
    numerology: "2 (2+0)",
    meaning: "Renacimiento, llamado, despertar, evaluación",
    cabalah: "Fuego (Tav)",
    astrology: "Plutón/Transformación",
    description:
      "Representa el llamado final, el despertar a una realidad superior. Es la evaluación de nuestra evolución espiritual.",
  },
  {
    number: 21,
    name: "El Mundo",
    numerology: "3 (2+1)",
    meaning: "Completitud, cumplimiento, realización, unidad",
    cabalah: "Saturno",
    astrology: "Saturno",
    description:
      "Simboliza la culminación, el ciclo completado y la unidad en la diversidad. Es el retorno al hogar tras el viaje.",
  },
]

const MINOR_ARCANA_DESCRIPTION = `Los Arcanos Menores representan los aspectos cotidianos y prácticos de la vida. Se dividen en cuatro palos:

• Bastos (Fuego): Creatividad, energía, inspiración, acción
• Copas (Agua): Emociones, relaciones, intuición, sentimientos
• Espadas (Aire): Intelecto, conflicto, comunicación, verdad
• Pentáculos (Tierra): Materialismo, dinero, salud, estabilidad

Cada palo contiene 14 cartas (As a 10, más Paje, Caballo, Reina, Rey), cada una con su propio significado específico dentro del contexto general del palo.`

export default function TarotPage() {
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
            El Tarot
          </h1>
          <p className="text-lg text-muted-foreground">Los 78 arquetipos del camino espiritual</p>
        </div>

        <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">¿Qué es el Tarot?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              El Tarot es un sistema de arquetipos que refleja el viaje del alma a través de la experiencia humana. Las
              78 cartas del Tarot están divididas en dos categorías principales: los 22 Arcanos Mayores (que representan
              las grandes lecciones espirituales) y los 56 Arcanos Menores (que representan los aspectos cotidianos de
              la vida).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada carta corresponde a un número, una letra hebrea, un planeta o signo zodiacal, y un área específica en
              el Árbol de la Vida. El Tarot funciona como un espejo de nuestra conciencia, reflejando tanto nuestro
              potencial como nuestros desafíos actuales.
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="mayores" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mayores">Arcanos Mayores (22)</TabsTrigger>
            <TabsTrigger value="menores">Arcanos Menores (56)</TabsTrigger>
          </TabsList>

          <TabsContent value="mayores" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-primary mb-2">Los 22 Arcanos Mayores</h2>
              <p className="text-muted-foreground">El viaje del Loco: de la inocencia a la iluminación</p>
            </div>

            {MAJOR_ARCANA.map((card) => (
              <Card key={card.number} className="bg-card/80 backdrop-blur-sm border border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-xl text-primary">
                        {card.number} - {card.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{card.meaning}</p>
                    </div>
                    <Badge variant="secondary">{card.numerology}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{card.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="font-semibold text-primary mb-1">Cabalah</p>
                      <p className="text-muted-foreground">{card.cabalah}</p>
                    </div>
                    <div className="p-3 bg-accent/5 rounded-lg">
                      <p className="font-semibold text-accent mb-1">Astrología</p>
                      <p className="text-muted-foreground">{card.astrology}</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="font-semibold text-primary mb-1">Numerología</p>
                      <p className="text-muted-foreground">{card.numerology}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="menores" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Los 56 Arcanos Menores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="text-muted-foreground whitespace-pre-line">{MINOR_ARCANA_DESCRIPTION}</p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Los Cuatro Palos</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <Card className="bg-card/50 border border-primary/30">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-primary flex items-center gap-2">
                          <Wand2 className="w-5 h-5" />
                          Bastos (Fuego)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        <p>
                          <strong className="text-accent">Elemento:</strong> Fuego
                        </p>
                        <p>
                          <strong className="text-accent">Correspondencia:</strong> Espíritu, Creatividad, Acción
                        </p>
                        <p className="mt-2">
                          Representa la energía creativa, la inspiración, la pasión y la acción. Los Bastos impulsan
                          hacia adelante y rompen la inercia. Son la fuerza del crecimiento y la transformación.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border border-accent/30">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-accent flex items-center gap-2">
                          <Heart className="w-5 h-5" />
                          Copas (Agua)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        <p>
                          <strong className="text-accent">Elemento:</strong> Agua
                        </p>
                        <p>
                          <strong className="text-accent">Correspondencia:</strong> Emociones, Relaciones, Intuición
                        </p>
                        <p className="mt-2">
                          Representa el mundo emocional, las relaciones, el amor y la intuición. Las Copas fluyen como
                          el agua, adaptándose y reflejando nuestros sentimientos más profundos.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border border-primary/30">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-primary flex items-center gap-2">
                          <Star className="w-5 h-5" />
                          Espadas (Aire)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        <p>
                          <strong className="text-accent">Elemento:</strong> Aire
                        </p>
                        <p>
                          <strong className="text-accent">Correspondencia:</strong> Intelecto, Conflicto, Verdad
                        </p>
                        <p className="mt-2">
                          Representa la mente, la comunicación, la lógica y la verdad. Las Espadas cortan a través de la
                          ilusión y revelan la realidad, pero también pueden herir.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border border-accent/30">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-accent flex items-center gap-2">
                          <Crown className="w-5 h-5" />
                          Pentáculos (Tierra)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        <p>
                          <strong className="text-accent">Elemento:</strong> Tierra
                        </p>
                        <p>
                          <strong className="text-accent">Correspondencia:</strong> Materialismo, Dinero, Salud
                        </p>
                        <p className="mt-2">
                          Representa el mundo material, los recursos, el dinero y la salud física. Los Pentáculos
                          construyen riqueza y estabilidad en el plano tangible.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                <div className="p-4 bg-accent/5 rounded-lg">
                  <h4 className="font-semibold text-accent mb-3">Las Cartas Cortesanas</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Cada palo tiene cuatro cartas cortesanas que representan diferentes aspectos de la personalidad:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
                    <div className="p-2 bg-background/50 rounded">
                      <p className="font-medium text-primary">Paje</p>
                      <p className="text-xs text-muted-foreground">Mensajero, Novicio</p>
                    </div>
                    <div className="p-2 bg-background/50 rounded">
                      <p className="font-medium text-primary">Caballo</p>
                      <p className="text-xs text-muted-foreground">Acción, Movimiento</p>
                    </div>
                    <div className="p-2 bg-background/50 rounded">
                      <p className="font-medium text-primary">Reina</p>
                      <p className="text-xs text-muted-foreground">Poder Femenino</p>
                    </div>
                    <div className="p-2 bg-background/50 rounded">
                      <p className="font-medium text-primary">Rey</p>
                      <p className="text-xs text-muted-foreground">Poder Masculino</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Correspondencias Esotéricas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              El Tarot, la Numerología, la Astrología y la Cábala están profundamente entrelazados. Cada carta del Tarot
              corresponde a un número, un signo zodiacal o planeta, y una posición en el Árbol de la Vida. Esta conexión
              crea un sistema integrado donde todas las disciplinas esotéricas se refuerzan mutuamente, ofreciendo una
              visión holística de la realidad y el camino espiritual.
            </p>
          </CardContent>
        </Card>
      </div>

      <MysticalFooter />
    </div>
  )
}
