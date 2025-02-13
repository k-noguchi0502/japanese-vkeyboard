import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/virtual-keyboard.tsx',
    output: [
      {
        file: 'dist/virtual-keyboard.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'auto'
      },
      {
        file: 'dist/virtual-keyboard.esm.js',
        format: 'es',
        sourcemap: true,
        exports: 'auto'
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        extensions: ['.css'],
        modules: true,
      }),
    ],
    external: ['react'],
  },
  {
    input: 'src/virtual-keyboard.tsx',
    output: [{ file: 'dist/virtual-keyboard.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
