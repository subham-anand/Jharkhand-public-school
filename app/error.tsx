'use client'

import React from 'react'
import { IconRefresh, IconHome, IconAlertTriangle } from '@tabler/icons-react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  React.useEffect(() => {
    // Log the error to console and potentially to an error reporting service
    console.error('Application Error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <IconAlertTriangle className="w-10 h-10 text-red-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Oops! Something went wrong
        </h1>
        
        <p className="text-gray-600 mb-6">
          We&apos;re sorry, but something unexpected happened. Don&apos;t worry, our team has been notified.
        </p>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="text-left bg-red-50 rounded-lg p-4 mb-6">
            <summary className="font-semibold text-red-800 cursor-pointer">
              Error Details (Development)
            </summary>
            <pre className="mt-2 text-sm text-red-700 whitespace-pre-wrap">
              {error.message}
            </pre>
          </details>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <IconRefresh className="w-4 h-4" />
            Try Again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="flex items-center justify-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <IconHome className="w-4 h-4" />
            Go Home
          </button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            If this problem persists, please contact us at{' '}
            <a 
              href="mailto:contact@jpsbarharwa.in" 
              className="text-blue-600 hover:underline"
            >
              contact@jpsbarharwa.in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
