import { Sparkles, Heart, Infinity as Trinity, Hexagon, Star, Lightbulb, Infinity, Wand2, Crown } from "lucide-react"

export const getNumberIcon = (number: number) => {
  const iconClass = "w-5 h-5"

  switch (number) {
    case 1:
      return <Sparkles className={iconClass} />
    case 2:
      return <Heart className={iconClass} />
    case 3:
      return <Trinity className={iconClass} />
    case 4:
      return <Hexagon className={iconClass} />
    case 5:
      return <Star className={iconClass} />
    case 6:
      return <Lightbulb className={iconClass} />
    case 7:
      return <Infinity className={iconClass} />
    case 8:
      return <Wand2 className={iconClass} />
    case 9:
      return <Crown className={iconClass} />
    case 11:
      return <Star className={`${iconClass} text-yellow-500`} />
    case 22:
      return <Crown className={`${iconClass} text-purple-500`} />
    case 33:
      return <Sparkles className={`${iconClass} text-pink-500`} />
    case 44:
      return <Infinity className={`${iconClass} text-indigo-500`} />
    default:
      return <Sparkles className={iconClass} />
  }
}
