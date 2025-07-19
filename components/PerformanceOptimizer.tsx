'use client'

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link')
      fontLink.rel = 'preload'
      fontLink.href = '/fonts/Inter-Regular.woff2'
      fontLink.as = 'font'
      fontLink.type = 'font/woff2'
      fontLink.crossOrigin = 'anonymous'
      document.head.appendChild(fontLink)

      // Preload critical images
      const heroImageLink = document.createElement('link')
      heroImageLink.rel = 'preload'
      heroImageLink.href = '/hero_img.png'
      heroImageLink.as = 'image'
      document.head.appendChild(heroImageLink)

      // Preload API endpoints
      const apiLinks = [
        '/api/hero-carousel',
        '/api/teachers'
      ]
      
      apiLinks.forEach(url => {
        fetch(url, { method: 'HEAD' }).catch(() => {
          // Silently handle preload failures
        })
      })
    }

    // Remove unused CSS
    const removeUnusedCSS = () => {
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]') as NodeListOf<HTMLLinkElement>
      stylesheets.forEach(sheet => {
        if (sheet.href && sheet.href.includes('unused')) {
          sheet.remove()
        }
      })
    }

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]') as NodeListOf<HTMLScriptElement>
      scripts.forEach(script => {
        if (script.src.includes('analytics') || script.src.includes('gtag')) {
          script.defer = true
        }
      })
    }

    // Implement resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://vitals.vercel-insights.com'
      ]

      domains.forEach(domain => {
        const link = document.createElement('link')
        link.rel = 'dns-prefetch'
        link.href = domain
        document.head.appendChild(link)
      })
    }

    // Execute optimizations
    const timeoutId = setTimeout(() => {
      preloadResources()
      removeUnusedCSS()
      optimizeThirdPartyScripts()
      addResourceHints()
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [])

  return null
}
