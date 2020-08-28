import { css } from '@xstyled/styled-components'
import { variant } from '@xstyled/system'

const shape = () =>
  variant({
    default: 'regular',
    prop: 'shape',
    variants: {
      regular: css`
        border-radius: default;
      `,
      rounded: css`
        border-radius: 100%;
      `
    }
  })

export default shape
