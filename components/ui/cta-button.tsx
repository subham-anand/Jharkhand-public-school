import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  className?: string
  external?: boolean
}

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'md',
  icon,
  className,
  external = false 
}: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 shadow-lg hover:shadow-xl"
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700 focus:ring-blue-300",
    secondary: "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 focus:ring-orange-300", 
    outline: "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-300"
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  }

  const buttonClasses = cn(baseClasses, variants[variant], sizes[size], className)

  if (external) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon && <span>{icon}</span>}
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={buttonClasses}>
      {icon && <span>{icon}</span>}
      {children}
    </Link>
  )
}
