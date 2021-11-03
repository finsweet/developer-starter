// Import ESBuild
import esbuild from 'esbuild';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const production = process.env.NODE_ENV === 'production';

/**
 * Default Settings
 * @type {esbuild.BuildOptions}
 */
const defaultSettings = {
  bundle: true,
  minify: production,
  sourcemap: false,
  outdir: production ? 'dist' : process.env.CUSTOM_BUILD_DIRECTORY || '',
  target: production ? 'es6' : 'esnext',
};

// Files building
esbuild.buildSync({
  ...defaultSettings,
  entryPoints: ['src/index.ts'],
});
