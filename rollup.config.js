import { join } from 'path'
import { plugin as analyze } from 'rollup-plugin-analyzer'
import cleanup from 'rollup-plugin-cleanup'
import progress from 'rollup-plugin-progress'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

const joinRoot = (...x) => join(__dirname, ...x)
const joinBuild = (...x) => joinRoot('build', ...x)

const paths = {
  input: joinRoot('src', 'index.ts'),
  output: {
    cjs: joinBuild('lib.js'),
    es: joinBuild('lib.es.js')
  }
}

export default {
  input: paths.input,
  output: [
    {
      file: paths.output.cjs,
      format: 'cjs'
    },
    {
      file: paths.output.es,
      format: 'es'
    }
  ],
  external: [
    ...(Object.keys(pkg.dependencies) | {}),
    ...(Object.keys(pkg.peerDependencies) | {})
  ],
  plugins: [
    typescript(),
    progress({
      clearLine: false
    }),
    cleanup(),
    analyze()
  ]
}
