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
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
}

export const Default = (args) => {
  return (
    <Button onClick={() => {}} appearance={{ ...args }} {...args}>
      Hello
    </Button>
  )
}

Default.args = {
  label: 'Click me',
  type: 'primary',
  size: 'default',
  disabled: false,
}
