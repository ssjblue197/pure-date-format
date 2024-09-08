import typescript from '@rollup/plugin-typescript';

import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts', // Replace with the entry point of your TypeScript files
    output: [
        { file: 'dist/index.js', format: 'esm' },
        { file: 'dist/index.min.js', format: 'cjs', plugins: [terser()] },
        { file: 'dist/index.esm.js', format: 'esm' }
    ],
    plugins: [
        typescript({
            declaration: true, // Ensure it generates declarations
            declarationDir: 'dist', // Declaration output directory
            rootDir: 'src', // Base directory for sources
            exclude: 'node_modules/**',
        }),
    ],
};
