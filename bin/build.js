// Import ESBuild
const { buildSync, CommonOptions } = require('esbuild'); // eslint-disable-line

/** @type {CommonOptions} */
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
