import { jsPDF } from "jspdf"
import {
  NUMBER_MEANINGS,
  TAROT_CORRESPONDENCES,
  KABBALAH_CORRESPONDENCES,
  ASTROLOGY_CORRESPONDENCES,
} from "./numerology-constants"
import type { NumerologyResult } from "./numerology-calculations"

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

  // Helper functions
  const addTitle = (text: string, fontSize = 20, color = "#2D1B69") => {
    pdf.setFontSize(fontSize)
    pdf.setTextColor(color)
    pdf.setFont("helvetica", "bold")
    const textWidth = pdf.getTextWidth(text)
    const x = (pageWidth - textWidth) / 2
    pdf.text(text, x, currentY)
    currentY += fontSize * 0.6
  }

  const addSubtitle = (text: string, fontSize = 14, color = "#6B46C1") => {
    pdf.setFontSize(fontSize)
    pdf.setTextColor(color)
    pdf.setFont("helvetica", "bold")
    pdf.text(text, margin, currentY)
    currentY += fontSize * 0.6
  }

  const addText = (text: string, fontSize = 10, color = "#374151") => {
    pdf.setFontSize(fontSize)
    pdf.setTextColor(color)
    pdf.setFont("helvetica", "normal")

    const lines = pdf.splitTextToSize(text, contentWidth)
    pdf.text(lines, margin, currentY)
    currentY += lines.length * fontSize * 0.4
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
    checkPageBreak(60)

    // Section background
    pdf.setFillColor(248, 250, 252)
    pdf.rect(margin - 5, currentY - 5, contentWidth + 10, 50, "F")

    // Number circle
    const circleX = margin + 15
    const circleY = currentY + 15
    pdf.setFillColor(109, 70, 193)
    pdf.circle(circleX, circleY, 12, "F")

    // Number text
    pdf.setFontSize(16)
    pdf.setTextColor(255, 255, 255)
    pdf.setFont("helvetica", "bold")
    const numberText = number.toString()
    const numberWidth = pdf.getTextWidth(numberText)
    pdf.text(numberText, circleX - numberWidth / 2, circleY + 5)

    // Title and description
    pdf.setFontSize(14)
    pdf.setTextColor("#2D1B69")
    pdf.setFont("helvetica", "bold")
    pdf.text(title, circleX + 20, circleY - 5)

    pdf.setFontSize(10)
    pdf.setTextColor("#6B7280")
    pdf.setFont("helvetica", "normal")
    const descLines = pdf.splitTextToSize(description, contentWidth - 40)
    pdf.text(descLines, circleX + 20, circleY + 5)

    currentY += 55

    // Detailed meaning
    const meaning = NUMBER_MEANINGS[number as keyof typeof NUMBER_MEANINGS]
    if (meaning) {
      pdf.setFontSize(12)
      pdf.setTextColor("#2D1B69")
      pdf.setFont("helvetica", "bold")
      pdf.text(`${meaning.title}`, margin, currentY)
      currentY += 8

      pdf.setFontSize(10)
      pdf.setTextColor("#374151")
      pdf.setFont("helvetica", "normal")
      const meaningLines = pdf.splitTextToSize(meaning.description, contentWidth)
      pdf.text(meaningLines, margin, currentY)
      currentY += meaningLines.length * 4

      // Keywords
      addSpace(5)
      pdf.setFontSize(10)
      pdf.setTextColor("#6B46C1")
      pdf.setFont("helvetica", "bold")
      pdf.text("Palabras clave: ", margin, currentY)

      pdf.setTextColor("#374151")
      pdf.setFont("helvetica", "normal")
      const keywordsText = meaning.keywords.join(", ")
      pdf.text(keywordsText, margin + 25, currentY)
      currentY += 8

      // Element
      pdf.setTextColor("#6B46C1")
      pdf.setFont("helvetica", "bold")
      pdf.text("Elemento: ", margin, currentY)

      pdf.setTextColor("#374151")
      pdf.setFont("helvetica", "normal")
      pdf.text(meaning.element, margin + 20, currentY)
      currentY += 8
    }

    addSpace(15)
  }

  const addEsotericSection = () => {
    checkPageBreak(100)

    addSubtitle("Correspondencias Esotéricas", 16, "#2D1B69")
    addSpace(10)

    const numbers = [results.soulPath, results.destiny, results.expression]
    const titles = ["Camino del Alma", "Destino", "Expresión"]

    numbers.forEach((num, index) => {
      checkPageBreak(40)

      const tarot = TAROT_CORRESPONDENCES[num as keyof typeof TAROT_CORRESPONDENCES]
      const kabbalah = KABBALAH_CORRESPONDENCES[num as keyof typeof KABBALAH_CORRESPONDENCES]
      const astrology = ASTROLOGY_CORRESPONDENCES[num as keyof typeof ASTROLOGY_CORRESPONDENCES]

      pdf.setFontSize(12)
      pdf.setTextColor("#6B46C1")
      pdf.setFont("helvetica", "bold")
      pdf.text(`${titles[index]} (${num})`, margin, currentY)
      currentY += 8

      if (tarot) {
        pdf.setFontSize(10)
        pdf.setTextColor("#374151")
        pdf.setFont("helvetica", "normal")
        pdf.text(`Tarot: ${tarot.card} - ${tarot.arcana}`, margin + 5, currentY)
        currentY += 6
      }

      if (kabbalah) {
        pdf.text(`Kabbalah: ${kabbalah.sephira} (${kabbalah.meaning}) - ${kabbalah.path}`, margin + 5, currentY)
        currentY += 6
      }

      if (astrology) {
        pdf.text(`Astrología: ${astrology.planet} en ${astrology.sign} - ${astrology.quality}`, margin + 5, currentY)
        currentY += 6
      }

      addSpace(10)
    })
  }

  // Page 1: Header and Overview
  addTitle("REPORTE NUMEROLÓGICO INTEGRAL", 24, "#2D1B69")
  addSpace(10)

  addTitle(userData.fullName, 18, "#6B46C1")
  addSpace(5)

  const birthDateFormatted = new Date(userData.birthDate).toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  addTitle(`Nacido el ${birthDateFormatted}`, 12, "#9CA3AF")
  addSpace(20)

  // Decorative line
  pdf.setDrawColor(109, 70, 193)
  pdf.setLineWidth(0.5)
  pdf.line(margin, currentY, pageWidth - margin, currentY)
  addSpace(20)

  addText(
    "Este reporte numerológico integral combina la sabiduría ancestral de la numerología pitagórica con las correspondencias esotéricas del Tarot, la Kabbalah y la Astrología para ofrecerte una visión completa de tu mapa energético personal.",
    11,
    "#374151",
  )
  addSpace(20)

  // Main numbers
  addNumberSection(
    "Camino del Alma",
    results.soulPath,
    "Tu propósito de vida fundamental y la lección principal que vienes a aprender en esta encarnación.",
  )
  addNumberSection(
    "Número de Destino",
    results.destiny,
    "Lo que estás destinado a lograr y manifestar en el mundo material.",
  )
  addNumberSection(
    "Número de Suerte",
    results.luck,
    "Tu número de la fortuna y las oportunidades que se alinean naturalmente contigo.",
  )

  // Page 2: Secondary numbers
  pdf.addPage()
  currentY = margin

  addTitle("NÚMEROS SECUNDARIOS", 18, "#2D1B69")
  addSpace(20)

  addNumberSection(
    "Número de Karma",
    results.karma,
    "Las lecciones de vidas pasadas que necesitas integrar y trascender.",
  )
  addNumberSection("Expresión", results.expression, "Tu forma natural de expresarte y comunicarte con el mundo.")
  addNumberSection("Año Personal", results.personalYear, "La energía específica que te acompaña durante este año.")

  // Page 3: Esoteric correspondences
  pdf.addPage()
  currentY = margin

  addTitle("CORRESPONDENCIAS ESOTÉRICAS", 18, "#2D1B69")
  addSpace(20)

  addEsotericSection()

  // Synthesis section
  checkPageBreak(80)
  addSubtitle("Síntesis Numerológica", 16, "#2D1B69")
  addSpace(10)

  const soulPathMeaning = NUMBER_MEANINGS[results.soulPath as keyof typeof NUMBER_MEANINGS]
  const destinyMeaning = NUMBER_MEANINGS[results.destiny as keyof typeof NUMBER_MEANINGS]

  addText(
    `Tu esencia numerológica combina las energías del ${soulPathMeaning?.title} (Camino del Alma) con el ${destinyMeaning?.title} (Destino), creando un perfil único de crecimiento espiritual y manifestación material.`,
    11,
  )
  addSpace(10)

  addText(
    "Esta combinación te invita a desarrollar un equilibrio entre tu búsqueda espiritual interior y tu expresión en el mundo físico, utilizando tus dones naturales para servir tanto a tu evolución personal como al bienestar colectivo.",
    11,
  )

  // Footer
  addSpace(30)
  pdf.setFontSize(8)
  pdf.setTextColor("#9CA3AF")
  pdf.setFont("helvetica", "italic")
  const footerText = `Reporte generado el ${new Date().toLocaleDateString("es-ES")} • Numerología Integral`
  const footerWidth = pdf.getTextWidth(footerText)
  pdf.text(footerText, (pageWidth - footerWidth) / 2, pageHeight - 15)

  return pdf.output("blob")
}
