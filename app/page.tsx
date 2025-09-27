"use client"

import { useState } from "react"
import { NumerologyForm } from "@/components/numerology-form"
import { NumerologyResults } from "@/components/numerology-results"
import { calculateNumerology, type NumerologyResult } from "@/lib/numerology-calculations"

interface UserData {
  fullName: string
  birthDate: string
}

export default function HomePage() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [results, setResults] = useState<NumerologyResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFormSubmit = async (data: UserData) => {
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const numerologyResults = calculateNumerology(data.fullName, data.birthDate)

    setUserData(data)
    setResults(numerologyResults)
    setIsLoading(false)
  }

  const handleNewReading = () => {
    setUserData(null)
    setResults(null)
  }

  if (userData && results) {
    return <NumerologyResults results={results} userData={userData} onNewReading={handleNewReading} />
  }

  return <NumerologyForm onSubmit={handleFormSubmit} isLoading={isLoading} />
}
