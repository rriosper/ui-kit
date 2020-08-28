import { createCleanComponent } from '#utils'
import styled, { css } from '@xstyled/styled-components'
import { backgroundColor, th } from '@xstyled/system'
import { Button } from 'reakit'

import { shape as shapeVariant, size as sizeVariant } from './variants'

// Disabled styles
const disabledStyle = ({ disabled }) => disabled && 'opacity: 0.5;'

const CleanButton = createCleanComponent(Button, ['size', 'backgroundColor'])

const getColor = (props) => {
  console.log(th('colors.primary'))
  return css`
  background-color: primary.D1;
`
}

export const SButton = styled(CleanButton)`
  padding: xs;
  transition: default;
  opacity: 0.8;
  height: fit-content;
  width: fit-content;
  ${backgroundColor};

  outline: none;
  border: none;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: white;
  user-select: none;


  ${shapeVariant}
  ${disabledStyle}
  ${sizeVariant()}

  :active {
    ${getColor}
  }

  :hover {
    box-shadow: default;
    opacity: 1;
  }
`
