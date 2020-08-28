import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  test('Handlers', () => {
    const onClick = jest.fn()

    const { getByText, asFragment } = render(
      <Button onClick={onClick}>My button!</Button>
    )

    expect(onClick).toHaveBeenCalledTimes(0)
    fireEvent.click(getByText('My button!'))
    expect(onClick).toHaveBeenCalledTimes(1)

    // TODO: Replace by storyshots
    expect(asFragment()).toMatchSnapshot()
  })
})
