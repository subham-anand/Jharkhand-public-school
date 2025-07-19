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
    // Only initialize on client side
    if (typeof window === 'undefined') return;

    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    try {
      // Initialize Lenis with minimal configuration
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      // Expose lenis to window for external access
      window.lenis = lenis;

      // Animation frame function
      function raf(time: number) {
        if (lenis) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
      }

      // Start the animation frame
      rafId = requestAnimationFrame(raf);

    } catch (error) {
      console.error('Error initializing Lenis:', error);
      // Fallback: clean up any partial initialization
      if (lenis) {
        try {
          lenis.destroy();
        } catch (destroyError) {
          console.error('Error destroying Lenis:', destroyError);
        }
      }
    }

    // Cleanup function
    return () => {
      try {
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
        if (lenis) {
          lenis.destroy();
        }
        if (window.lenis) {
          delete window.lenis;
        }
      } catch (error) {
        console.error('Error cleaning up Lenis:', error);
      }
    };
  }, [])

  return <>{children}</>
}
