import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    type: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'small', 'large'],
      control: { type: 'select' },
    },
    width: {
      options: ['default', 'full-width'],
      control: { type: 'select' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
}

export const Default = (args) => {
  return (
    <Button appearance={{ ...args }} {...args}>
      Hello
    </Button>
  )
}

Default.args = {
  label: 'Click me',
  type: 'primary',
  size: 'default',
  width: 'default',
  disabled: false,
}
