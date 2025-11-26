export default function ErrorMessage({ error, onRetry }: {error: {message: string}, onRetry: () => void}) {
    return (
      <div role="alert" style={{ color: 'crimson', padding: 12 }}>
        <div>Something went wrong: {error?.message || 'Unknown error'}</div>
        {onRetry && <button onClick={onRetry} style={{ marginTop: 8 }}>Retry</button>}
      </div>
    );
  }