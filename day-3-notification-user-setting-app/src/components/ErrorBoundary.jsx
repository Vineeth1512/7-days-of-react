import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
    });

    this.props.onRetry();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-2xl bg-red-50 p-6 text-center shadow-lg">
          <div className="text-4xl"></div>

          <h2 className="mt-3 text-2xl font-bold text-red-700">
            Something went wrong!
          </h2>

          <p className="mt-2 text-red-600">
            The component crashed, but the rest of the app is safe.
          </p>

          <button
            onClick={this.handleRetry}
            className="mt-5 rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
