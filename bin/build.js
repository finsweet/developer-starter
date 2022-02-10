/* eslint-disable no-console */
import esbuild from 'esbuild';
import http from 'http';
import handler from 'serve-handler';

const production = process.env.NODE_ENV === 'production';

/**
 * Default Settings
 * @type {esbuild.BuildOptions}
 */
const defaultSettings = {
  bundle: true,
  outdir: 'dist',
  minify: production,
  sourcemap: !production,
  target: production ? 'es6' : 'esnext',
  watch: !production && {
    onRebuild(error, result) {
      if (error) console.error('Build fail:', error);
      else console.log('Build success:', result);
    },
  },
};

// Files building
esbuild.build({
  ...defaultSettings,
  entryPoints: ['src/index.ts'],
});

// Files serving
if (!production) {
  const server = http.createServer(handler);
  server.listen(3000, () => console.log('Serving at http://localhost:3000'));
}
