import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { name } from './package.json'

const file = type => `dist/${name}.${type}.js`
const overrides= {
  compilerOptions: { declaration: true },
  exclude: ['src/main.ts', 'src/App.vue', 'tests']
}
export { name, file }
const baseConfig = {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vue({preprocessStyles: true}),
    css({ output: 'bundle.css' })
  ],
  external: ['vue']
}
export default baseConfig