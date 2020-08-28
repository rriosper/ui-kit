import { assocPath, evolve, is, map, pipe, defaultTo } from 'ramda'

import generateColorPalette from './generateColorPalette'

const storagedPalettes = new Map()

const processColors = (input) => {
  if (is(Object, input)) {
    return map(processColors, input)
  }

  const storagedPalette = storagedPalettes.get(input)

  if (storagedPalette) {
    return storagedPalette
  }

  const palette = generateColorPalette(input)
  storagedPalettes.set(input, palette)

  return palette
}

const colorTransformer = (value) => {
  if (is(Object, value)) {
    return value.root
  }
  return value
}

const processTheme = pipe(
  defaultTo({
    colors: {}
  }),
  evolve({
    colors: processColors
  }),
  assocPath(['transformers', 'color'], colorTransformer)
)

export default processTheme
