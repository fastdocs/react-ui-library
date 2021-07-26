import React from 'react'
import { Button as ButtonComponent } from './Button'

export default {
  component: ButtonComponent,
  title: 'Library/Button',
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    style: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['default', 'small', 'large'],
      control: { type: 'radio' },
    },
    width: {
      options: ['default', 'full-width'],
      control: { type: 'radio' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
}

export const Button = (args) => {
  return (
    <ButtonComponent appearance={{ ...args }} {...args}>
      Hello
    </ButtonComponent>
  )
}

Button.args = {
  label: 'Click me',
  style: 'primary',
  size: 'default',
  width: 'default',
  disabled: false,
  type: 'button',
}
