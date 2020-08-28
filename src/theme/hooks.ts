import { useTheme } from '@xstyled/styled-components'
import { pipe, split, path } from 'ramda'

export const useThemeNode = pipe(split('.'), (key) =>
  path(key, useTheme())
)
