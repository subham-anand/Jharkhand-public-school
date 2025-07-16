'use client'

import { useEffect } from 'react'

export const useLenis = () => {
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const href = target.getAttribute('href')
        if (href && href !== '#') {
          const element = document.querySelector(href)
          if (element) {
            // Get the Lenis instance from window if available
            if (window.lenis) {
              window.lenis.scrollTo(element as HTMLElement, {
                offset: -100, // Offset for fixed navbar
                duration: 1.5,
              })
            } else {
              // Fallback to native smooth scroll
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])
}

// Utility function to scroll to a specific element
export const scrollToElement = (selector: string, offset: number = -100) => {
  const element = document.querySelector(selector)
  if (element) {
    if (window.lenis) {
      window.lenis.scrollTo(element as HTMLElement, {
        offset,
        duration: 1.5,
      })
    } else {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
}
