import React from 'react'
import { render } from '@testing-library/react'

import Avatar from './Avatar'

// TODO dive deeper in test options as Color, ImgUrl ect.

describe('Avatar', () => {
  test('Initials', () => {
    const { getByText } = render(<Avatar name="John Smith" />)
    expect(getByText('JS')).toBeInTheDocument()
  })

  test('Image', () => {
    const { getByAltText } = render(<Avatar image="image-avatar" />)
    expect(getByAltText('avatar')).toBeInTheDocument()
  })
})
