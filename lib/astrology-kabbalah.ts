export interface ZodiacSignInfo {
  name: string
  hebrewMonth: string
  hebrewLetter: string
  planet: string
  planetLetter: string
  element: string
  monthOf: string
  characteristics: string[]
  correction: string
  tikun: {
    pastLife: string
    currentLesson: string
  }
  spiritualMeaning: string
  monthlyStrategy: string
}

export const ZODIAC_KABBALAH: Record<string, ZodiacSignInfo> = {
  Aries: {
    name: "Aries",
    hebrewMonth: "Nissan",
    hebrewLetter: "Hei (ה)",
    planet: "Marte",
    planetLetter: "Dalet (ד)",
    element: "Fuego",
    monthOf: "Milagros",
    characteristics: [
      "Potencial único para el crecimiento",
      "Impulsivos y obstinados",
      "Espíritu pionero y valientes",
      "Saltan de cabeza a las cosas",
      "No toleran oposición",
      "Líderes naturales",
      "Energía combativa",
    ],
    correction:
      "Poner su naturaleza combativa al servicio desinteresado. Convertirse en 'rebeldes con causa' en lugar de 'rebeldes sin causa'. Aprender a canalizar la agresividad hacia propósitos constructivos.",
    tikun: {
      pastLife:
        "En vidas pasadas fueron Libra: indecisos, evitaban conflictos, dependían de otros para tomar decisiones.",
      currentLesson:
        "Ahora deben descubrir su identidad propia, ser independientes y proactivos. Aprender a tomar decisiones rápidas y defender sus convicciones sin miedo.",
    },
    spiritualMeaning:
      "Hei representa el aliento divino y la revelación. Aries inicia el zodíaco como Nissan inicia el año hebreo. Es el mes de la libertad (Éxodo de Egipto) y los milagros. La energía de Marte (Dalet) combinada con Hei crea el poder de iniciar nuevos ciclos y romper limitaciones.",
    monthlyStrategy:
      "Confrontación constructiva - Construir puentes y hacer las paces. Usar la energía combativa para defender causas justas, no para conflictos personales.",
  },
  Tauro: {
    name: "Tauro",
    hebrewMonth: "Iyar",
    hebrewLetter: "Vav (ו)",
    planet: "Venus",
    planetLetter: "Pei (פ)",
    element: "Tierra",
    monthOf: "La Luz y el Juicio",
    characteristics: [
      "Aman el confort y la estabilidad",
      "Tercos como el toro",
      "Pacientes, leales y confiables",
      "Satisfechos con lo que tienen",
      "Pueden vivir en una 'burbuja' de luz",
      "Aprecian la belleza y el placer",
      "Materialistas pero generosos",
    ],
    correction:
      "Usar el juicio para descubrir lo desconocido. Salir de la burbuja de comodidad y comprometerse con el mundo. Transformar la satisfacción pasiva en acción constructiva. No conformarse solo con lo material.",
    tikun: {
      pastLife:
        "En vidas pasadas fueron Escorpio: autodestructivos, desconfiados, enojados, vivían en extremos emocionales.",
      currentLesson:
        "Ahora deben disfrutar la belleza de la vida y expulsar el temor. Aprender a confiar, ser estables y encontrar paz en la simplicidad.",
    },
    spiritualMeaning:
      "Vav significa 'gancho' o 'clavo' y representa la conexión entre el cielo y la tierra. Es una fuerza sanadora. Tauro tiene el poder de anclar la luz espiritual en formas materiales. Venus (Pei) aporta belleza y armonía a esta manifestación.",
    monthlyStrategy:
      "Plenitud interior - La curación viene del interior. Usar la estabilidad para sanar a otros y compartir abundancia.",
  },
  Géminis: {
    name: "Géminis",
    hebrewMonth: "Sivan",
    hebrewLetter: "Záin (ז)",
    planet: "Mercurio",
    planetLetter: "Resh (ר)",
    element: "Aire",
    monthOf: "Unificación",
    characteristics: [
      "Rápidos mentalmente",
      "Excelentes comunicadores",
      "Ven ambos lados de todo",
      "Pueden ser superficiales",
      "Dificultad para comprometerse",
      "Curiosos insaciables",
      "Adaptables y versátiles",
    ],
    correction:
      "Profundizar más allá de las superficies. Usar sus dones de comunicación para compartir sabiduría, no solo información. Conectar este mundo con el mundo superior a través de la palabra.",
    tikun: {
      pastLife:
        "En vidas pasadas fueron Sagitario: egoístas, desorganizados, irresponsables, buscaban solo su propia aventura.",
      currentLesson:
        "Ahora deben aprender humildad, compartir conocimiento y considerar a los demás. Organizar sus ideas y comprometerse con relaciones profundas.",
    },
    spiritualMeaning:
      "Záin significa 'espada' o 'arma' y representa el poder de cortar la ilusión y resucitar la realidad a un nivel más alto. Sivan es el mes de la entrega de la Torá. Mercurio (Resh) potencia la capacidad de comunicar verdades espirituales.",
    monthlyStrategy:
      "Relaciones profundas - Invertir amor genuino en las relaciones. Usar la comunicación para unir, no para dividir.",
  },
  Cáncer: {
    name: "Cáncer",
    hebrewMonth: "Tamuz",
    hebrewLetter: "Chet (ח)",
    planet: "Luna",
    planetLetter: "Tav (ת)",
    element: "Agua",
    monthOf: "Juicio Directo (mes negativo)",
    characteristics: [
      "Hipersensibles e intuitivos",
      "Cambios de humor extremos",
      "Temerosos y ansiosos",
      "Se esconden en su 'concha'",
      "Obsesionados con seguridad material",
      "Protectores de su familia",
      "Memoria emocional profunda",
    ],
    correction:
      "Reconocer que las limitaciones físicas son ilusiones. Salir de la armadura de posesiones materiales. Compartir su empatía natural con otros sin miedo. Superar la ansiedad confiando en la Luz.",
    tikun: {
      pastLife:
        "En vidas pasadas fueron Capricornio: obsesionados con éxito profesional, reputación y estatus, fríos emocionalmente.",
      currentLesson:
        "Ahora deben encontrar felicidad en el hogar y la familia. Aprender a expresar emociones y valorar las relaciones sobre los logros materiales.",
    },
    spiritualMeaning:
      "Chet significa 'vida' (Jaim) y representa la energía vital. Tamuz es un mes de juicio donde las emociones están intensificadas. La Luna (Tav) amplifica la sensibilidad. Cáncer debe aprender a usar su intuición para proteger, no para esconderse.",
    monthlyStrategy:
      "Sanación proactiva - Trabajar activamente en la sanación emocional propia y de otros. No esperar a que las heridas se curen solas.",
  },
  Leo: {
    name: "Leo",
    hebrewMonth: "Av",
    hebrewLetter: "Tet (ט)",
    planet: "Sol",
    planetLetter: "Kaf (כ)",
    element: "Fuego",
    monthOf: "Gran energía (puede ser positiva o negativa)",
    characteristics: [
      "Se sienten el centro del universo",
      "Líderes naturales",
      "Generosos pero arrogantes",
      "Susceptibles a halagos",
      "Exigen respeto",
      "Creativos y dramáticos",
      "Corazón noble cuando superan el ego",
    ],
    correction:
      "Entender que sus dones vienen de la Luz, no de ellos mismos. Compartir sin buscar gloria personal. Superar el orgullo y reconocer que son canales, no la fuente. Liderar con humildad.",
    tikun: {
      pastLife:
        "En vidas pasadas fueron Acuario: rebeldes sin causa, poco disciplinados, dependientes en relaciones, evitaban responsabilidades.",
      currentLesson:
        "Ahora deben liderar por motivos altruistas, no por ego. Asumir responsabilidades y usar su carisma para inspirar a otros hacia la Luz.",
    },
    spiritualMeaning:
      "Tet significa 'serpiente' y representa la bondad oculta (Tov). El Sol (Kaf) ilumina todo. Av es un mes de gran poder que puede usarse para bien o mal. Leo debe aprender que su luz es un reflejo de la Luz Divina, no su propia creación.",
    monthlyStrategy:
      "Humildad y discreción - Practicar la humildad genuina. Compartir la luz sin buscar reconocimiento personal.",
  },
  Virgo: {
    name: "Virgo",
    hebrewMonth: "Elul",
    hebrewLetter: "Yod (י)",
    planet: "Mercurio",
    planetLetter: "Resh (ר)",
    element: "Tierra",
    monthOf: "Arrepentimiento y Purificación",
    characteristics: [
      "Perfeccionistas obsesivos",
      "Analíticos y críticos",
      "Organizados y metódicos",
      "Ven solo los detalles, no el panorama",
      "Orgullosos de su lógica",
      "Poco espirituales por naturaleza",
      "Serviciales pero exigentes",
    ],
    correction:
      "Ver más allá del mundo físico hacia lo espiritual. Criticarse primero a sí mismos antes de juzgar a otros. Entender que sus conclusiones lógicas no son verdades absolutas. Abrirse a lo místico.",
    tikun: {
      pastLife:
        "En vidas pasadas fueron Piscis: soñadores, melodramáticos, dependientes, vivían en fantasías sin estructura.",
      currentLesson:
        "Ahora deben ser realistas, autodisciplinados y responsables. Usar el análisis para servir, no para criticar. Encontrar el equilibrio entre lo práctico y lo espiritual.",
    },
    spiritualMeaning:
      "Yod es la letra más pequeña pero contiene toda la energía de la creación. Elul es el mes de preparación para Rosh Hashaná, tiempo de introspección. Mercurio (Resh) perfecciona el análisis. Virgo debe aprender que la perfección verdadera incluye lo espiritual.",
    monthlyStrategy:
      "Purificación espiritual - Limpiar la casa interior. Hacer introspección profunda y corregir errores del pasado.",
  },
  Libra: {
    name: "Libra",
    hebrewMonth: "Tishrei",
    hebrewLetter: "Lamed (ל)",
    planet: "Venus",
    planetLetter: "Pei (פ)",
    element: "Aire",
    monthOf: "Nuevos Comienzos",
    characteristics: [
      "Indecisos y dubitativos",
      "Ven ambos lados con igual mérito",
      "Paralizados por miedo a equivocarse",
      "Buscan equilibrio pero viven en confusión",
      "Evitan confrontaciones",
      "Diplomáticos naturales",
      "Aman la belleza y la armonía",
    ],
    correction:
      "Confiar en la Luz y tomar acción decisiva. Aceptar que cometer errores es parte del crecimiento. Dejar de sobre-analizar y actuar con fe. Entender que la indecisión también es una decisión.",
    tikun: {
      pastLife:
        "En vidas pasadas fueron Aries: arrogantes, egoístas, agresivos, tomaban decisiones impulsivas sin considerar a otros.",
      currentLesson:
        "Ahora deben ser parte de un equipo y sacrificarse por otros. Aprender a considerar múltiples perspectivas, pero sin paralizarse. Encontrar el equilibrio entre acción y reflexión.",
    },
    spiritualMeaning:
      "Lamed significa 'enseñar' y es la letra más alta del alfabeto hebreo. Tishrei contiene Rosh Hashaná y Yom Kipur, los días más sagrados. Venus (Pei) busca armonía. Libra debe aprender que el verdadero equilibrio viene de la conexión con la Luz, no del análisis mental.",
    monthlyStrategy:
      "Plantar semillas puras - Nuevos comienzos con intenciones claras. Tomar decisiones basadas en valores espirituales, no en complacer a otros.",
  },
  Escorpio: {
    name: "Escorpio",
    hebrewMonth: "Mar-Cheshvan",
    hebrewLetter: "Nun (נ)",
    planet: "Marte",
    planetLetter: "Dalet (ד)",
    element: "Agua",
    monthOf: "Juicio (mes negativo)",
    characteristics: [
      "Magnetismo poderoso",
      "Controladores y dominantes",
      "Celosos y vengativos",
      "Extremadamente intuitivos",
      "Dominados por emociones intensas",
      "Capacidad de transformación profunda",
      "Todo o nada en sus relaciones",
    ],
    correction:
      "Frenar el fuego marciano con el agua emocional. Controlar arrebatos emocionales y reacciones vengativas. Dejar emerger el lado compasivo de su naturaleza. Usar su poder para transformar, no para destruir.",
    tikun: {
      pastLife:
        "En vidas pasadas fueron Tauro: tercos, materialistas, hedonistas, buscaban solo comodidad y placer físico.",
      currentLesson:
        "Ahora deben abandonar la comodidad, ser espontáneos y valorar lo espiritual sobre lo material. Aprender a soltar el control y confiar en el proceso de transformación.",
    },
    spiritualMeaning:
      "Nun significa 'pez' y representa la fe que nada en aguas profundas. Mar-Cheshvan es el único mes sin festividades, un tiempo de trabajo interno. Marte (Dalet) en agua crea intensidad emocional. Escorpio tiene el poder de muerte y renacimiento espiritual.",
    monthlyStrategy:
      "Resistir reacciones - Trabajar en la negatividad interna. No reaccionar impulsivamente a provocaciones. Transformar la oscuridad en luz.",
  },
  Sagitario: {
    name: "Sagitario",
    hebrewMonth: "Kislev",
    hebrewLetter: "Samech (ס)",
    planet: "Júpiter",
    planetLetter: "Gimel (ג)",
    element: "Fuego",
    monthOf: "Milagros",
    characteristics: [
      "Buscan desafíos constantemente",
      "Aventureros y optimistas",
      "Aman la libertad absoluta",
      "Aprenden de sus errores",
      "Creen que todo saldrá bien",
      "Filosóficos y buscadores de verdad",
      "Pueden ser irresponsables",
    ],
    correction:
      "No ver cada desafío solo como diversión personal. Buscar la meta espiritual de revelar luz en cada aventura. Ser responsables con su comportamiento aventurero. Entender que la libertad verdadera viene de la disciplina espiritual.",
    tikun: {
      pastLife:
        "En vidas pasadas fueron Géminis: indecisos, superficiales, hipócritas, cambiaban de opinión constantemente.",
      currentLesson:
        "Ahora deben definir metas claras, ser fieles a sus convicciones y encontrar su identidad verdadera. Profundizar en lugar de dispersarse.",
    },
    spiritualMeaning:
      "Samech significa 'soporte' y representa el apoyo divino. Kislev contiene Janucá, la fiesta de los milagros y la luz. Júpiter (Gimel) expande todo. Sagitario debe aprender que los verdaderos milagros ocurren cuando la transformación interna genera cambios externos.",
    monthlyStrategy:
      "Transformación interna - Los milagros externos vienen de cambios internos. Trabajar en el carácter para manifestar milagros.",
  },
  Capricornio: {
    name: "Capricornio",
    hebrewMonth: "Tevet",
    hebrewLetter: "Áin (ע)",
    planet: "Saturno",
    planetLetter: "Bet (ב)",
    element: "Tierra",
    monthOf: "Más espiritual pero difícil",
    characteristics: [
      "Serios y materialistas",
      "Asumen responsabilidades temprano",
      "Fríos emocionalmente",
      "Excelentes negociantes",
      "Valoran tiempo y dinero sobre todo",
      "Ambiciosos y disciplinados",
      "Pueden ser calculadores",
    ],
    correction:
      "Entender que nada es resultado solo de su esfuerzo personal. Compartir generosamente su éxito. Ver el potencial espiritual desde su posición elevada. Reconocer que el verdadero éxito incluye conexiones humanas.",
    tikun: {
      pastLife: "En vidas pasadas fueron Cáncer: ansiosos, dependientes, infantiles, buscaban seguridad en otros.",
      currentLesson:
        "Ahora deben madurar, asumir responsabilidades y encontrar causas dignas. Usar su posición para ayudar a otros, no solo para acumular poder.",
    },
    spiritualMeaning:
      "Áin significa 'ojo' y representa la visión profunda. Saturno (Bet) crea estructura y tiempo. Tevet es un mes de juicio pero también de gran potencial espiritual. Capricornio debe aprender que la verdadera riqueza es espiritual.",
    monthlyStrategy:
      "Ceder control - Paradójicamente, ceder control para obtener control verdadero. Confiar en la Luz en lugar de solo en el esfuerzo personal.",
  },
  Acuario: {
    name: "Acuario",
    hebrewMonth: "Shvat",
    hebrewLetter: "Tzadi (צ)",
    planet: "Saturno",
    planetLetter: "Bet (ב)",
    element: "Aire",
    monthOf: "Redención",
    characteristics: [
      "Idealistas y rebeldes",
      "Preocupados por la humanidad (no por individuos)",
      "Originales e innovadores",
      "Obstinados e independientes",
      "Viven en el futuro",
      "Humanitarios pero distantes",
      "Genios excéntricos",
    ],
    correction:
      "Conquistar su orgullo ilimitado. Preocuparse también por individuos, no solo por masas abstractas. Ser canales humildes de energía innovadora. Conectar sus ideales con acciones concretas que ayuden a personas reales.",
    tikun: {
      pastLife:
        "En vidas pasadas fueron Leo: arrogantes, exhibicionistas, orgullosos, buscaban atención y gloria personal.",
      currentLesson:
        "Ahora deben practicar humildad genuina, interdependencia y servicio humanitario sin buscar reconocimiento. Trabajar por el bien común, no por ego.",
    },
    spiritualMeaning:
      "Tzadi significa 'justo' y representa al Tzadik (persona justa). Shvat es el mes de redención y liberación. Saturno (Bet) estructura la visión futurista. Acuario tiene el poder de traer el futuro al presente, pero debe hacerlo con humildad.",
    monthlyStrategy:
      "Liberación de negatividad - Liberarse de patrones negativos para recibir luz nueva. Soltar el pasado para crear el futuro.",
  },
  Piscis: {
    name: "Piscis",
    hebrewMonth: "Adar",
    hebrewLetter: "Kuf (ק)",
    planet: "Júpiter",
    planetLetter: "Gimel (ג)",
    element: "Agua",
    monthOf: "Alegría",
    characteristics: [
      "Humildes y sensibles",
      "Absorben dolor de otros",
      "Naturalmente comparten",
      "Falta de deseo personal",
      "Conectados con ambos mundos (físico y espiritual)",
      "Soñadores y místicos",
      "Pueden perderse en ilusiones",
    ],
    correction:
      "Desear más para la humanidad, no solo aceptar pasivamente. Entrar en acción para revelar lo oculto. No solo saber y sentir, sino actuar y manifestar. Usar su conexión espiritual para crear cambios reales.",
    tikun: {
      pastLife: "En vidas pasadas fueron Virgo: lógicos, críticos, rígidos, rechazaban lo espiritual y emocional.",
      currentLesson:
        "Ahora deben ver la realidad espiritual detrás del mundo físico, ser emocionales y compasivos. Equilibrar la intuición con la acción práctica.",
    },
    spiritualMeaning:
      "Kuf significa 'santo' y representa la santidad oculta. Adar es el mes de Purim, donde lo oculto se revela. Júpiter (Gimel) expande la compasión. Piscis cierra el zodíaco conteniendo todas las lecciones anteriores, preparando para un nuevo ciclo.",
    monthlyStrategy:
      "Alegría activa - Traer felicidad a otros para recibirla. No solo sentir compasión, sino actuar con alegría para elevar al mundo.",
  },
}

