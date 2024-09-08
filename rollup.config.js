import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts', // Replace with the entry point of your TypeScript files
    output: [
        { file: 'dist/index.js', format: 'cjs' },
        { file: 'dist/index.min.js', format: 'cjs', plugins: [terser()] },
        { file: 'dist/index.esm.js', format: 'esm' }
    ],
    plugins: [
        babel({
            babelHelpers: 'bundled',
            extensions: ['.ts', '.js'],
            presets: ['@babel/preset-typescript'],
        }),
    ],
};