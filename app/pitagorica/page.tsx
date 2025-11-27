import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, Star } from "lucide-react"
import { MysticalFooter } from "@/components/mystical-footer"
import { MetatronsCube, SacredStar } from "@/components/sacred-symbols"

export default function PitagoricaPage() {
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

      <div className="max-w-7xl mx-auto p-4 space-y-8 relative z-10">
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent golden-glow">
            Numerología Pitagórica
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La ciencia sagrada de los números según las enseñanzas de Pitágoras
          </p>
        </div>

        {/* Introduction */}
        <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Introducción Histórica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              La Numerología Pitagórica es un sistema antiguo de interpretación de números desarrollado por el filósofo
              y matemático griego Pitágoras (570-495 a.C.). Pitágoras creía que el universo entero podía ser explicado a
              través de números y que cada número poseía su propia vibración y significado espiritual único.
            </p>
            <p>
              Según Pitágoras, "Todo es número". Esta filosofía sostiene que los números son los bloques fundamentales
              de construcción del universo y que al comprender los números, podemos comprender las leyes cósmicas que
              gobiernan nuestra existencia.
            </p>
            <p>
              La Numerología Pitagórica se basa en el principio de reducción: todos los números se reducen a un solo
              dígito (del 1 al 9) sumando sus componentes, excepto los números maestros (11, 22, 33, 44) que poseen una
              vibración especial y no se reducen.
            </p>
          </CardContent>
        </Card>

        {/* System Explanation */}
        <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              Explicación del Sistema
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-accent">Principios Fundamentales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-background/50 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">1. Reducción Numerológica</h4>
                  <p className="text-sm text-muted-foreground">
                    Todos los números se reducen sumando sus dígitos hasta obtener un solo dígito. Ejemplo: 25 → 2+5 = 7
                  </p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">2. Números Maestros</h4>
                  <p className="text-sm text-muted-foreground">
                    Los números 11, 22, 33 y 44 NO se reducen porque poseen una vibración espiritual superior.
                  </p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">3. Vibración Numérica</h4>
                  <p className="text-sm text-muted-foreground">
                    Cada número emite una frecuencia única que influye en la personalidad y el destino.
                  </p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">4. Correspondencias</h4>
                  <p className="text-sm text-muted-foreground">
                    Los números se relacionan con planetas, elementos, colores y arquetipos universales.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-accent">Tabla de Valores Numéricos</h3>
              <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                <div className="grid grid-cols-9 gap-2 text-center">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <div key={num} className="space-y-2">
                      <div className="text-2xl font-bold text-primary">{num}</div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div>{String.fromCharCode(64 + num)}</div>
                        <div>{String.fromCharCode(64 + num + 9)}</div>
                        <div>{String.fromCharCode(64 + num + 18)}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Cada letra del alfabeto corresponde a un número del 1 al 9
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Number Meanings */}
        <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <Star className="w-6 h-6" />
              Significado de los Números
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div key={num} className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">{num}</div>
                  <h4 className="font-semibold text-accent mb-2">
                    El{" "}
                    {
                      [
                        "Líder",
                        "Diplomático",
                        "Creativo",
                        "Constructor",
                        "Aventurero",
                        "Armonizador",
                        "Místico",
                        "Poderoso",
                        "Humanitario",
                      ][num - 1]
                    }
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {
                      [
                        "Independencia, liderazgo, iniciativa y originalidad",
                        "Cooperación, diplomacia, sensibilidad y equilibrio",
                        "Creatividad, expresión, comunicación y alegría",
                        "Estabilidad, orden, trabajo duro y fundamentos sólidos",
                        "Libertad, aventura, cambio y versatilidad",
                        "Armonía, responsabilidad, amor y servicio",
                        "Espiritualidad, introspección, sabiduría y misterio",
                        "Poder, autoridad, éxito material y logros",
                        "Humanitarismo, compasión, idealismo y servicio universal",
                      ][num - 1]
                    }
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-accent">Números Maestros</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    num: 11,
                    title: "El Visionario",
                    desc: "Intuición elevada, iluminación espiritual, inspiración y maestría",
                  },
                  {
                    num: 22,
                    title: "El Maestro Constructor",
                    desc: "Manifestación material de ideales espirituales, construcción de legados",
                  },
                  {
                    num: 33,
                    title: "El Maestro Sanador",
                    desc: "Compasión universal, sanación, enseñanza espiritual y servicio",
                  },
                  {
                    num: 44,
                    title: "El Maestro Manifestador",
                    desc: "Poder de manifestación supremo, construcción de sistemas duraderos",
                  },
                ].map((master) => (
                  <div
                    key={master.num}
                    className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg border border-primary/20"
                  >
                    <div className="text-4xl font-bold text-accent mb-2">{master.num}</div>
                    <h4 className="font-semibold text-primary mb-2">{master.title}</h4>
                    <p className="text-sm text-muted-foreground">{master.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Calculate */}
        <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Cómo Calcular tus Números Personales</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Número de Destino</h4>
                <p className="text-sm text-muted-foreground">Suma todos los dígitos de tu fecha de nacimiento</p>
                <div className="p-3 bg-background/50 rounded-lg text-sm">
                  <p className="text-muted-foreground">Ejemplo: 26/01/1982</p>
                  <p className="text-primary">2+6+0+1+1+9+8+2 = 29 → 2+9 = 11 (Número Maestro)</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Número del Alma</h4>
                <p className="text-sm text-muted-foreground">Suma las vocales de tu nombre completo</p>
                <div className="p-3 bg-background/50 rounded-lg text-sm">
                  <p className="text-muted-foreground">Ejemplo: MARIA (A=1, I=9, A=1)</p>
                  <p className="text-primary">1+9+1 = 11 (Número Maestro)</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Número de Personalidad</h4>
                <p className="text-sm text-muted-foreground">Suma las consonantes de tu nombre completo</p>
                <div className="p-3 bg-background/50 rounded-lg text-sm">
                  <p className="text-muted-foreground">Ejemplo: MARIA (M=4, R=9)</p>
                  <p className="text-primary">4+9 = 13 → 1+3 = 4</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Número de Expresión</h4>
                <p className="text-sm text-muted-foreground">Suma todas las letras de tu nombre completo</p>
                <div className="p-3 bg-background/50 rounded-lg text-sm">
                  <p className="text-muted-foreground">Ejemplo: MARIA (M+A+R+I+A)</p>
                  <p className="text-primary">4+1+9+9+1 = 24 → 2+4 = 6</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <MysticalFooter />
    </div>
  )
}
