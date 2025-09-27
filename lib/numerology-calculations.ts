import { LETTER_VALUES, MASTER_NUMBERS } from "./numerology-constants"

export interface NumerologyResult {
  soulPath: number
  destiny: number
  luck: number
  karma: number
  personalYear: number
  expression: number
}

// Utility function to parse date correctly without timezone issues
function parseDateSafely(dateString: string): { day: number; month: number; year: number } {
  // Parse the date string directly to avoid timezone conversion issues
  const [year, month, day] = dateString.split("-").map(Number)
  return { day, month, year }
}

// Reduce number to single digit or master number
export function reduceNumber(num: number): number {
  while (num > 9 && !MASTER_NUMBERS.includes(num)) {
    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number.parseInt(digit), 0)
  }
  return num
}

// Calculate Soul Path Number (from birth date)
export function calculateSoulPath(birthDate: string): number {
  const { day, month, year } = parseDateSafely(birthDate)
  const total = day + month + year
  return reduceNumber(total)
}

// Calculate Destiny Number (from full name)
export function calculateDestiny(fullName: string): number {
  const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, "")
  const total = cleanName.split("").reduce((sum, letter) => {
    return sum + (LETTER_VALUES[letter as keyof typeof LETTER_VALUES] || 0)
  }, 0)

  return reduceNumber(total)
}

// Calculate Expression Number (vowels from name)
export function calculateExpression(fullName: string): number {
  const vowels = "AEIOU"
  const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, "")
  const total = cleanName.split("").reduce((sum, letter) => {
    if (vowels.includes(letter)) {
      return sum + (LETTER_VALUES[letter as keyof typeof LETTER_VALUES] || 0)
    }
    return sum
  }, 0)

  return reduceNumber(total)
}

// Calculate Luck Number (combination of soul path and destiny)
export function calculateLuck(soulPath: number, destiny: number): number {
  return reduceNumber(soulPath + destiny)
}

// Calculate Karma Number (consonants from name)
export function calculateKarma(fullName: string): number {
  const vowels = "AEIOU"
  const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, "")
  const total = cleanName.split("").reduce((sum, letter) => {
    if (!vowels.includes(letter)) {
      return sum + (LETTER_VALUES[letter as keyof typeof LETTER_VALUES] || 0)
    }
    return sum
  }, 0)

  return reduceNumber(total)
}

// Calculate Personal Year (current year + birth month + birth day)
export function calculatePersonalYear(birthDate: string): number {
  const { day: birthDay, month: birthMonth } = parseDateSafely(birthDate)
  const currentYear = new Date().getFullYear()

  const total = currentYear + birthMonth + birthDay
  return reduceNumber(total)
}

// Main calculation function
export function calculateNumerology(fullName: string, birthDate: string): NumerologyResult {
  const soulPath = calculateSoulPath(birthDate)
  const destiny = calculateDestiny(fullName)
  const expression = calculateExpression(fullName)
  const karma = calculateKarma(fullName)
  const luck = calculateLuck(soulPath, destiny)
  const personalYear = calculatePersonalYear(birthDate)

  return {
    soulPath,
    destiny,
    luck,
    karma,
    personalYear,
    expression,
  }
}

// Get detailed interpretation for a number
export function getNumberInterpretation(number: number) {
  const meanings = {
    1: {
      title: "El Líder",
      description:
        "Eres un líder natural con gran independencia y determinación. Tu camino está marcado por la innovación y la iniciativa.",
      keywords: ["Liderazgo", "Independencia", "Innovación", "Pionero"],
    },
    2: {
      title: "El Diplomático",
      description:
        "Tu naturaleza cooperativa y diplomática te convierte en un excelente mediador. Buscas la armonía en todas las relaciones.",
      keywords: ["Cooperación", "Diplomacia", "Armonía", "Sensibilidad"],
    },
    3: {
      title: "El Creativo",
      description:
        "La creatividad y la comunicación son tus dones especiales. Tienes la habilidad de inspirar y alegrar a otros.",
      keywords: ["Creatividad", "Comunicación", "Inspiración", "Alegría"],
    },
    4: {
      title: "El Constructor",
      description:
        "Eres el constructor sólido, con gran disciplina y organización. Tu trabajo duro siempre da frutos duraderos.",
      keywords: ["Disciplina", "Organización", "Estabilidad", "Perseverancia"],
    },
    5: {
      title: "El Aventurero",
      description: "La libertad y la aventura definen tu esencia. Necesitas variedad y cambio constante en tu vida.",
      keywords: ["Libertad", "Aventura", "Cambio", "Versatilidad"],
    },
    6: {
      title: "El Cuidador",
      description:
        "Tu naturaleza cuidadora te lleva a proteger y nutrir a otros. La familia y el hogar son sagrados para ti.",
      keywords: ["Cuidado", "Familia", "Responsabilidad", "Servicio"],
    },
    7: {
      title: "El Místico",
      description:
        "Eres el místico y el buscador de la verdad. Tu camino espiritual es profundo y lleno de sabiduría interior.",
      keywords: ["Espiritualidad", "Sabiduría", "Introspección", "Misterio"],
    },
    8: {
      title: "El Ejecutivo",
      description:
        "El poder material y los logros mundanos son tu especialidad. Tienes gran capacidad para el éxito empresarial.",
      keywords: ["Poder", "Éxito", "Materialidad", "Ambición"],
    },
    9: {
      title: "El Humanitario",
      description: "Tu compasión universal te lleva a servir a la humanidad. Eres sabio y generoso por naturaleza.",
      keywords: ["Compasión", "Servicio", "Sabiduría", "Generosidad"],
    },
    11: {
      title: "El Maestro Espiritual",
      description:
        "Como maestro espiritual, posees intuición elevada e inspiración divina. Tu misión es iluminar a otros.",
      keywords: ["Intuición", "Inspiración", "Iluminación", "Maestría"],
    },
    22: {
      title: "El Maestro Constructor",
      description:
        "Eres el maestro constructor con visión práctica para crear grandes obras que beneficien a la humanidad.",
      keywords: ["Visión", "Construcción", "Humanidad", "Grandeza"],
    },
    33: {
      title: "El Maestro Sanador",
      description: "El maestro sanador con compasión infinita. Tu propósito es sanar y elevar la conciencia colectiva.",
      keywords: ["Sanación", "Compasión", "Conciencia", "Elevación"],
    },
  }

  return (
    meanings[number as keyof typeof meanings] || {
      title: "Número Especial",
      description: "Número con significado especial en tu camino de vida.",
      keywords: ["Único", "Especial", "Misterioso"],
    }
  )
}

// Get formatted date for display
export function getFormattedBirthDate(birthDate: string): string {
  const { day, month, year } = parseDateSafely(birthDate)
  return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`
}
