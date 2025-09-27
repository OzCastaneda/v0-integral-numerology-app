"use client"

import { useEffect, useRef } from "react"

interface MysticalOrbProps {
  size?: number
  color?: string
  intensity?: number
  className?: string
}

export function MysticalOrb({ size = 200, color = "#6B46C1", intensity = 0.3, className = "" }: MysticalOrbProps) {
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const orb = orbRef.current
    if (!orb) return

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01

      const pulse = Math.sin(time) * 0.2 + 0.8
      const rotate = time * 20

      orb.style.transform = `scale(${pulse}) rotate(${rotate}deg)`
      orb.style.opacity = (intensity * pulse).toString()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [intensity])

  return (
    <div
      ref={orbRef}
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}40 0%, ${color}20 30%, transparent 70%)`,
        borderRadius: "50%",
        filter: "blur(1px)",
      }}
    />
  )
}
