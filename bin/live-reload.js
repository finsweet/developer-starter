new EventSource(`http://localhost:${SERVE_PORT}/esbuild`).addEventListener('change', () =>
  location.reload()
);
