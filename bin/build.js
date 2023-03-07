/* eslint-disable no-console */
import * as esbuild from 'esbuild';
import { readdirSync } from 'fs';
import { join } from 'path';

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
      const buildDirectory = join(process.cwd(), BUILD_DIRECTORY);
      const files = readdirSync(buildDirectory);

      // Log all served files for easy reference
      console.table(
        files
          .map((file) => {
            if (file.endsWith('map')) return;

            const location = `http://localhost:${port}/${file}`;
            const tag = file.endsWith('css')
              ? `<link href="${location}" rel="stylesheet" type="text/css"/>`
              : `<script defer src="${location}"></script>`;

            return {
              'Built File': file,
              'File Location': location,
              'Import Suggestion': tag,
            };
          })
          .filter(Boolean)
      );
    });
}
