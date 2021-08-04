import React, { useState } from 'react'

import {
  RadioButtonProps,
  RadioButtonGroupProps,
} from './RadioButtonGroup.types'

import './style/RadioButton.scss'
import './style/RadioButtonGroup.scss'

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  children,
  label,
  onClick,
  disabled,
  defaultValue,
  defaultChecked,
}): React.ReactElement => {
  return (
    <div className="radio-button">
      <label>
        <input
          type="radio"
          name={name}
          defaultValue={defaultValue}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onClick={onClick}
        />
        {children ? children : label}
      </label>
    </div>
  )
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  children,
  orientation = 'horizontal',
}) => {
  return <div className={`radio-button-group ${orientation}`}>{children}</div>
}
