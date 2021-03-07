// Import ESBuild
const { buildSync } = require('esbuild'); // eslint-disable-line

// Default Settings
const bundle = true;
const minify = true;
const sourcemap = false;
const outdir = 'dist';
const target = 'es6';

// Files building
buildSync({
  entryPoints: ['src/index.ts'],
  outdir,
  bundle,
  minify,
  sourcemap,
  target,
});
