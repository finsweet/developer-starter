// Import ESBuild
import esbuild from 'esbuild';

/**
 * Default Settings
 * @type {esbuild.BuildOptions}
 */
const defaultSettings = {
  bundle: true,
  minify: true,
  sourcemap: false,
  outdir: 'dist',
  target: 'es6',
};

// Files building
esbuild.buildSync({
  ...defaultSettings,
  entryPoints: ['src/index.ts'],
});
