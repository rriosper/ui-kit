import { css } from '@xstyled/styled-components'
import { th, variant } from '@xstyled/system'

import { DEFAULT_BUTTON_STYLES } from '#constants'

const size = () =>
  variant({
    default: DEFAULT_BUTTON_STYLES.size,
    prop: 'size',
    variants: {
      small: css`
        min-height: md;
        min-width: md;
        font-size: sm;

        svg {
          width: calc(${th('sizes.xs')} + 4px);
          height: calc(${th('sizes.xs')} + 4px);
        }
      `,
      medium: css`
        min-height: lg;
        min-width: lg;
        font-size: md;

        svg {
          width: sm;
          height: sm;
        }
      `,
      big: css`
        min-height: xl;
        min-width: xl;
        font-size: xl;

        svg {
          width: lg;
          height: lg;
        }
      `
    }
  })

export default size
