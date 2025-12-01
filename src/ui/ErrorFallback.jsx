function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <h1>Something went wrong 🙁</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}></button>
    </div>
  );
}

export default ErrorFallback;
