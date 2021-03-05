// Default Settings
const esbuild = require('esbuild'); // eslint-disable-line
const bundle = true;
const minify = true;
const sourcemap = false;
const target = 'es6';
const dirPrefix = 'dist';

// Files building
esbuild.buildSync({
  entryPoints: [`src/index.ts`],
  outfile: `${dirPrefix}/index.js`,
  bundle,
  minify,
  sourcemap,
  target,
});
