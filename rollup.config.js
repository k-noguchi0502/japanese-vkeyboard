import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import postcss from "rollup-plugin-postcss"
import dts from "rollup-plugin-dts"
import { createFilter } from "@rollup/pluginutils"

const clientModePlugin = () => {
  const filter = createFilter("**/*.{ts,tsx}")
  return {
    name: "client-mode",
    transform(code, id) {
      if (filter(id) && code.includes("/* @jsx-mode client */")) {
        return {
          code: `"use client";\n${code}`,
          map: { mappings: "" },
        }
      }
    },
  }
}

export default [
  {
    input: "src/VirtualKeyboard.tsx",
    output: [
      {
        file: "dist/virtual-keyboard.js",
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {
        file: "dist/virtual-keyboard.esm.js",
        format: "es",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      clientModePlugin(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extensions: [".css"],
        modules: true,
        extract: true,
        minimize: true,
        sourceMap: true,
      }),
    ],
    external: ["react", "next-themes"],
  },
  {
    input: "src/VirtualKeyboard.tsx",
    output: [{ file: "dist/virtual-keyboard.d.ts", format: "es" }],
    plugins: [dts()],
  },
]

