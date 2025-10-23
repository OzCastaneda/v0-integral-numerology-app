import { jsPDF } from "jspdf"
import {
  NUMBER_MEANINGS,
  TAROT_CORRESPONDENCES,
  KABBALAH_CORRESPONDENCES,
  ASTROLOGY_CORRESPONDENCES,
} from "./numerology-constants"
import type { NumerologyResult } from "./numerology-calculations"
import { getFormattedBirthDate } from "./numerology-calculations"
import { getZodiacKabbalah } from "./astrology-kabbalah"

interface UserData {
  fullName: string
  birthDate: string
}

export async function generateNumerologyPDF(results: NumerologyResult, userData: UserData): Promise<Blob> {
  const pdf = new jsPDF("p", "mm", "a4")
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const margin = 20
  const contentWidth = pageWidth - margin * 2

  let currentY = margin

  const colors = {
    primary: "#1e3a8a", // Deep blue
    secondary: "#d97706", // Golden
    accent: "#0ea5e9", // Light blue
    text: "#1f2937", // Dark gray
    lightText: "#6b7280", // Medium gray
    background: "#f8fafc", // Light background
  }

  // Helper functions
  const addTitle = (text: string, fontSize = 20, color = colors.primary) => {
    pdf.setFontSize(fontSize)
    pdf.setTextColor(color)
    pdf.setFont("times", "bold") // Using Times as fallback for Crimson Text style
    const textWidth = pdf.getTextWidth(text)
    const x = (pageWidth - textWidth) / 2
    pdf.text(text, x, currentY)
    currentY += fontSize * 0.6
  }

  const addSubtitle = (text: string, fontSize = 14, color = colors.secondary) => {
    pdf.setFontSize(fontSize)
    pdf.setTextColor(color)
    pdf.setFont("times", "bold")
    pdf.text(text, margin, currentY)
    currentY += fontSize * 0.6
  }

  const addText = (text: string, fontSize = 10, color = colors.text) => {
    pdf.setFontSize(fontSize)
    pdf.setTextColor(color)
    pdf.setFont("times", "normal") // Using Times for serif style like Crimson Text
    const lines = pdf.splitTextToSize(text, contentWidth)
    pdf.text(lines, margin, currentY)
    currentY += lines.length * fontSize * 0.45
  }

  const addSpace = (space = 10) => {
    currentY += space
  }

  const checkPageBreak = (neededSpace = 30) => {
    if (currentY + neededSpace > pageHeight - margin) {
      pdf.addPage()
      currentY = margin
      return true
    }
    return false
  }

  const addNumberSection = (title: string, number: number, description: string) => {
    checkPageBreak(80)

    // Section background with golden accent
    pdf.setFillColor(248, 250, 252)
    pdf.rect(margin - 5, currentY - 5, contentWidth + 10, 60, "F")

    // Golden border
    pdf.setDrawColor(217, 119, 6)
    pdf.setLineWidth(0.5)
    pdf.rect(margin - 5, currentY - 5, contentWidth + 10, 60)

    // Number circle with blue background
    const circleX = margin + 15
    const circleY = currentY + 15
    pdf.setFillColor(30, 58, 138)
    pdf.circle(circleX, circleY, 12, "F")

    // Golden ring around number
    pdf.setDrawColor(217, 119, 6)
    pdf.setLineWidth(1)
    pdf.circle(circleX, circleY, 12)

    // Number text
    pdf.setFontSize(16)
    pdf.setTextColor(255, 255, 255)
    pdf.setFont("times", "bold")
    const numberText = number.toString()
    const numberWidth = pdf.getTextWidth(numberText)
    pdf.text(numberText, circleX - numberWidth / 2, circleY + 5)

    // Title and description
    pdf.setFontSize(14)
    pdf.setTextColor(colors.primary)
    pdf.setFont("times", "bold")
    pdf.text(title, circleX + 20, circleY - 5)

    pdf.setFontSize(10)
    pdf.setTextColor(colors.lightText)
    pdf.setFont("times", "normal")
    const descLines = pdf.splitTextToSize(description, contentWidth - 40)
    pdf.text(descLines, circleX + 20, circleY + 5)

    currentY += 65

    const meaning = NUMBER_MEANINGS[number as keyof typeof NUMBER_MEANINGS]
    if (meaning) {
      // Hebrew letter and Sephira
      pdf.setFontSize(11)
      pdf.setTextColor(colors.secondary)
      pdf.setFont("times", "bold")
      pdf.text(`${meaning.hebrewLetter} • ${meaning.sephira}`, margin, currentY)
      currentY += 7

      // Title
      pdf.setFontSize(12)
      pdf.setTextColor(colors.primary)
      pdf.setFont("times", "bold")
      pdf.text(meaning.title, margin, currentY)
      currentY += 8

      // Description
      pdf.setFontSize(10)
      pdf.setTextColor(colors.text)
      pdf.setFont("times", "normal")
      const meaningLines = pdf.splitTextToSize(meaning.description, contentWidth)
      pdf.text(meaningLines, margin, currentY)
      currentY += meaningLines.length * 4.5

      addSpace(5)

      // Spiritual meaning
      pdf.setFontSize(10)
      pdf.setTextColor(colors.secondary)
      pdf.setFont("times", "bold")
      pdf.text("Significado Espiritual:", margin, currentY)
      currentY += 6

      pdf.setTextColor(colors.text)
      pdf.setFont("times", "normal")
      const spiritualLines = pdf.splitTextToSize(meaning.spiritualMeaning, contentWidth)
      pdf.text(spiritualLines, margin, currentY)
      currentY += spiritualLines.length * 4.5

      addSpace(5)

      // Tikun (correction)
      pdf.setTextColor(colors.accent)
      pdf.setFont("times", "bold")
      pdf.text("Tikún (Corrección):", margin, currentY)
      currentY += 6

      pdf.setTextColor(colors.text)
      pdf.setFont("times", "normal")
      const tikunLines = pdf.splitTextToSize(meaning.tikun, contentWidth)
      pdf.text(tikunLines, margin, currentY)
      currentY += tikunLines.length * 4.5

      addSpace(5)

      // Life lesson
      pdf.setTextColor(colors.secondary)
      pdf.setFont("times", "bold")
      pdf.text("Lección de Vida:", margin, currentY)
      currentY += 6

      pdf.setTextColor(colors.text)
      pdf.setFont("times", "normal")
      const lessonLines = pdf.splitTextToSize(meaning.lifeLesson, contentWidth)
      pdf.text(lessonLines, margin, currentY)
      currentY += lessonLines.length * 4.5

      addSpace(8)

      // Keywords with golden background
      pdf.setFillColor(254, 243, 199)
      pdf.rect(margin - 3, currentY - 4, contentWidth + 6, 10, "F")

      pdf.setFontSize(9)
      pdf.setTextColor(colors.secondary)
      pdf.setFont("times", "bold")
      pdf.text("Palabras clave: ", margin, currentY)

      pdf.setTextColor(colors.text)
      pdf.setFont("times", "normal")
      const keywordsText = meaning.keywords.join(" • ")
      pdf.text(keywordsText, margin + 28, currentY)
      currentY += 10
    }

    addSpace(15)
  }

  const addEsotericSection = () => {
    checkPageBreak(100)

    addSubtitle("Correspondencias Esotéricas", 16, colors.primary)
    addSpace(10)

    const numbers = [results.destiny, results.soul, results.personality, results.expression]
    const titles = ["Número de Destino", "Número del Alma", "Número de Personalidad", "Número de Expresión"]

    numbers.forEach((num, index) => {
      checkPageBreak(50)

      const tarot = TAROT_CORRESPONDENCES[num as keyof typeof TAROT_CORRESPONDENCES]
      const kabbalah = KABBALAH_CORRESPONDENCES[num as keyof typeof KABBALAH_CORRESPONDENCES]
      const astrology = ASTROLOGY_CORRESPONDENCES[num as keyof typeof ASTROLOGY_CORRESPONDENCES]

      // Section with blue background
      pdf.setFillColor(239, 246, 255)
      pdf.rect(margin - 3, currentY - 3, contentWidth + 6, 35, "F")

      pdf.setFontSize(12)
      pdf.setTextColor(colors.primary)
      pdf.setFont("times", "bold")
      pdf.text(`${titles[index]} (${num})`, margin, currentY)
      currentY += 8

      if (tarot) {
        pdf.setFontSize(10)
        pdf.setTextColor(colors.secondary)
        pdf.setFont("times", "bold")
        pdf.text("Tarot: ", margin + 5, currentY)
        pdf.setTextColor(colors.text)
        pdf.setFont("times", "normal")
        pdf.text(`${tarot.card} - ${tarot.arcana}`, margin + 20, currentY)
        currentY += 6
      }

      if (kabbalah) {
        pdf.setTextColor(colors.secondary)
        pdf.setFont("times", "bold")
        pdf.text("Kabbalah: ", margin + 5, currentY)
        pdf.setTextColor(colors.text)
        pdf.setFont("times", "normal")
        pdf.text(`${kabbalah.sephira} (${kabbalah.meaning}) - ${kabbalah.path}`, margin + 25, currentY)
        currentY += 6
      }

      if (astrology) {
        pdf.setTextColor(colors.secondary)
        pdf.setFont("times", "bold")
        pdf.text("Astrología: ", margin + 5, currentY)
        pdf.setTextColor(colors.text)
        pdf.setFont("times", "normal")
        pdf.text(`${astrology.planet} en ${astrology.sign} - ${astrology.quality}`, margin + 27, currentY)
        currentY += 6
      }

      currentY += 8
    })
  }

  // Golden decorative line at top
  pdf.setDrawColor(217, 119, 6)
  pdf.setLineWidth(2)
  pdf.line(margin, 10, pageWidth - margin, 10)

  currentY = 25

  addTitle("REPORTE NUMEROLÓGICO INTEGRAL", 24, colors.primary)
  addSpace(5)

  // Subtitle with kabbalah reference
  pdf.setFontSize(10)
  pdf.setTextColor(colors.secondary)
  pdf.setFont("times", "italic")
  const subtitle = "Basado en la Sabiduría de la Cábala y las Letras Hebráicas"
  const subtitleWidth = pdf.getTextWidth(subtitle)
  pdf.text(subtitle, (pageWidth - subtitleWidth) / 2, currentY)
  currentY += 15

  addTitle(userData.fullName, 18, colors.secondary)
  addSpace(5)

  const birthDateFormatted = getFormattedBirthDate(userData.birthDate)
  addTitle(`Nacido el ${birthDateFormatted}`, 12, colors.lightText)
  addSpace(15)

  // Decorative golden line
  pdf.setDrawColor(217, 119, 6)
  pdf.setLineWidth(1)
  pdf.line(margin, currentY, pageWidth - margin, currentY)
  addSpace(3)
  pdf.setDrawColor(30, 58, 138)
  pdf.setLineWidth(0.5)
  pdf.line(margin, currentY, pageWidth - margin, currentY)
  addSpace(15)

  addText(
    "Este reporte numerológico integral combina la sabiduría ancestral de la Cábala con las enseñanzas del Rav Philip S. Berg sobre las letras hebráicas y el Árbol de la Vida. Cada número revela aspectos profundos de tu alma y tu misión en esta encarnación.",
    11,
    colors.text,
  )
  addSpace(20)

  addNumberSection(
    "Número de Destino",
    results.destiny,
    "Tu propósito de vida fundamental calculado desde tu fecha de nacimiento. Representa la misión que tu alma eligió cumplir en esta encarnación.",
  )

  checkPageBreak(100)

  addNumberSection(
    "Número del Alma",
    results.soul,
    "Tus deseos internos y motivaciones más profundas, calculados desde las vocales de tu nombre. Revela lo que tu alma verdaderamente anhela.",
  )

  // Page 2: Secondary numbers
  pdf.addPage()
  currentY = margin

  // Golden decorative line at top
  pdf.setDrawColor(217, 119, 6)
  pdf.setLineWidth(2)
  pdf.line(margin, 10, pageWidth - margin, 10)
  currentY = 25

  addTitle("NÚMEROS COMPLEMENTARIOS", 18, colors.primary)
  addSpace(20)

  addNumberSection(
    "Número de Personalidad",
    results.personality,
    "Cómo te perciben los demás, calculado desde las consonantes de tu nombre. Representa la máscara que muestras al mundo.",
  )

  checkPageBreak(100)

  addNumberSection(
    "Número de Expresión",
    results.expression,
    "Tus talentos y habilidades naturales, calculado desde todas las letras de tu nombre completo. Muestra cómo te manifiestas en el mundo.",
  )

  checkPageBreak(100)

  addNumberSection(
    "Año Personal",
    results.personalYear,
    "La energía específica que te acompaña durante este año. Indica las oportunidades y desafíos del ciclo actual.",
  )

  // Page 3: Esoteric correspondences
  pdf.addPage()
  currentY = margin

  // Golden decorative line at top
  pdf.setDrawColor(217, 119, 6)
  pdf.setLineWidth(2)
  pdf.line(margin, 10, pageWidth - margin, 10)
  currentY = 25

  addTitle("CORRESPONDENCIAS ESOTÉRICAS", 18, colors.primary)
  addSpace(20)

  addEsotericSection()

  checkPageBreak(100)
  addSubtitle("Síntesis Cabalística", 16, colors.primary)
  addSpace(10)

  const destinyMeaning = NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]
  const soulMeaning = NUMBER_MEANINGS[results.soul as keyof typeof NUMBER_MEANINGS]

  // Golden box for synthesis
  pdf.setFillColor(254, 243, 199)
  pdf.rect(margin - 5, currentY - 5, contentWidth + 10, 60, "F")
  pdf.setDrawColor(217, 119, 6)
  pdf.setLineWidth(0.5)
  pdf.rect(margin - 5, currentY - 5, contentWidth + 10, 60)

  addText(
    `Tu esencia numerológica combina las energías de ${destinyMeaning?.hebrewLetter} (${destinyMeaning?.title}) como Número de Destino con ${soulMeaning?.hebrewLetter} (${soulMeaning?.title}) como Número del Alma. Esta combinación única revela el camino de tu Tikún personal.`,
    11,
  )
  addSpace(10)

  addText(
    `Según las enseñanzas cabalísticas, tu alma eligió esta combinación específica de números para trabajar en lecciones particulares. El ${destinyMeaning?.sephira} de tu Destino se une con el ${soulMeaning?.sephira} de tu Alma, creando un puente único entre diferentes aspectos del Árbol de la Vida.`,
    11,
  )

  currentY += 65

  addSpace(10)

  // Recommendations
  checkPageBreak(60)
  addSubtitle("Recomendaciones Espirituales", 14, colors.secondary)
  addSpace(8)

  addText(
    "• Medita sobre las letras hebráicas correspondientes a tus números principales para conectar con su energía.",
    10,
  )
  addSpace(5)
  addText("• Estudia las Sefirot relacionadas con tus números para comprender mejor tu camino espiritual.", 10)
  addSpace(5)
  addText("• Trabaja conscientemente en tu Tikún personal para elevar tu alma y cumplir tu misión.", 10)
  addSpace(5)
  addText("• Recuerda que los números maestros (11, 22, 33, 44) requieren mayor responsabilidad espiritual.", 10)

  // Page 4: Astrology Cabalística
  pdf.addPage()
  currentY = margin

  // Golden decorative line at top
  pdf.setDrawColor(217, 119, 6)
  pdf.setLineWidth(2)
  pdf.line(margin, 10, pageWidth - margin, 10)
  currentY = 25

  addTitle("ASTROLOGÍA CABALÍSTICA", 18, colors.primary)
  addSpace(10)

  const zodiacKabbalah = getZodiacKabbalah(userData.birthDate)

  // Zodiac header
  pdf.setFillColor(239, 246, 255)
  pdf.rect(margin - 5, currentY - 5, contentWidth + 10, 40, "F")
  pdf.setDrawColor(30, 58, 138)
  pdf.setLineWidth(0.5)
  pdf.rect(margin - 5, currentY - 5, contentWidth + 10, 40)

  pdf.setFontSize(16)
  pdf.setTextColor(colors.primary)
  pdf.setFont("times", "bold")
  const signTitle = `${zodiacKabbalah.name} - ${zodiacKabbalah.hebrewMonth}`
  const signTitleWidth = pdf.getTextWidth(signTitle)
  pdf.text(signTitle, (pageWidth - signTitleWidth) / 2, currentY + 5)

  pdf.setFontSize(11)
  pdf.setTextColor(colors.secondary)
  pdf.setFont("times", "normal")
  const signSubtitle = `Mes de ${zodiacKabbalah.monthOf} • ${zodiacKabbalah.hebrewLetter} • ${zodiacKabbalah.planet} (${zodiacKabbalah.planetLetter})`
  const signSubtitleWidth = pdf.getTextWidth(signSubtitle)
  pdf.text(signSubtitle, (pageWidth - signSubtitleWidth) / 2, currentY + 12)

  pdf.setFontSize(10)
  pdf.setTextColor(colors.text)
  const elementText = `Elemento: ${zodiacKabbalah.element}`
  const elementWidth = pdf.getTextWidth(elementText)
  pdf.text(elementText, (pageWidth - elementWidth) / 2, currentY + 19)

  currentY += 45

  // Spiritual Meaning
  addSubtitle("Significado Espiritual Cabalístico", 13, colors.primary)
  addSpace(5)
  addText(zodiacKabbalah.spiritualMeaning, 10)
  addSpace(10)

  // Characteristics
  checkPageBreak(80)
  addSubtitle("Características Principales", 13, colors.primary)
  addSpace(5)

  zodiacKabbalah.characteristics.forEach((char) => {
    checkPageBreak(10)
    pdf.setFontSize(10)
    pdf.setTextColor(colors.text)
    pdf.setFont("times", "normal")
    pdf.text("• " + char, margin + 5, currentY)
    currentY += 6
  })

  addSpace(10)

  // Tikun
  checkPageBreak(80)
  addSubtitle("Tikún - Tu Corrección Espiritual", 13, colors.primary)
  addSpace(5)

  pdf.setFillColor(254, 243, 199)
  pdf.rect(margin - 5, currentY - 5, contentWidth + 10, 60, "F")
  pdf.setDrawColor(217, 119, 6)
  pdf.setLineWidth(0.5)
  pdf.rect(margin - 5, currentY - 5, contentWidth + 10, 60)

  addText(zodiacKabbalah.correction, 10)
  addSpace(10)

  pdf.setFontSize(10)
  pdf.setTextColor(colors.accent)
  pdf.setFont("times", "bold")
  pdf.text("Vida Pasada (Nodo Sur):", margin, currentY)
  currentY += 6

  pdf.setTextColor(colors.text)
  pdf.setFont("times", "normal")
  const pastLifeLines = pdf.splitTextToSize(zodiacKabbalah.tikun.pastLife, contentWidth)
  pdf.text(pastLifeLines, margin, currentY)
  currentY += pastLifeLines.length * 4.5 + 5

  pdf.setTextColor(colors.primary)
  pdf.setFont("times", "bold")
  pdf.text("Lección Actual (Nodo Norte):", margin, currentY)
  currentY += 6

  pdf.setTextColor(colors.text)
  pdf.setFont("times", "normal")
  const currentLessonLines = pdf.splitTextToSize(zodiacKabbalah.tikun.currentLesson, contentWidth)
  pdf.text(currentLessonLines, margin, currentY)
  currentY += currentLessonLines.length * 4.5 + 10

  // Monthly Strategy
  checkPageBreak(40)
  addSubtitle("Estrategia Mensual Universal", 13, colors.primary)
  addSpace(5)

  pdf.setFillColor(239, 246, 255)
  pdf.rect(margin - 5, currentY - 5, contentWidth + 10, 25, "F")

  addText(zodiacKabbalah.monthlyStrategy, 10)
  currentY += 30

  // Integration with Numerology
  checkPageBreak(60)
  addSubtitle("Integración Astro-Numerológica", 13, colors.primary)
  addSpace(5)

  const destinyMeaningAstro = NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]
  const expressionMeaningAstro = NUMBER_MEANINGS[results.expression as keyof typeof NUMBER_MEANINGS]

  addText(
    `Tu Número de Destino ${results.destiny} (${destinyMeaningAstro?.title}) resuena con la energía ${zodiacKabbalah.element.toLowerCase()} de ${zodiacKabbalah.name}. La letra hebrea ${zodiacKabbalah.hebrewLetter} amplifica tu capacidad para manifestar ${destinyMeaningAstro?.keywords[0]?.toLowerCase()}.`,
    10,
  )
  addSpace(8)

  addText(
    `Tu Número de Expresión ${results.expression} se alinea con las cualidades de ${zodiacKabbalah.name}, potenciando tu capacidad para expresar ${expressionMeaningAstro?.keywords[1]?.toLowerCase()}. El planeta ${zodiacKabbalah.planet} (${zodiacKabbalah.planetLetter}) facilita esta manifestación.`,
    10,
  )

  addSpace(15)

  // Kabbalistic Message
  pdf.setFillColor(254, 243, 199)
  pdf.rect(margin - 5, currentY - 5, contentWidth + 10, 50, "F")
  pdf.setDrawColor(217, 119, 6)
  pdf.setLineWidth(1)
  pdf.rect(margin - 5, currentY - 5, contentWidth + 10, 50)

  pdf.setFontSize(11)
  pdf.setTextColor(colors.primary)
  pdf.setFont("times", "bold")
  const messageTitle = `Mensaje Cabalístico para ${zodiacKabbalah.name}`
  const messageTitleWidth = pdf.getTextWidth(messageTitle)
  pdf.text(messageTitle, (pageWidth - messageTitleWidth) / 2, currentY + 5)
  currentY += 12

  pdf.setFontSize(9)
  pdf.setTextColor(colors.text)
  pdf.setFont("times", "italic")
  const kabbalisticMessage = `Naciste en el mes de ${zodiacKabbalah.hebrewMonth}, el mes de ${zodiacKabbalah.monthOf}. La letra hebrea ${zodiacKabbalah.hebrewLetter} te otorga poderes únicos, pero también responsabilidades específicas. Tu Tikún es claro: ${zodiacKabbalah.correction.split(".")[0]}. Recuerda que las estrellas inclinan pero no obligan - tienes libre albedrío para superar tus limitaciones y cumplir tu propósito divino.`
  const messageLines = pdf.splitTextToSize(kabbalisticMessage, contentWidth - 10)
  pdf.text(messageLines, margin + 5, currentY)
  currentY += messageLines.length * 4 + 8

  pdf.setFontSize(8)
  pdf.setTextColor(colors.accent)
  pdf.setFont("times", "italic")
  const attribution = "- Basado en las enseñanzas del Rav Philip S. Berg"
  const attributionWidth = pdf.getTextWidth(attribution)
  pdf.text(attribution, (pageWidth - attributionWidth) / 2, currentY)

  // Footer with golden decoration
  addSpace(20)
  pdf.setDrawColor(217, 119, 6)
  pdf.setLineWidth(1)
  pdf.line(margin, pageHeight - 25, pageWidth - margin, pageHeight - 25)

  pdf.setFontSize(8)
  pdf.setTextColor(colors.lightText)
  pdf.setFont("times", "italic")
  const footerText = `Reporte generado el ${new Date().toLocaleDateString("es-ES")} • Numerología Cabalística Integral`
  const footerWidth = pdf.getTextWidth(footerText)
  pdf.text(footerText, (pageWidth - footerWidth) / 2, pageHeight - 15)

  pdf.setFontSize(7)
  const creditText = "Desarrollado por Oswaldo Castañeda • Todos los derechos reservados"
  const creditWidth = pdf.getTextWidth(creditText)
  pdf.text(creditText, (pageWidth - creditWidth) / 2, pageHeight - 10)

  return pdf.output("blob")
}
