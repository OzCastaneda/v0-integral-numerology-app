export interface ZodiacSignInfo {
  name: string
  hebrewMonth: string
  hebrewLetter: string
  planet: string
  planetLetter: string
  adn: string // ADN del alma: combinación de letras
  element: string
  monthOf: string
  characteristics: string[]
  correction: string
  tikun: {
    pastLife: string
    pastLifeSign: string
    currentLesson: string
  }
  spiritualMeaning: string
  monthlyStrategy: string
}

// Codificación de los 7 Planetas según la Cábala
export const PLANET_LETTERS = {
  Sol: "Kaf (כ)",
  Luna: "Tav (ת)",
  Mercurio: "Resh (ר)",
  Venus: "Pei (פ)",
  Marte: "Dalet (ד)",
  Júpiter: "Guimel (ג)",
  Saturno: "Bet (ב)",
}

export const ZODIAC_KABBALAH: Record<string, ZodiacSignInfo> = {
  Aries: {
    name: "Aries",
    hebrewMonth: "Nissan",
    hebrewLetter: "Hei (ה)",
    planet: "Marte",
    planetLetter: "Dalet (ד)",
    adn: "הד (Hei + Dalet)",
    element: "Fuego",
    monthOf: "Milagros y Liberación",
    characteristics: [
      "Potencial único para el crecimiento espiritual",
      "Impulsivos y obstinados",
      "Espíritu pionero y valientes",
      "Saltan de cabeza a las situaciones",
      "No toleran oposición ni críticas",
      "Líderes naturales con energía combativa",
      "Necesitan descubrir su propia identidad",
    ],
    correction:
      "Descubrir la propia identidad y mejorar la autoestima, dejando de ser dependiente de la aprobación ajena. Debe aprender a encarar conflictos de forma proactiva y altruista, poniendo su naturaleza combativa al servicio desinteresado.",
    tikun: {
      pastLife:
        "En su vida anterior fue Libra: indeciso, evitaba conflictos, dependía de otros para tomar decisiones y validar su identidad. Buscaba aprobación constante y no tenía una opinión propia definida.",
      pastLifeSign: "Libra",
      currentLesson:
        "Ahora debe descubrir su identidad propia, ser independiente y proactivo. Aprender a tomar decisiones rápidas y defender sus convicciones sin miedo al rechazo. Convertirse en 'rebelde con causa' en lugar de 'rebelde sin causa'.",
    },
    spiritualMeaning:
      "El ADN הד (Hei + Dalet) combina el aliento divino con la puerta de la manifestación. Aries inicia el zodíaco como Nissan inicia el año hebreo. Es el mes de la libertad (Éxodo de Egipto) y los milagros. La energía de Marte canalizada correctamente crea el poder de iniciar nuevos ciclos y romper limitaciones kármicas.",
    monthlyStrategy:
      "Confrontación constructiva - Construir puentes y hacer las paces. Usar la energía combativa para defender causas justas, no para conflictos personales ni para alimentar el ego.",
  },
  Tauro: {
    name: "Tauro",
    hebrewMonth: "Iyar",
    hebrewLetter: "Vav (ו)",
    planet: "Venus",
    planetLetter: "Pei (פ)",
    adn: "וף (Vav + Pei)",
    element: "Tierra",
    monthOf: "La Luz y el Juicio",
    characteristics: [
      "Aman el confort, la estabilidad y la belleza",
      "Tercos como el toro, resistentes al cambio",
      "Pacientes, leales y extremadamente confiables",
      "Satisfechos con lo que tienen",
      "Pueden vivir en una 'burbuja' de comodidad",
      "Aprecian los placeres sensoriales",
      "Materialistas pero pueden ser muy generosos",
    ],
    correction:
      "Superar la naturaleza autodestructiva heredada de vidas pasadas, la ira y la desconfianza. Debe aprender a disfrutar de la belleza y la paz de la vida sin temor a la pérdida, transformando la beligerancia interna en serenidad proactiva.",
    tikun: {
      pastLife:
        "En su vida anterior fue Escorpio: autodestructivo, desconfiado, enojado, vivía en extremos emocionales. Era beligerante, vengativo y se consumía en pasiones oscuras.",
      pastLifeSign: "Escorpio",
      currentLesson:
        "Ahora debe disfrutar la belleza de la vida y expulsar el temor. Aprender a confiar en los demás y en la vida, ser estable emocionalmente y encontrar paz en la simplicidad. Transformar la intensidad emocional en apreciación serena.",
    },
    spiritualMeaning:
      "El ADN וף (Vav + Pei) conecta el cielo con la tierra a través de la expresión bella. Vav significa 'gancho' o 'clavo' y representa la conexión sanadora entre los mundos superiores e inferiores. Venus aporta belleza y armonía a esta manifestación terrestre.",
    monthlyStrategy:
      "Plenitud interior - La curación viene del interior, no de posesiones externas. Usar la estabilidad para sanar a otros y compartir abundancia sin apego al resultado.",
  },
  Géminis: {
    name: "Géminis",
    hebrewMonth: "Sivan",
    hebrewLetter: "Záin (ז)",
    planet: "Mercurio",
    planetLetter: "Resh (ר)",
    adn: "זר (Záin + Resh)",
    element: "Aire",
    monthOf: "Unificación y Revelación",
    characteristics: [
      "Mente rápida y brillante",
      "Excelentes comunicadores y oradores",
      "Ven ambos lados de cada situación",
      "Pueden ser superficiales y dispersos",
      "Dificultad para comprometerse profundamente",
      "Curiosos insaciables de conocimiento",
      "Adaptables y extremadamente versátiles",
    ],
    correction:
      "Abandonar el comportamiento de 'niño malcriado' que busca solo satisfacer necesidades inmediatas. Su corrección es comprometerse genuinamente con los demás, aprender humildad verdadera y compartir el conocimiento con un propósito profundo y transformador.",
    tikun: {
      pastLife:
        "En su vida anterior fue Sagitario: egoísta, desorganizado, irresponsable, vivía en constante incertidumbre y superficialidad. Era como un niño malcriado incapaz de tomar decisiones firmes o mantener compromisos.",
      pastLifeSign: "Sagitario",
      currentLesson:
        "Ahora debe aprender humildad genuina, compartir conocimiento con propósito y considerar profundamente a los demás. Organizar sus ideas hacia metas significativas y comprometerse con relaciones y proyectos profundos.",
    },
    spiritualMeaning:
      "El ADN זר (Záin + Resh) combina la espada que corta la ilusión con la cabeza del pensamiento. Záin representa el poder de resucitar la realidad a un nivel más alto y puro. Sivan es el mes de la entrega de la Torá, donde el conocimiento divino fue revelado. Mercurio potencia la capacidad de comunicar verdades espirituales.",
    monthlyStrategy:
      "Relaciones profundas - Invertir amor genuino en las relaciones sin esperar nada a cambio. Usar la comunicación para unir y elevar, no para impresionar o manipular.",
  },
  Cáncer: {
    name: "Cáncer",
    hebrewMonth: "Tamuz",
    hebrewLetter: "Chet (ח)",
    planet: "Luna",
    planetLetter: "Tav (ת)",
    adn: "חת (Chet + Tav)",
    element: "Agua",
    monthOf: "Juicio Directo",
    characteristics: [
      "Hipersensibles e intensamente intuitivos",
      "Cambios de humor extremos y frecuentes",
      "Temerosos, ansiosos y protectores",
      "Se esconden en su 'concha' emocional",
      "Obsesionados con seguridad material y familiar",
      "Protectores devotos de su familia",
      "Memoria emocional profunda y duradera",
    ],
    correction:
      "El alma estuvo obsesionada con el éxito profesional y el prestigio social en su vida pasada. El Tikkun exige abandonar la ilusión del estatus y encontrar la plenitud en la creación de un hogar cariñoso, la piedad y la devoción familiar genuina.",
    tikun: {
      pastLife:
        "En su vida anterior fue Capricornio: obsesionado con éxito profesional, reputación y estatus social. Era frío emocionalmente, calculador y valoraba los logros materiales sobre las conexiones humanas.",
      pastLifeSign: "Capricornio",
      currentLesson:
        "Ahora debe encontrar felicidad genuina en el hogar y la familia, no en el éxito externo. Aprender a expresar emociones libremente y valorar las relaciones íntimas sobre los logros materiales y el reconocimiento público.",
    },
    spiritualMeaning:
      "El ADN חת (Chet + Tav) combina la vida (Jaim) con la completitud. Chet significa 'vida' y representa la energía vital protectora. Tamuz es un mes de juicio donde las emociones están intensificadas. La Luna amplifica la sensibilidad. Cáncer debe aprender a usar su intuición para nutrir y proteger sin miedo.",
    monthlyStrategy:
      "Sanación proactiva - Trabajar activamente en la sanación emocional propia y de otros. No esperar a que las heridas se curen solas ni esconderse del dolor.",
  },
  Leo: {
    name: "Leo",
    hebrewMonth: "Av",
    hebrewLetter: "Tet (ט)",
    planet: "Sol",
    planetLetter: "Kaf (כ)",
    adn: "טכ (Tet + Kaf)",
    element: "Fuego",
    monthOf: "Gran Energía Transformadora",
    characteristics: [
      "Se sienten el centro del universo",
      "Líderes naturales carismáticos",
      "Generosos pero profundamente arrogantes",
      "Susceptibles a halagos y adulación",
      "Exigen respeto y admiración constante",
      "Creativos, dramáticos y expresivos",
      "Corazón noble cuando superan el ego",
    ],
    correction:
      "En vidas pasadas fue un transgresor de reglas que buscaba originalidad superficial. Su corrección es servir a la humanidad silenciando su ego, utilizando su fuerza interior para causas altruistas y practicando la modestia genuina.",
    tikun: {
      pastLife:
        "En su vida anterior fue Acuario: rebelde sin causa, poco disciplinado, dependiente en relaciones, evitaba responsabilidades. Buscaba ser diferente solo por el gusto de transgredir, no por un propósito elevado.",
      pastLifeSign: "Acuario",
      currentLesson:
        "Ahora debe liderar por motivos altruistas, no por ego o búsqueda de admiración. Asumir responsabilidades con humildad y usar su carisma natural para inspirar a otros hacia la Luz, no hacia sí mismo.",
    },
    spiritualMeaning:
      "El ADN טכ (Tet + Kaf) combina la bondad oculta con la corona del Sol. Tet significa 'serpiente' y representa el bien escondido dentro del mal aparente (Tov). El Sol ilumina todo sin discriminación. Av es un mes de gran poder que puede usarse para destrucción o redención. Leo debe aprender que su luz es un reflejo de la Luz Divina.",
    monthlyStrategy:
      "Humildad y discreción - Practicar la humildad genuina, no la falsa modestia. Compartir la luz sin buscar reconocimiento personal ni aplausos.",
  },
  Virgo: {
    name: "Virgo",
    hebrewMonth: "Elul",
    hebrewLetter: "Yod (י)",
    planet: "Mercurio",
    planetLetter: "Resh (ר)",
    adn: "יר (Yod + Resh)",
    element: "Tierra",
    monthOf: "Arrepentimiento y Purificación",
    characteristics: [
      "Perfeccionistas obsesivos con los detalles",
      "Analíticos, críticos y meticulosos",
      "Organizados y extremadamente metódicos",
      "Ven solo los detalles, pierden el panorama",
      "Orgullosos de su lógica y razón",
      "Resistentes a lo espiritual y místico",
      "Serviciales pero exigentes e inflexibles",
    ],
    correction:
      "Estaba consumido por fantasías y autocompasión en su vida pasada. Debe adquirir una visión realista y autodisciplinada del mundo, asumiendo la responsabilidad de sus actos y dejando de lado el sentimentalismo blando para actuar aquí y ahora.",
    tikun: {
      pastLife:
        "En su vida anterior fue Piscis: soñador, melodramático, dependiente, vivía en fantasías sin estructura ni acción. Se perdía en emociones y evitaba la responsabilidad refugiándose en ilusiones.",
      pastLifeSign: "Piscis",
      currentLesson:
        "Ahora debe ser realista, autodisciplinado y completamente responsable de sus actos. Usar el análisis para servir prácticamente, no para criticar destructivamente. Encontrar el equilibrio entre lo práctico y lo espiritual sin rechazar ninguno.",
    },
    spiritualMeaning:
      "El ADN יר (Yod + Resh) combina la semilla de la creación con la cabeza del pensamiento. Yod es la letra más pequeña pero contiene toda la energía creativa del universo. Elul es el mes de preparación para Rosh Hashaná, tiempo sagrado de introspección. Mercurio perfecciona el análisis. Virgo debe aprender que la perfección verdadera incluye lo espiritual.",
    monthlyStrategy:
      "Purificación espiritual - Limpiar la casa interior con honestidad brutal. Hacer introspección profunda y corregir errores del pasado sin autocompasión.",
  },
  Libra: {
    name: "Libra",
    hebrewMonth: "Tishrei",
    hebrewLetter: "Lamed (ל)",
    planet: "Venus",
    planetLetter: "Pei (פ)",
    adn: "לף (Lamed + Pei)",
    element: "Aire",
    monthOf: "Nuevos Comienzos Sagrados",
    characteristics: [
      "Indecisos y perpetuamente dubitativos",
      "Ven ambos lados con igual mérito",
      "Paralizados por miedo a equivocarse",
      "Buscan equilibrio pero viven en confusión",
      "Evitan confrontaciones a toda costa",
      "Diplomáticos naturales y mediadores",
      "Aman la belleza, armonía y justicia",
    ],
    correction:
      "En el pasado tuvo una opinión exagerada de sí mismo y fue agresivo. Su corrección requiere la anulación del orgullo, aprender a trabajar en equipo genuinamente y cultivar el amor desinteresado, especialmente a través del matrimonio y las asociaciones.",
    tikun: {
      pastLife:
        "En su vida anterior fue Aries: arrogante, egoísta, agresivo, tomaba decisiones impulsivas sin considerar a otros. Tenía una opinión exagerada de sí mismo y usaba la fuerza para imponer su voluntad.",
      pastLifeSign: "Aries",
      currentLesson:
        "Ahora debe ser parte de un equipo y sacrificarse genuinamente por otros. Aprender a considerar múltiples perspectivas sin paralizarse. Encontrar el equilibrio entre acción y reflexión, entre dar y recibir.",
    },
    spiritualMeaning:
      "El ADN לף (Lamed + Pei) combina la enseñanza elevada con la expresión armoniosa. Lamed significa 'enseñar' y es la letra más alta del alfabeto hebreo, representando la aspiración espiritual. Tishrei contiene Rosh Hashaná y Yom Kipur. Venus busca armonía perfecta. Libra debe aprender que el verdadero equilibrio viene de la conexión con la Luz, no del análisis mental.",
    monthlyStrategy:
      "Plantar semillas puras - Nuevos comienzos con intenciones absolutamente claras. Tomar decisiones basadas en valores espirituales, no en complacer a otros o evitar conflictos.",
  },
  Escorpio: {
    name: "Escorpio",
    hebrewMonth: "Mar-Cheshvan",
    hebrewLetter: "Nun (נ)",
    planet: "Marte",
    planetLetter: "Dalet (ד)",
    adn: "נד (Nun + Dalet)",
    element: "Agua",
    monthOf: "Trabajo Interno Profundo",
    characteristics: [
      "Magnetismo poderoso e hipnótico",
      "Controladores y dominantes",
      "Celosos, posesivos y vengativos",
      "Extremadamente intuitivos y perceptivos",
      "Dominados por emociones intensas",
      "Capacidad de transformación profunda",
      "Todo o nada en sus relaciones",
    ],
    correction:
      "Fue un hedonista terco y posesivo, reacio al cambio en su vida pasada. El Tikkun le pide abandonar el materialismo y las reglas estrictas para permitir la espontaneidad y la confianza en la Luz, logrando una metamorfosis kármica hacia la empatía humana genuina.",
    tikun: {
      pastLife:
        "En su vida anterior fue Tauro: terco, materialista, hedonista, buscaba solo comodidad y placer físico. Era posesivo con sus pertenencias y personas, reacio a cualquier cambio que amenazara su seguridad.",
      pastLifeSign: "Tauro",
      currentLesson:
        "Ahora debe abandonar la comodidad material, ser espontáneo y valorar lo espiritual sobre lo material. Aprender a soltar el control obsesivo y confiar en el proceso de transformación y muerte simbólica del ego.",
    },
    spiritualMeaning:
      "El ADN נד (Nun + Dalet) combina el pez que nada en las profundidades con la puerta de la transformación. Nun significa 'pez' y representa la fe que nada en aguas oscuras sin ver. Mar-Cheshvan es el único mes sin festividades, un tiempo de trabajo interno intenso. Marte en agua crea intensidad emocional transformadora. Escorpio tiene el poder de muerte y renacimiento espiritual.",
    monthlyStrategy:
      "Resistir reacciones - Trabajar en la negatividad interna sin proyectarla. No reaccionar impulsivamente a provocaciones. Transformar la oscuridad en luz a través de la alquimia emocional.",
  },
  Sagitario: {
    name: "Sagitario",
    hebrewMonth: "Kislev",
    hebrewLetter: "Samech (ס)",
    planet: "Júpiter",
    planetLetter: "Guimel (ג)",
    adn: "סג (Samech + Guimel)",
    element: "Fuego",
    monthOf: "Milagros y Luz",
    characteristics: [
      "Buscan desafíos constantemente",
      "Aventureros y optimistas incurables",
      "Aman la libertad absoluta",
      "Aprenden de sus errores (eventualmente)",
      "Creen que todo saldrá bien siempre",
      "Filosóficos y buscadores de verdad",
      "Pueden ser irresponsables y dispersos",
    ],
    correction:
      "Vivía en constante incertidumbre y superficialidad, siendo incapaz de tomar decisiones firmes. Su reto es definir metas claras, actuar con fidelidad e integridad absoluta, y descubrir su misión de compartir sabiduría y verdad genuinas.",
    tikun: {
      pastLife:
        "En su vida anterior fue Géminis: indeciso, superficial, hipócrita, cambiaba de opinión constantemente. Vivía en la incertidumbre perpetua, incapaz de comprometerse con nada ni nadie profundamente.",
      pastLifeSign: "Géminis",
      currentLesson:
        "Ahora debe definir metas claras y elevadas, ser fiel a sus convicciones hasta el final y encontrar su identidad verdadera. Profundizar en la sabiduría en lugar de dispersarse en conocimientos superficiales.",
    },
    spiritualMeaning:
      "El ADN סג (Samech + Guimel) combina el soporte divino con la generosidad expansiva. Samech significa 'soporte' y representa el apoyo incondicional del Creador. Kislev contiene Janucá, la fiesta de los milagros y la luz en la oscuridad. Júpiter expande todo lo que toca. Sagitario debe aprender que los verdaderos milagros ocurren cuando la transformación interna precede al cambio externo.",
    monthlyStrategy:
      "Transformación interna - Los milagros externos son resultado de cambios internos genuinos. Trabajar en el carácter con disciplina para manifestar milagros verdaderos.",
  },
  Capricornio: {
    name: "Capricornio",
    hebrewMonth: "Tevet",
    hebrewLetter: "Áin (ע)",
    planet: "Saturno",
    planetLetter: "Bet (ב)",
    adn: "עב (Áin + Bet)",
    element: "Tierra",
    monthOf: "Potencial Espiritual Elevado",
    characteristics: [
      "Serios, pragmáticos y materialistas",
      "Asumen responsabilidades desde muy temprano",
      "Fríos emocionalmente y calculadores",
      "Excelentes negociantes y estrategas",
      "Valoran tiempo y dinero sobre todo",
      "Ambiciosos, disciplinados e incansables",
      "Pueden ser manipuladores y despiadados",
    ],
    correction:
      "Tenía una dependencia emocional infantil y miedo al riesgo en su vida pasada. El Tikkun exige madurez y responsabilidad total, cortar el cordón umbilical familiar y encontrar una causa digna que le permita disipar sus ansiedades a través del servicio social genuino.",
    tikun: {
      pastLife:
        "En su vida anterior fue Cáncer: ansioso, dependiente, emocionalmente infantil, buscaba seguridad en otros constantemente. Tenía miedo de asumir responsabilidades y se refugiaba en la familia para evitar crecer.",
      pastLifeSign: "Cáncer",
      currentLesson:
        "Ahora debe madurar completamente, asumir responsabilidades sin quejas y encontrar causas dignas de servicio. Usar su posición y logros para ayudar genuinamente a otros, no solo para acumular poder y prestigio personal.",
    },
    spiritualMeaning:
      "El ADN עב (Áin + Bet) combina el ojo de la visión profunda con la casa de la estructura. Áin significa 'ojo' y representa la capacidad de ver más allá de las apariencias. Saturno crea estructura, límites y tiempo. Tevet es un mes de juicio pero también de gran potencial espiritual para quien trabaja con disciplina. Capricornio debe aprender que la verdadera riqueza es espiritual y relacional.",
    monthlyStrategy:
      "Ceder control paradójico - Ceder el control ilusorio para obtener control verdadero. Confiar en la Luz Divina en lugar de solo en el esfuerzo personal y la manipulación.",
  },
  Acuario: {
    name: "Acuario",
    hebrewMonth: "Shvat",
    hebrewLetter: "Tzadi (צ)",
    planet: "Saturno",
    planetLetter: "Bet (ב)",
    adn: "צב (Tzadi + Bet)",
    element: "Aire",
    monthOf: "Redención y Liberación",
    characteristics: [
      "Idealistas y rebeldes por naturaleza",
      "Preocupados por la humanidad abstracta",
      "Originales, innovadores y excéntricos",
      "Obstinados e independientes al extremo",
      "Viven mentalmente en el futuro",
      "Humanitarios pero emocionalmente distantes",
      "Genios excéntricos e incomprendidos",
    ],
    correction:
      "Vivió como el centro de atención, dominando a los demás con arrogancia en su vida pasada. Su misión es silenciar el ego para vivir en simplicidad, aceptando la interdependencia y la fraternidad universal como un verdadero misionero de la humanidad.",
    tikun: {
      pastLife:
        "En su vida anterior fue Leo: arrogante, exhibicionista, orgulloso, buscaba atención y gloria personal constantemente. Dominaba a los demás con su carisma y creía merecer admiración por su mera existencia.",
      pastLifeSign: "Leo",
      currentLesson:
        "Ahora debe practicar humildad genuina y profunda, interdependencia real y servicio humanitario sin buscar reconocimiento alguno. Trabajar silenciosamente por el bien común, no por satisfacer el ego.",
    },
    spiritualMeaning:
      "El ADN צב (Tzadi + Bet) combina al justo con la casa de la manifestación. Tzadi significa 'justo' y representa al Tzadik (persona verdaderamente justa). Shvat es el mes de redención, liberación y nuevo año de los árboles. Saturno estructura la visión futurista. Acuario tiene el poder de traer el futuro al presente, pero debe hacerlo con humildad absoluta.",
    monthlyStrategy:
      "Liberación de negatividad - Liberarse de patrones negativos del pasado para recibir luz nueva. Soltar el ego y las memorias de gloria para crear un futuro de servicio.",
  },
  Piscis: {
    name: "Piscis",
    hebrewMonth: "Adar",
    hebrewLetter: "Kuf (ק)",
    planet: "Júpiter",
    planetLetter: "Guimel (ג)",
    adn: "קג (Kuf + Guimel)",
    element: "Agua",
    monthOf: "Alegría y Revelación",
    characteristics: [
      "Humildes, sensibles y absorbentes",
      "Absorben el dolor y emociones de otros",
      "Naturalmente comparten sin calcular",
      "Falta de deseo personal y ambición",
      "Conectados con ambos mundos simultáneamente",
      "Soñadores, místicos e intuitivos",
      "Pueden perderse en ilusiones y fantasías",
    ],
    correction:
      "Estaba atrapado en la lógica estricta y el perfeccionismo irascible en su vida pasada. Debe trascender los sentidos y la razón limitada para conectarse con la realidad espiritual, cultivando la compasión y el amor universal para lograr un verdadero renacimiento de conciencia.",
    tikun: {
      pastLife:
        "En su vida anterior fue Virgo: lógico, crítico, rígido, rechazaba lo espiritual y emocional como debilidad. Estaba atrapado en el perfeccionismo irascible y juzgaba todo con dureza implacable.",
      pastLifeSign: "Virgo",
      currentLesson:
        "Ahora debe ver la realidad espiritual detrás del mundo físico, ser emocional y profundamente compasivo. Equilibrar la intuición mística con la acción práctica compasiva. Trascender la razón sin abandonarla.",
    },
    spiritualMeaning:
      "El ADN קג (Kuf + Guimel) combina la santidad oculta con la generosidad expansiva. Kuf significa 'santo' y representa la santidad escondida detrás de las apariencias mundanas. Adar es el mes de Purim, donde lo oculto se revela y la alegría transforma la realidad. Júpiter expande la compasión infinitamente. Piscis cierra el zodíaco conteniendo todas las lecciones anteriores, preparando el alma para un nuevo ciclo de evolución.",
    monthlyStrategy:
      "Alegría activa y transformadora - Traer felicidad genuina a otros para recibirla multiplicada. No solo sentir compasión pasiva, sino actuar con alegría contagiosa para elevar al mundo entero.",
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
      // Crosses year boundary (Capricorn)
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
