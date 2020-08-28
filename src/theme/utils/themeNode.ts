import { pipe, split, path } from 'ramda'

import values from '../values'

export const getThemeNode = pipe(split('.'), (key) => path(key, values))
