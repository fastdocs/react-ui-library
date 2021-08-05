import React, { useState } from 'react'

import {
  RadioButtonProps,
  RadioButtonGroupProps,
  RadioButtonLabelProps,
} from './RadioButtonGroup.types'

import './style/RadioButton.scss'
import './style/RadioButtonGroup.scss'

export const RadioButtonLabel: React.FC<RadioButtonLabelProps> = ({
  children,
  description,
}): React.ReactElement => {
  return (
    <div className="radio-button-description">
      <span>{children}</span>
      <span>{description}</span>
    </div>
  )
}

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
        <div className="radio-button-input">
          <input
            type="radio"
            name={name}
            defaultValue={defaultValue}
            defaultChecked={defaultChecked}
            disabled={disabled}
            onClick={onClick}
          />
        </div>
        {children ? children : label}
      </label>
    </div>
  )
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  children,
  orientation = 'horizontal',
  showDescription = false,
}) => {
  const showDescriptionValue = showDescription
    ? 'show-description'
    : 'hide-description'

  return (
    <div
      className={`radio-button-group ${orientation} ${showDescriptionValue}`}
    >
      {children}
    </div>
  )
}
