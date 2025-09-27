"use client"

import { useEffect, useState } from "react"

const MYSTICAL_SYMBOLS = ["✦", "✧", "✩", "✪", "✫", "✬", "✭", "✮", "✯", "✰", "⟐", "⟡", "⟢", "⟣"]

interface FloatingSymbol {
  id: number
  symbol: string
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  rotation: number
  rotationSpeed: number
}

export function FloatingSymbols() {
  const [symbols, setSymbols] = useState<FloatingSymbol[]>([])

  useEffect(() => {
    const createSymbols = () => {
      const newSymbols: FloatingSymbol[] = []

      for (let i = 0; i < 12; i++) {
        newSymbols.push({
          id: i,
          symbol: MYSTICAL_SYMBOLS[Math.floor(Math.random() * MYSTICAL_SYMBOLS.length)],
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 20 + 15,
          opacity: Math.random() * 0.3 + 0.1,
          speed: Math.random() * 0.5 + 0.2,
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 2 - 1,
        })
      }

      setSymbols(newSymbols)
    }

    createSymbols()

    const interval = setInterval(() => {
      setSymbols((prevSymbols) =>
        prevSymbols
          .map((symbol) => ({
            ...symbol,
            y: symbol.y - symbol.speed,
            rotation: symbol.rotation + symbol.rotationSpeed,
            x: symbol.x + Math.sin(symbol.y * 0.01) * 0.5,
          }))
          .filter((symbol) => symbol.y > -50)
          .concat(
            // Add new symbols at the bottom
            (symbol) =>
              symbol.y < -50
                ? {
                    ...symbol,
                    y: window.innerHeight + 50,
                    x: Math.random() * window.innerWidth,
                  }
                : symbol,
          ),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {symbols.map((symbol) => (
        <div
          key={symbol.id}
          className="absolute text-primary/30 font-bold select-none"
          style={{
            left: symbol.x,
            top: symbol.y,
            fontSize: symbol.size,
            opacity: symbol.opacity,
            transform: `rotate(${symbol.rotation}deg)`,
            transition: "all 0.05s linear",
          }}
        >
          {symbol.symbol}
        </div>
      ))}
    </div>
  )
}
