import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F7F8F6] text-[#101828] flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white rounded-2xl border border-[#E4E7EC] p-6 shadow-md text-center">
            <span className="inline-block text-xs font-bold tracking-widest text-[#2563EB] uppercase mb-2">
              Blevon System
            </span>
            <h1 className="text-xl font-bold text-[#101828] mb-2">
              Something went wrong
            </h1>
            <p className="text-xs text-[#667085] mb-4">
              {this.state.error?.message || "An unexpected error occurred while loading this view."}
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#2563EB] px-6 text-xs font-semibold text-white shadow-xs hover:bg-blue-700 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
