"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MysticalOrb } from "@/components/mystical-orb"
import { Sparkles, Star, Moon, Sun } from "lucide-react"

interface NumerologyFormProps {
  onSubmit: (data: { fullName: string; birthDate: string }) => void
  isLoading?: boolean
}

export function NumerologyForm({ onSubmit, isLoading = false }: NumerologyFormProps) {
  const [fullName, setFullName] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [errors, setErrors] = useState<{ fullName?: string; birthDate?: string }>({})

  const validateForm = () => {
    const newErrors: { fullName?: string; birthDate?: string } = {}

    if (!fullName.trim()) {
      newErrors.fullName = "El nombre completo es requerido"
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = "El nombre debe tener al menos 2 caracteres"
    }

    if (!birthDate) {
      newErrors.birthDate = "La fecha de nacimiento es requerida"
    } else {
      const [year, month, day] = birthDate.split("-").map(Number)
      const inputDate = new Date(year, month - 1, day)
      const today = new Date()
      if (inputDate > today) {
        newErrors.birthDate = "La fecha no puede ser futura"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit({ fullName: fullName.trim(), birthDate })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <MysticalOrb
        size={300}
        color="#6B46C1"
        intensity={0.2}
        className="top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"
      />
      <MysticalOrb
        size={250}
        color="#EC4899"
        intensity={0.15}
        className="bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2"
      />
      <MysticalOrb
        size={200}
        color="#8B5CF6"
        intensity={0.1}
        className="top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2"
      />

      <div className="w-full max-w-md space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Star className="h-8 w-8 text-accent animate-pulse" />
            <Sparkles className="h-6 w-6 text-primary" />
            <Moon className="h-7 w-7 text-accent animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Numerología Integral
          </h1>
          <p className="text-muted-foreground text-lg">
            Descubre los secretos de tu alma a través de los números sagrados
          </p>
        </div>

        {/* Form Card */}
        <Card className="backdrop-blur-sm bg-card/80 border-border/50 shadow-2xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Sun className="h-6 w-6 text-accent" />
              Tu Consulta Numerológica
            </CardTitle>
            <CardDescription className="text-base">
              Ingresa tus datos para revelar tu mapa numerológico completo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium">
                  Nombre Completo
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Ingresa tu nombre completo"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value)
                    if (errors.fullName) {
                      setErrors((prev) => ({ ...prev, fullName: undefined }))
                    }
                  }}
                  className={`h-12 text-base ${errors.fullName ? "border-destructive" : ""}`}
                  disabled={isLoading}
                />
                {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthDate" className="text-sm font-medium">
                  Fecha de Nacimiento
                </Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => {
                    setBirthDate(e.target.value)
                    if (errors.birthDate) {
                      setErrors((prev) => ({ ...prev, birthDate: undefined }))
                    }
                  }}
                  className={`h-12 text-base ${errors.birthDate ? "border-destructive" : ""}`}
                  disabled={isLoading}
                />
                {errors.birthDate && <p className="text-sm text-destructive">{errors.birthDate}</p>}
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 animate-spin" />
                    Calculando tu destino...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Revelar Mi Numerología
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Combinando Numerología Pitagórica, Cábala, Tarot y Astrología</p>
        </div>
      </div>
    </div>
  )
}
