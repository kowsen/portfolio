import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';
import cleaner from 'rollup-plugin-cleaner';
import { spawn } from 'child_process';
import scss from 'rollup-plugin-scss';

import { parsePosts } from './parse-posts';
import { DESCRIPTIONS } from './descriptions';
import { PROJECTS } from './projects';

// eslint-disable-next-line no-undef
const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = spawn('npm', ['run', 'start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true,
      });

      // eslint-disable-next-line no-undef
      process.on('SIGTERM', toExit);
      // eslint-disable-next-line no-undef
      process.on('exit', toExit);
    },
  };
}

export default {
  input: 'src/main.js',
  output: {
    sourcemap: !production,
    format: 'es',
    name: 'app',
    dir: 'public/build',
  },
  plugins: [
    cleaner({
      targets: production ? ['./public/posts', './public/build'] : [],
    }),
    replace({
      __posts: JSON.stringify(parsePosts()),
      __descriptions: JSON.stringify(DESCRIPTIONS),
      __projects: JSON.stringify(PROJECTS),
    }),
    svelte({
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
      },
    }),
    scss({
      output: 'public/build/bundle.css',
      outputStyle: 'compressed',
      watch: 'src/styles',
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),

    copy({
      targets: [{ src: 'posts/**/*', dest: 'public/posts' }],
    }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
