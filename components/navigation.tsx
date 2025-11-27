"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, BookOpen, Crown, Star, Sparkles, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/pitagorica", label: "Pitagórica", icon: BookOpen },
    { href: "/cabala", label: "Cábala", icon: Crown },
    { href: "/astrologia", label: "Astrología", icon: Star },
    { href: "/tarot", label: "Tarot", icon: Sparkles },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Crown className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <span className="hidden sm:inline text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Numerología Integral
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={cn("gap-2 text-sm", isActive && "bg-gradient-to-r from-primary to-accent")}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden lg:inline">{item.label}</span>
                  </Button>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border/50">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={cn("w-full justify-start gap-2", isActive && "bg-gradient-to-r from-primary to-accent")}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
