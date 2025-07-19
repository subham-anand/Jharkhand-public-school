'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { IconAlertTriangle, IconRefresh } from '@tabler/icons-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    // You can also log to an error reporting service here
    // logErrorToService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconAlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Something went wrong
            </h2>
            
            <p className="text-gray-600 mb-6">
              Don&apos;t worry, this has been reported to our team.
            </p>
            
            <button
              onClick={() => this.setState({ hasError: false })}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mx-auto"
            >
              <IconRefresh className="w-4 h-4" />
              Try Again
            </button>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left bg-red-50 rounded-lg p-4">
                <summary className="font-semibold text-red-800 cursor-pointer">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-sm text-red-700 whitespace-pre-wrap">
                  {this.state.error.message}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
