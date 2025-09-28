"use client"

import { cn } from "@/lib/utils"

interface SacredSymbolsProps {
  className?: string
  size?: number
  color?: string
  animate?: boolean
}

export function MetatronsCube({ className, size = 100, color = "#FFD700", animate = true }: SacredSymbolsProps) {
  return (
    <div className={cn("absolute pointer-events-none", animate && "sacred-pulse", className)}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
          {/* Outer hexagon */}
          <path d="M100 20L150 50L150 110L100 140L50 110L50 50L100 20Z" stroke={color} strokeWidth="1" fill="none" />
          {/* Inner hexagon */}
          <path d="M100 40L130 60L130 100L100 120L70 100L70 60L100 40Z" stroke={color} strokeWidth="1" fill="none" />
          {/* Center circle */}
          <circle cx="100" cy="80" r="15" stroke={color} strokeWidth="1" fill="none" />
          {/* Connecting lines */}
          <line x1="100" y1="20" x2="100" y2="40" stroke={color} strokeWidth="1" />
          <line x1="150" y1="50" x2="130" y2="60" stroke={color} strokeWidth="1" />
          <line x1="150" y1="110" x2="130" y2="100" stroke={color} strokeWidth="1" />
          <line x1="100" y1="140" x2="100" y2="120" stroke={color} strokeWidth="1" />
          <line x1="50" y1="110" x2="70" y2="100" stroke={color} strokeWidth="1" />
          <line x1="50" y1="50" x2="70" y2="60" stroke={color} strokeWidth="1" />
          {/* Sacred geometry lines */}
          <line x1="70" y1="60" x2="130" y2="100" stroke={color} strokeWidth="0.5" opacity="0.7" />
          <line x1="130" y1="60" x2="70" y2="100" stroke={color} strokeWidth="0.5" opacity="0.7" />
          <line x1="100" y1="40" x2="100" y2="120" stroke={color} strokeWidth="0.5" opacity="0.7" />
        </g>
      </svg>
    </div>
  )
}

export function SacredStar({ className, size = 60, color = "#4169E1", animate = true }: SacredSymbolsProps) {
  return (
    <div className={cn("absolute pointer-events-none", animate && "sacred-pulse", className)}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.8">
          <path
            d="M50 10L61.8 38.2L90 38.2L68.1 55.9L79.9 84.1L50 66.4L20.1 84.1L31.9 55.9L10 38.2L38.2 38.2L50 10Z"
            stroke={color}
            strokeWidth="1.5"
            fill={`${color}20`}
          />
          <circle cx="50" cy="50" r="3" fill={color} />
        </g>
      </svg>
    </div>
  )
}

export function FlowerOfLife({ className, size = 80, color = "#FFD700", animate = true }: SacredSymbolsProps) {
  return (
    <div className={cn("absolute pointer-events-none", animate && "sacred-pulse", className)}>
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          {/* Center circle */}
          <circle cx="60" cy="60" r="20" stroke={color} strokeWidth="1" fill="none" />
          {/* Surrounding circles */}
          <circle cx="60" cy="25" r="20" stroke={color} strokeWidth="1" fill="none" />
          <circle cx="90" cy="42.5" r="20" stroke={color} strokeWidth="1" fill="none" />
          <circle cx="90" cy="77.5" r="20" stroke={color} strokeWidth="1" fill="none" />
          <circle cx="60" cy="95" r="20" stroke={color} strokeWidth="1" fill="none" />
          <circle cx="30" cy="77.5" r="20" stroke={color} strokeWidth="1" fill="none" />
          <circle cx="30" cy="42.5" r="20" stroke={color} strokeWidth="1" fill="none" />
        </g>
      </svg>
    </div>
  )
}
