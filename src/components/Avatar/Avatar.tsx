import React, { useMemo } from 'react'

import { getInitialFromName } from '#utils'

import { SAvatar } from './styles'

type AvatarProps = {
  name?: string;
  image?: string;
  backgroundColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

// Avatar component.
const Avatar: React.FC<AvatarProps> = ({ name, image, ...rest }: AvatarProps) => {
  const initials = useMemo(() => getInitialFromName(name || 'O O'), [name])
  return (
    <SAvatar as="button" {...rest}>
      {image ? <img alt="avatar" src={image} /> : initials}
    </SAvatar>
  )
}

Avatar.defaultProps = {
  name: 'O O',
  backgroundColor: 'primary'
}

export default Avatar
