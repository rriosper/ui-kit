import { darken, lighten, rgba } from 'polished'
import { mergeDeepLeft } from 'ramda'

function alpha (intensity, color) {
  return rgba(color, intensity)
}

const PALETTE_MODIFIERS = [
  {
    iterations: 9,
    key: 'A',
    fn: alpha
  },
  {
    iterations: 6,
    key: 'D',
    fn: darken
  },
  {
    iterations: 6,
    key: 'L',
    fn: lighten
  }
]

const arrayOf = (n: number): number[] => {
  const arr: number[] = []
  for (let i = 0; i < n; i++) {
    arr.push(i + 1)
  }
  return arr
}

const generateVariation = ({ fn, key, iterations }, color) => {
  const arr: number[] = arrayOf(iterations)
  return arr.reduce((acc, intensity) => {
    const procesedKey = `${key}${intensity + 1}`
    const processedIntensity = Number(`0.${intensity + 1}`)
    acc[procesedKey] = fn(processedIntensity, color)
    return acc
  }, {})
}

const generateColorPalette = (color) => {
  if (!color) {
    throw new Error('It is neccesary indicate a color')
  }

  const palette = PALETTE_MODIFIERS.reduce(
    (acc, modifier) => mergeDeepLeft(generateVariation(modifier, color), acc),
    { root: color }
  )

  return palette
}

export default generateColorPalette
