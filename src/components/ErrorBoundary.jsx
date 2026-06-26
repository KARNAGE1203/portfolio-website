import { Component } from 'react'
import './ErrorBoundary.css'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert">
          <div className="error-boundary__content">
            <p className="error-boundary__title">Something went wrong.</p>
            <p className="error-boundary__text">
              This section failed to load. It may be a temporary issue.
            </p>
            <button
              className="btn btn-outline"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
