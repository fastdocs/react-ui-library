import React from 'react'
import { Checkbox as CheckboxComponent } from './Checkbox'

export default {
  component: CheckboxComponent,
  title: 'Library/Checkbox',
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
}

export const Checkbox = (args) => {
  return <CheckboxComponent {...args} />
}

Checkbox.args = {
  disabled: false,
}
