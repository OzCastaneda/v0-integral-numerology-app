import { LETTER_VALUES, MASTER_NUMBERS } from "./numerology-constants"

export interface NumerologyResult {
  soulPath: number
  destiny: number
  luck: number
  karma: number
  personalYear: number
  expression: number
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
  const date = new Date(birthDate)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

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
  const date = new Date(birthDate)
  const currentYear = new Date().getFullYear()
  const birthMonth = date.getMonth() + 1
  const birthDay = date.getDate()

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
    1: "Eres un líder natural con gran independencia y determinación. Tu camino está marcado por la innovación y la iniciativa.",
    2: "Tu naturaleza cooperativa y diplomática te convierte en un excelente mediador. Buscas la armonía en todas las relaciones.",
    3: "La creatividad y la comunicación son tus dones especiales. Tienes la habilidad de inspirar y alegrar a otros.",
    4: "Eres el constructor sólido, con gran disciplina y organización. Tu trabajo duro siempre da frutos duraderos.",
    5: "La libertad y la aventura definen tu esencia. Necesitas variedad y cambio constante en tu vida.",
    6: "Tu naturaleza cuidadora te lleva a proteger y nutrir a otros. La familia y el hogar son sagrados para ti.",
    7: "Eres el místico y el buscador de la verdad. Tu camino espiritual es profundo y lleno de sabiduría interior.",
    8: "El poder material y los logros mundanos son tu especialidad. Tienes gran capacidad para el éxito empresarial.",
    9: "Tu compasión universal te lleva a servir a la humanidad. Eres sabio y generoso por naturaleza.",
    11: "Como maestro espiritual, posees intuición elevada e inspiración divina. Tu misión es iluminar a otros.",
    22: "Eres el maestro constructor con visión práctica para crear grandes obras que beneficien a la humanidad.",
    33: "El maestro sanador con compasión infinita. Tu propósito es sanar y elevar la conciencia colectiva.",
  }

  return meanings[number as keyof typeof meanings] || "Número con significado especial en tu camino de vida."
}
