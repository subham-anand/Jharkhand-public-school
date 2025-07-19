'use client'

import { useEffect } from 'react'

export const useLenis = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const handleAnchorClick = (e: Event) => {
      try {
        const target = e.target as HTMLAnchorElement;
        
        if (!target || target.tagName !== 'A') return;
        
        const href = target.getAttribute('href');
        if (!href || !href.startsWith('#') || href === '#') return;

        e.preventDefault();
        
        const element = document.querySelector(href);
        if (!element) return;

        // Get the Lenis instance from window if available
        if (window.lenis && typeof window.lenis.scrollTo === 'function') {
          try {
            window.lenis.scrollTo(element as HTMLElement, {
              offset: -100, // Offset for fixed navbar
              duration: 1.5,
            });
          } catch (lenisError) {
            console.warn('Lenis scroll failed, using fallback:', lenisError);
            // Fallback to native smooth scroll
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        } else {
          // Fallback to native smooth scroll
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      } catch (error) {
        console.error('Error in anchor click handler:', error);
      }
    };

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
