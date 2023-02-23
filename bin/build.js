/* eslint-disable no-console */
import * as esbuild from 'esbuild';

// Config output
const BUILD_DIRECTORY = 'dist';
const PRODUCTION = process.env.NODE_ENV === 'production';

// Config entrypoint files
const ENTRY_POINTS = ['src/index.ts'];

// Config dev serving
const LIVE_RELOAD = !PRODUCTION;
const SERVE_PORT = 3000;

// Create context
const context = await esbuild.context({
  bundle: true,
  entryPoints: ENTRY_POINTS,
  outdir: BUILD_DIRECTORY,
  minify: PRODUCTION,
  sourcemap: !PRODUCTION,
  target: PRODUCTION ? 'es2019' : 'esnext',
  inject: LIVE_RELOAD ? ['./bin/live-reload.js'] : undefined,
  define: {
    SERVE_PORT: `${SERVE_PORT}`,
  },
});

// Build files in prod
if (PRODUCTION) {
  await context.rebuild();
  context.dispose();
}

// Watch and serve files in dev
else {
  await context.watch();
  await context
    .serve({
      servedir: BUILD_DIRECTORY,
      port: SERVE_PORT,
    })
    .then(async ({ port }) => {
      // Log all served files for easy reference
      console.table(
        ENTRY_POINTS.map((path) => {
          const file = path.replace('src/', '').replace('.ts', '.js');
          const location = `http://localhost:${port}/${file}`;
          const script = `<script defer src="${location}"></script>`;

          return {
            'Built File': file,
            'File Location': location,
            'Script Suggestion': script,
          };
        })
      );
    });
}
