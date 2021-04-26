import { ReactNode, PureComponent } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  error: Error | null;
}

class ErrorBoundary extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { error: null };
  }

  componentDidCatch(error: Error, errorInfo: { componentStack: string }): void {
    this.setState({ error });
    // eslint-disable-next-line no-console
    console.log({ errorInfo, error });
  }

  render(): ReactNode {
    const { children } = this.props;
    const { error } = this.state;

    return error ? (
      <div id="error-view">
        <h2>Something went wrong.</h2>
      </div>
    ) : (
      children || null
    );
  }
}

export default ErrorBoundary;
