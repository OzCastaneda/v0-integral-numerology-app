import type React from "react"
import { Sun, Moon, Star, Sparkles, Crown, Heart, Wand2, Infinity } from "lucide-react"

export const getNumberIcon = (number: number) => {
  const iconProps = { className: "w-5 h-5 text-primary" }

  const icons: Record<number, React.ReactNode> = {
    1: <Sun {...iconProps} />,
    2: <Moon {...iconProps} />,
    3: <Sparkles {...iconProps} />,
    4: <Square {...iconProps} />,
    5: <Wand2 {...iconProps} />,
    6: <Heart {...iconProps} />,
    7: <Star {...iconProps} />,
    8: <Crown {...iconProps} />,
    9: <Infinity {...iconProps} />,
    11: <Crown {...iconProps} />,
    22: <Crown {...iconProps} />,
    33: <Heart {...iconProps} />,
    44: <Square {...iconProps} />,
  }

  return icons[number] || <Sparkles {...iconProps} />
}

// Square icon component for consistency with lucide-react
const Square = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
  </svg>
)
