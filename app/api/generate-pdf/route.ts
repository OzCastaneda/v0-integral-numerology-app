import { type NextRequest, NextResponse } from "next/server"
import { generateNumerologyPDF } from "@/lib/pdf-generator"

export async function POST(request: NextRequest) {
  try {
    const { results, userData } = await request.json()

    if (!results || !userData) {
      return NextResponse.json({ error: "Missing required data" }, { status: 400 })
    }

    const pdfBlob = await generateNumerologyPDF(results, userData)

    // Convert blob to buffer for response
    const buffer = await pdfBlob.arrayBuffer()

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="reporte-numerologico-${userData.fullName.replace(/\s+/g, "-").toLowerCase()}.pdf"`,
      },
    })
  } catch (error) {
    console.error("Error generating PDF:", error)
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}
