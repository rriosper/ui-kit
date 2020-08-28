import { action } from '@storybook/addon-actions'
import React from 'react'
import { Button, getThemeNode, DEFAULT_BUTTON_STYLES, KNOBS_GROUPS } from '../../src'
import { omit, pipe } from 'ramda'
import { boolean, select, text } from '@storybook/addon-knobs'

export default {
  title: 'Components/Button',
  parameters: {
    component: Button
  }
}

const getKnobsColor = pipe(getThemeNode, omit(['modes', 'text', 'bg']))

export const Main = () => {
  const size = select(
    'Size',
    {
      Small: 'small',
      Medium: 'medium',
      Big: 'big'
    },
    DEFAULT_BUTTON_STYLES.size,
    KNOBS_GROUPS.params
  )

  const buttonText = text('Text', 'Button Text', KNOBS_GROUPS.params)

  const backgroundColor = select(
    'Background color',
    getKnobsColor('colors'),
    DEFAULT_BUTTON_STYLES.backgroundColor,
    KNOBS_GROUPS.params
  )

  const shape = select(
    'Shape',
    {
      None: undefined,
      Rounded: 'rounded'
    },
    undefined,
    KNOBS_GROUPS.params
  )

  // const icon = select(
  //   'Icon',
  //   {
  //     None: null,
  //     'Icon 1': 'icon1',
  //     'Icon 2': 'icon2',
  //     'Icon 3': 'icon3',
  //   },
  //   undefined,
  //   KNOBS_GROUPS.params,
  // );

  const disabled = boolean('Disabled', false, KNOBS_GROUPS.params)
  return (<Button onClick={action('onClick')} size={size} shape={shape} backgroundColor={backgroundColor} disabled={disabled}>
    {buttonText}
  </Button>)
}

export const Disabled = () => <Button disabled>Disabled</Button>

export const Sizes = () => (
  <>
    <Button>Default button</Button>
    <br />
    <Button size="small">Small button</Button>
    <br />
    <Button size="medium">Medium button</Button>
    <br />
    <Button size="big">Big button</Button>
  </>
)

export const Colors = () => (
  <>
    <Button>Default button</Button>
    <br />
    <Button backgroundColor="primary">Primary button</Button>
    <br />
    <Button backgroundColor="ok">OK button</Button>
    <br />
    <Button backgroundColor="ko">KO button</Button>
    <br />
    <Button backgroundColor="warning">Warning button</Button>
    <br />
    <Button backgroundColor="#9b59b6">#9b59b6 color button</Button>
  </>
)

Main.parameters = {
  async puppeteerTest (page) {

  }
}
