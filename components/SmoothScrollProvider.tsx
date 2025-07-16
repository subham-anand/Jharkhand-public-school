'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'

interface SmoothScrollProviderProps {
  children: ReactNode
}

// Type declaration for Lenis instance on window
declare global {
  interface Window {
    lenis?: Lenis
  }
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Initialize Lenis with minimal configuration
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    // Expose lenis to window for external access
    window.lenis = lenis

    // Animation frame function
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    // Start the animation frame
    requestAnimationFrame(raf)

    // Cleanup function
    return () => {
      lenis.destroy()
      delete window.lenis
    }
  }, [])

  return <>{children}</>
}