export function getZodiacKabbalah(birthDate: string): ZodiacSignInfo {
  const [year, month, day] = birthDate.split("-").map(Number)

  const zodiacRanges = [
    { sign: "Capricornio", start: [12, 22], end: [1, 19] },
    { sign: "Acuario", start: [1, 20], end: [2, 18] },
    { sign: "Piscis", start: [2, 19], end: [3, 20] },
    { sign: "Aries", start: [3, 21], end: [4, 19] },
    { sign: "Tauro", start: [4, 20], end: [5, 20] },
    { sign: "Géminis", start: [5, 21], end: [6, 20] },
    { sign: "Cáncer", start: [6, 21], end: [7, 22] },
    { sign: "Leo", start: [7, 23], end: [8, 22] },
    { sign: "Virgo", start: [8, 23], end: [9, 22] },
    { sign: "Libra", start: [9, 23], end: [10, 22] },
    { sign: "Escorpio", start: [10, 23], end: [11, 21] },
    { sign: "Sagitario", start: [11, 22], end: [12, 21] },
  ]

  for (const range of zodiacRanges) {
    const [startMonth, startDay] = range.start
    const [endMonth, endDay] = range.end

    if (startMonth > endMonth) {
      // Crosses year boundary
      if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
        return ZODIAC_KABBALAH[range.sign]
      }
    } else {
      // Within same year
      if (
        (month === startMonth && day >= startDay) ||
        (month === endMonth && day <= endDay) ||
        (month > startMonth && month < endMonth)
      ) {
        return ZODIAC_KABBALAH[range.sign]
      }
    }
  }

  return ZODIAC_KABBALAH["Capricornio"]
}
