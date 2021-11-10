import localResolve from 'rollup-plugin-local-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import del from 'rollup-plugin-delete'

import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        localResolve(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
        }),
        commonjs(),
        postcss({
            extract: false,
            minimize: true,
            plugins: [autoprefixer()],
            use: ['sass'],
        }),
        del({ targets: ['dist/*'] }),
        terser(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
}
