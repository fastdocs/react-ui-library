import React from 'react'
import {
  RadioButtonGroup as RadioButtonGroupComponent,
  RadioButton,
  RadioButtonLabel,
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
        <RadioButtonLabel description="Porsche 911">Porsche</RadioButtonLabel>
      </RadioButton>
      <RadioButton defaultChecked={false} defaultValue="BMW" name="Foo">
        <RadioButtonLabel description="BMW M450i">BMW</RadioButtonLabel>
      </RadioButton>
      <RadioButton defaultChecked={false} defaultValue="Audi" name="Foo">
        <RadioButtonLabel description="Audi RS6">Audi</RadioButtonLabel>
      </RadioButton>
    </RadioButtonGroupComponent>
  )
}

RadioButtonGroup.args = {
  orientation: 'vertical',
  showDescription: false,
}
