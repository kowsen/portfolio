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
import fg from 'fast-glob';

import { parsePosts } from './scripts/parse-posts';
import { parseDescriptions } from './scripts/parse-descriptions';
import { parseProjects } from './scripts/parse-projects';
import { generateRss } from './scripts/generate-rss';

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

// Runs the rollup replace plugin, while also watching the passed
// in files in the transform hook so we re-run replace.
function replaceAndWatch(replaceOptions, toWatch) {
  const base = replace(replaceOptions);

  return {
    name: 'replace-and-watch',
    renderChunk: base.renderChunk,
    async transform() {
      const files = await fg(toWatch);
      for (let file of files) {
        this.addWatchFile(file);
      }
      return base.transform(...arguments);
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
      targets: production
        ? ['./public/posts', './public/build', './public/assets']
        : [],
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

    replaceAndWatch(
      {
        __posts: () => JSON.stringify(parsePosts()),
        __descriptions: () => JSON.stringify(parseDescriptions()),
        __projects: () => JSON.stringify(parseProjects()),
      },
      'data/**/*'
    ),

    copy({
      targets: [
        { src: 'data/posts/**/*', dest: 'public/posts' },
        { src: 'data/assets', dest: 'public/build' },
      ],
    }),

    {
      name: 'generate-rss',
      buildEnd() {
        generateRss(parsePosts());
      },
    },

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
