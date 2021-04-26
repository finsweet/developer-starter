// Import ESBuild
import { buildSync } from 'esbuild'; // eslint-disable-line

/** @type {BuildOptions} */
const defaultSettings = {
  bundle: true,
  minify: true,
  sourcemap: false,
  outdir: 'dist',
  target: 'es6',
};

// Files building
buildSync({
  ...defaultSettings,
  entryPoints: ['src/index.ts'],
});
