"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { MetatronsCube, SacredStar } from "@/components/sacred-symbols"
import { MysticalFooter } from "@/components/mystical-footer"
import { Navigation } from "@/components/navigation"
import { Star, Wand2, Crown, Heart, User, AlertTriangle, Activity, MessageCircle } from "lucide-react"

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
    bodyCorrespondence: "Hemisferio derecho (intuitivo y simbólico), ojo y oído derechos, cervicales y cabello.",
    blockageIssues: "Impaciencia, rigidez ante lo desconocido, vagabundeo sin rumbo y obsesiones mentales.",
    healthIssues: "Jaquecas, tortícolis, vértigos y, en casos graves, tumores cerebrales o derrames.",
    keywords: ["Entrega total", "Desapego", "Pasividad receptiva", "Voluntad divina"],
    message: "Camina ligero de equipaje y confía plenamente en la guía superior; la gratitud es tu mejor protección.",
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
    bodyCorrespondence: "Voluntad consciente e inteligencia aplicada a la materia.",
    blockageIssues: "Agresividad cuando la voluntad es frustrada, impaciencia, hiperactividad o pereza y dispersión.",
    healthIssues: "Hemicráneas, hemiplejías y afecciones en ojos y oídos.",
    keywords: ["Iniciativa", "Creatividad", "Co-creador", "Palabra sagrada"],
    message: "Tienes todos los elementos para iniciar tu propia realidad; actúa con integridad y sin egoísmo.",
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
    bodyCorrespondence: "Pulmones, columna vertebral, médula espinal y cerebelo.",
    blockageIssues: "Fanatismo, confusión interior, huida de la realidad y falta de autoestima.",
    healthIssues: "Trastornos respiratorios y del sistema nervioso central.",
    keywords: ["Clarividencia", "Intuición", "Devoción", "Sabiduría oculta"],
    message: "Retira el velo de la ilusión y accede al conocimiento que reside más allá de la dualidad.",
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
    bodyCorrespondence: "Síntesis de ambos hemisferios cerebrales y capacidad generadora.",
    blockageIssues: "Mente parlante e hiperactiva que no descansa, estrés y, en casos extremos, esquizofrenia por falta de lógica.",
    healthIssues: "Insomnio, migrañas, parálisis cerebral y problemas de visión.",
    keywords: ["Realización", "Satisfacción", "Impulsos creativos", "Maternidad"],
    message: "Utiliza tu imaginación para dar forma a la creación; el pensamiento creativo es el inicio de todo cambio.",
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
    bodyCorrespondence: "Lado derecho del pecho, pulmón y seno derechos; vértebras dorsales.",
    blockageIssues: "Perfeccionismo obsesivo, autoritarismo, falta de constancia o rebeldía sistemática contra la autoridad.",
    healthIssues: "Artrosis, artritis, contracturas y pinzamientos en la columna.",
    keywords: ["Estabilidad", "Orden", "Disciplina interna", "Autoridad masculina"],
    message: "Conquístate a ti mismo mediante la disciplina; la verdad es la principal virtud de un guerrero.",
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
    bodyCorrespondence: "Mano y brazo derechos; omóplatos, cervicales y oídos.",
    blockageIssues: "Inmadurez, irresponsabilidad, vicios y ciclotimia (euforia-depresión).",
    healthIssues: "Trastorno bipolar, problemas auditivos e infantilismo genital.",
    keywords: ["Hacedor de puentes", "El niño interior", "Entusiasmo", "Enseñanza oral"],
    message: "Recupera la alegría de ser y la risa espontánea para conectar con lo sagrado.",
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
    bodyCorrespondence: "Sistema respiratorio, pulmón y oído izquierdos, lado izquierdo del pecho.",
    blockageIssues: "Apegos maternos castradores, indecisión crónica, libertinaje y manipulación sutil.",
    healthIssues: "Anorexia, bulimia y cáncer de mama en la mujer.",
    keywords: ["Elección", "Libre albedrío", "Renuncia", "Encrucijada emocional"],
    message: "Toda elección supone una pérdida necesaria para la independencia y el crecimiento.",
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
    bodyCorrespondence: "Mano y brazo izquierdos; rostro de perfil.",
    blockageIssues: "Culpabilidad ante el fracaso, ambición desmesurada, miedo al ridículo y falta de espontaneidad.",
    healthIssues: "Ansiedad patológica y depresión por agotamiento de energía.",
    keywords: ["Triunfo", "Empoderamiento", "Responsabilidad", "Dominio"],
    message: "Conduce tu vehículo material con el alma; ninguna victoria te libra de tu naturaleza mortal.",
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
    bodyCorrespondence: "Corazón, garganta, manos, pecho y glándula timo.",
    blockageIssues: "Rigidez, juicio severo hacia otros, victimismo y problemas con la ley.",
    healthIssues: "Debilidad inmunológica, problemas cardíacos, de tiroides y dolencias en manos.",
    keywords: ["Equilibrio", "Leyes universales", "Karma", "Discernimiento"],
    message: "No te polarices; la Espada de la Verdad corta todo engaño.",
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
    bodyCorrespondence: "Hígado y vesícula biliar, brazo derecho, vértebras dorsales.",
    blockageIssues: "Aislamiento excesivo, misantropía o necesidad compulsiva de compañía, avaricia y mal uso del conocimiento.",
    healthIssues: "Cirrosis, diabetes y afecciones dorsales.",
    keywords: ["Maestro interior", "Prudencia", "Sabiduría basada en la experiencia", "Soledad"],
    message: "Sé tu propia luz; el verdadero camino se encuentra en el silencio del ser.",
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
    bodyCorrespondence: "Riñones, glándulas suprarrenales y costado derecho.",
    blockageIssues: "Adicción a la novedad, incapacidad de echar raíces o miedo paralizante al cambio.",
    healthIssues: "Problemas renales vinculados al miedo al futuro y rigidez en las caderas.",
    keywords: ["Ciclos", "Cambio constante", "Impermanencia", "Futuro"],
    message: "Nada es permanente; aprende a girar con la rueda sin perder tu centro.",
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
    bodyCorrespondence: "Sistema inmunológico, bazo, páncreas y antebrazo izquierdo.",
    blockageIssues: "Violencia, crueldad, ira incontrolada o extrema debilidad de carácter.",
    healthIssues: "Enfermedades autoinmunes, leucemia y diabetes.",
    keywords: ["Autodominio", "Guerrero espiritual", "Inteligencia sobre instinto"],
    message: "El amor es la fuerza más sutil; domina tu propia naturaleza antes de intentar dominar el mundo.",
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
    bodyCorrespondence: "Riñón y costado izquierdos; abdomen.",
    blockageIssues: "Estancamiento por no asumir el pasado y sentimientos de impotencia.",
    healthIssues: "Problemas digestivos (no 'digerir' el pasado), parálisis y complicaciones en gestación.",
    keywords: ["Sacrificio", "Inversión de perspectiva", "Quietud", "Balance"],
    message: "Detente para ver el mundo al revés; el sacrificio de la acción te lleva al centro del ser.",
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
    bodyCorrespondence: "Zona y vértebras lumbares, intestino ciego y nervio ciático.",
    blockageIssues: "Autocrítica excesiva, culpabilidad, resentimiento e ira destructiva.",
    healthIssues: "Artrosis, ciática y problemas de cadera.",
    keywords: ["Renovación", "Perdón", "Transformación profunda", "Desprendimiento"],
    message: "Deja morir lo que ya no sirve; el perdón a uno mismo es el inicio de la resurrección.",
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
    bodyCorrespondence: "Estómago, útero/próstata, ombligo y cintura.",
    blockageIssues: "Exhibicionismo, susceptibilidad extrema, radicalismo o excesiva adaptabilidad.",
    healthIssues: "Afecciones urinarias y genitales; trastorno bipolar.",
    keywords: ["Moderación", "Flexibilidad", "Quintaesencia", "Equilibrio emocional"],
    message: "Mezcla lo frío con lo caliente para templar tus emociones; busca el camino medio.",
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
    bodyCorrespondence: "Intestino grueso y estómago.",
    blockageIssues: "Confusión mental, atracción por lo 'diabólico' o destructivo, e ignorancia voluntaria.",
    healthIssues: "Cáncer, Alzheimer y enfermedades mentales como la esquizofrenia.",
    keywords: ["Inconsciente", "Sombra", "Instinto de supervivencia", "Seducción"],
    message: "Confronta tu lado oscuro; lo que no aceptas vivir se convierte en tu propio infierno.",
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
    bodyCorrespondence: "Circulación sanguínea, intestinos y caderas.",
    blockageIssues: "Depresión por derrumbe de la personalidad y tendencia a repetir errores trágicos.",
    healthIssues: "Varices, trastornos intestinales y crisis nerviosas.",
    keywords: ["Crisis liberadora", "Ruptura", "Humildad", "Metamorfosis"],
    message: "Deja que el rayo destruya las estructuras rígidas del ego para que la luz penetre.",
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
    bodyCorrespondence: "Ingles, sistema hormonal y órganos sexuales.",
    blockageIssues: "Incapacidad creativa, desconexión con la naturaleza y exceso de aislamiento.",
    healthIssues: "Desarreglos hormonales, esterilidad y apendicitis.",
    keywords: ["Esperanza", "Guía interior", "Verdad", "Renovación"],
    message: "Muéstrate desnudo ante el universo; tu luz interior es tu verdadera brújula.",
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
    bodyCorrespondence: "Pierna derecha, sangre y piel.",
    blockageIssues: "Bloqueo afectivo, histeria o melancolía profunda.",
    healthIssues: "Neurosis, psoriasis, dermatitis y retención de líquidos.",
    keywords: ["Receptividad", "Sexualidad", "Sueños", "Imaginación"],
    message: "Haz consciente lo inconsciente; atraviesa tus miedos nocturnos para renovarte.",
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
    bodyCorrespondence: "Órganos sexuales (ovarios/testículos) e ingles.",
    blockageIssues: "Incapacidad de integrar la sombra, problemas de equipo y rechazo a lo distinto.",
    healthIssues: "Trastornos sexuales como eyaculación precoz o frigidez.",
    keywords: ["Éxito", "Amor incondicional", "Plenitud", "Claridad"],
    message: "El sol sale para todos; une tus opuestos para alcanzar la integridad total.",
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
    bodyCorrespondence: "Pierna izquierda, linfa, boca y pies.",
    blockageIssues: "Tartamudez, verborrea o espíritu crítico negativo constante.",
    healthIssues: "Afonía persistente, autismo y problemas en los pies.",
    keywords: ["Despertar", "Comunicación verbal", "Música", "Llamada espiritual"],
    message: "Responde a la llamada; tu palabra pronunciada es el instrumento que crea tu realidad.",
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
    bodyCorrespondence: "Pies, recto y ano; funciones de excreción y parto.",
    blockageIssues: "Sometimiento a roles familiares, rol de víctima o materialismo extremo.",
    healthIssues: "Colon irritable, hemorroides y trastornos menstruales.",
    keywords: ["Éxito", "Realización final", "Autenticidad", "Libertad"],
    message: "La vida es un juego que hay que saber bailar; acéptate y la paz fluirá.",
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

                  {/* Palabras Clave */}
                  <div className="flex flex-wrap gap-2">
                    {card.keywords.map((keyword, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>

                  {/* Correspondencias básicas */}
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

                  {/* Correspondencias corporales y bloqueos */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4 text-primary" />
                        <p className="font-semibold text-primary">Correspondencia Corporal</p>
                      </div>
                      <p className="text-muted-foreground">{card.bodyCorrespondence}</p>
                    </div>
                    <div className="p-3 bg-orange-500/10 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        <p className="font-semibold text-orange-500">Si está Bloqueado</p>
                      </div>
                      <p className="text-muted-foreground">{card.blockageIssues}</p>
                    </div>
                  </div>

                  {/* Problemas de salud */}
                  <div className="p-3 bg-red-500/10 rounded-lg text-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="w-4 h-4 text-red-500" />
                      <p className="font-semibold text-red-500">Problemas de Salud Asociados</p>
                    </div>
                    <p className="text-muted-foreground">{card.healthIssues}</p>
                  </div>

                  {/* Mensaje */}
                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageCircle className="w-4 h-4 text-accent" />
                      <p className="font-semibold text-accent">El Mensaje</p>
                    </div>
                    <p className="text-muted-foreground italic">&quot;{card.message}&quot;</p>
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
