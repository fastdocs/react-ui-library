import React from 'react'
import {
  RadioButtonGroup as RadioButtonGroupComponent,
  RadioButton,
} from './RadioButtonGroup'

export default {
  component: RadioButtonGroupComponent,
  title: 'Library/RadioButtonGroup',
  argTypes: {
    orientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'radio' },
    },
    onClick: { action: 'clicked' },
  },
}

export const RadioButtonGroup = (args) => {
  return (
    <RadioButtonGroupComponent {...args}>
      <RadioButton defaultChecked={true} defaultValue="Porsche" name="Foo">
        Porsche
      </RadioButton>
      <RadioButton defaultChecked={false} defaultValue="BMW" name="Foo">
        BMW
      </RadioButton>
      <RadioButton defaultChecked={false} defaultValue="Audi" name="Foo">
        Audi
      </RadioButton>
    </RadioButtonGroupComponent>
  )
}

RadioButtonGroup.args = {
  orientation: 'vertical',
}
