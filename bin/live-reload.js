new EventSource(`${SERVE_ORIGIN}/esbuild`).addEventListener('change', () => location.reload());
