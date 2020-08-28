import React from 'react'
import { Avatar, KNOBS_GROUPS } from '../../src'

import { text } from '@storybook/addon-knobs'

export default {
  title: 'Components/Avatar',
  component: Avatar
}

export const Main = () => {
  const name = text('Name', '', KNOBS_GROUPS.params)
  return <Avatar name={name} />
}
