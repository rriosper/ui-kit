import React from 'react'

import { DEFAULT_BUTTON_STYLES } from '#constants'
import { SButton } from './styles'

interface ButtonProps {
  className?: string;
  size?: string;
  type?: string;
  backgroundColor?: string;
  shape?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fill?: string;
  children?: React.ReactNode | React.ReactNode[];
}

/**
 *
 *  Regular button using the logic of Reakit button
 *  {@link https://reakit.io/docs/button/}
 */

class Button extends React.PureComponent<ButtonProps> {
  render () {
    const {
      shape,
      backgroundColor = DEFAULT_BUTTON_STYLES.backgroundColor,
      disabled,
      children,
      className,
      ...props
    } = this.props
    return (
      <SButton
        className={className}
        backgroundColor={backgroundColor}
        shape={shape}
        disabled={disabled}
        {...props}
      >
        {children}
      </SButton>
    )
  }
}

export default Button
