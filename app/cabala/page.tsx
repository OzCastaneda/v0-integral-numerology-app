import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, Star, Eye } from "lucide-react"
import { MysticalFooter } from "@/components/mystical-footer"
import { MetatronsCube, SacredStar } from "@/components/sacred-symbols"

export default function CabalaPage() {
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
            Cábala Hermética
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La sabiduría ancestral del Árbol de la Vida y las Letras Hebreas
          </p>
        </div>

        {/* Fundamentos */}
        <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <Crown className="w-6 h-6" />
              Fundamentos de la Cábala
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              La Cábala es una antigua tradición mística judía que busca comprender la naturaleza de Dios, el universo y
              el alma humana. La palabra "Cábala" significa "recibir" en hebreo, refiriéndose a la transmisión de
              conocimiento sagrado de maestro a discípulo.
            </p>
            <p>
              La Cábala Hermética integra las enseñanzas cabalísticas tradicionales con la filosofía hermética
              occidental, creando un sistema completo de comprensión espiritual que incluye numerología, astrología,
              tarot y alquimia.
            </p>
            <p>
              En el corazón de la Cábala se encuentra el concepto de que toda la creación emana de una fuente divina
              única (Ein Sof - el Infinito) a través de diez emanaciones o sefirot que forman el Árbol de la Vida.
            </p>
          </CardContent>
        </Card>

        {/* Árbol de la Vida */}
        <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <Star className="w-6 h-6" />
              El Árbol de la Vida
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              El Árbol de la Vida (Etz Chaim) es el diagrama central de la Cábala, representando el proceso de la
              creación y el camino del alma hacia la iluminación. Consiste en 10 sefirot (emanaciones divinas)
              conectadas por 22 senderos que corresponden a las 22 letras del alfabeto hebreo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
              {[
                { num: 1, name: "Kether", meaning: "Corona", desc: "La fuente divina, unidad primordial" },
                { num: 2, name: "Chokmah", meaning: "Sabiduría", desc: "Sabiduría divina, fuerza activa" },
                { num: 3, name: "Binah", meaning: "Entendimiento", desc: "Comprensión, fuerza receptiva" },
                { num: 4, name: "Chesed", meaning: "Misericordia", desc: "Amor, bondad, expansión" },
                { num: 5, name: "Geburah", meaning: "Severidad", desc: "Fuerza, justicia, restricción" },
                { num: 6, name: "Tiphereth", meaning: "Belleza", desc: "Armonía, equilibrio, corazón" },
                { num: 7, name: "Netzach", meaning: "Victoria", desc: "Eternidad, emoción, arte" },
                { num: 8, name: "Hod", meaning: "Gloria", desc: "Esplendor, intelecto, comunicación" },
                { num: 9, name: "Yesod", meaning: "Fundamento", desc: "Base, imaginación, subconsciente" },
                { num: 10, name: "Malkuth", meaning: "Reino", desc: "Manifestación física, tierra" },
              ].map((sefira) => (
                <div key={sefira.num} className="p-3 sm:p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-xl sm:text-2xl font-bold text-primary">{sefira.num}</div>
                    <div>
                      <h4 className="font-semibold text-accent text-sm">{sefira.name}</h4>
                      <p className="text-xs text-muted-foreground">{sefira.meaning}</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{sefira.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Relación con Numerología */}
        <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <Eye className="w-6 h-6" />
              Relación con la Numerología
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              La numerología cabalística asigna significados profundos a cada número basándose en su correspondencia con
              las sefirot del Árbol de la Vida y las letras hebreas. Cada número no es solo una cantidad, sino una
              cualidad espiritual y una fuerza cósmica.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                { num: 1, sefira: "Kether", meaning: "Unidad divina, el principio de todo" },
                { num: 2, sefira: "Chokmah", meaning: "Dualidad, sabiduría activa" },
                { num: 3, sefira: "Binah", meaning: "Trinidad, comprensión receptiva" },
                { num: 4, sefira: "Chesed", meaning: "Estabilidad, misericordia divina" },
                { num: 5, sefira: "Geburah", meaning: "Cambio, fuerza y justicia" },
                { num: 6, sefira: "Tiphereth", meaning: "Armonía, belleza central" },
                { num: 7, sefira: "Netzach", meaning: "Victoria, eternidad emocional" },
                { num: 8, sefira: "Hod", meaning: "Gloria, esplendor intelectual" },
                { num: 9, sefira: "Yesod", meaning: "Fundamento, base de manifestación" },
              ].map((item) => (
                <div key={item.num} className="p-3 sm:p-4 bg-background/50 rounded-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{item.num}</div>
                  <h4 className="font-semibold text-accent mb-1 text-sm sm:text-base">{item.sefira}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.meaning}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Significados Cabalísticos */}
        <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Significados Cabalísticos de los Números</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              {[
                {
                  num: 1,
                  title: "El Uno - Kether",
                  desc: "Representa la unidad primordial, la corona divina, el punto de origen de toda la creación. Es la voluntad pura y la conciencia suprema.",
                },
                {
                  num: 2,
                  title: "El Dos - Chokmah",
                  desc: "La sabiduría divina, la fuerza activa masculina. Representa la dualidad necesaria para la creación y el principio de la polaridad.",
                },
                {
                  num: 3,
                  title: "El Tres - Binah",
                  desc: "El entendimiento, la madre divina. Representa la comprensión profunda y la capacidad de dar forma a la sabiduría.",
                },
                {
                  num: 4,
                  title: "El Cuatro - Chesed",
                  desc: "La misericordia y el amor incondicional. Representa la expansión, la generosidad y la construcción de estructuras estables.",
                },
                {
                  num: 5,
                  title: "El Cinco - Geburah",
                  desc: "La severidad y la justicia. Representa la fuerza necesaria para mantener el equilibrio y eliminar lo que no sirve.",
                },
                {
                  num: 6,
                  title: "El Seis - Tiphereth",
                  desc: "La belleza y la armonía. El corazón del Árbol de la Vida, representa el equilibrio perfecto entre misericordia y severidad.",
                },
                {
                  num: 7,
                  title: "El Siete - Netzach",
                  desc: "La victoria y la eternidad. Representa las emociones, el arte, y la persistencia en el camino espiritual.",
                },
                {
                  num: 8,
                  title: "El Ocho - Hod",
                  desc: "La gloria y el esplendor. Representa el intelecto, la comunicación y la capacidad de comprender patrones.",
                },
                {
                  num: 9,
                  title: "El Nueve - Yesod",
                  desc: "El fundamento y la base. Representa el subconsciente, los sueños, y el puente entre lo espiritual y lo material.",
                },
              ].map((item) => (
                <div key={item.num} className="p-3 sm:p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                  <h4 className="font-semibold text-accent mb-2 text-sm sm:text-base">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <MysticalFooter />
    </div>
  )
}
