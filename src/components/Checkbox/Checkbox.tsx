import React from 'react'

import { CheckboxProps } from './Checkbox.types'

import './style/Checkbox.scss'

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  defaultChecked = true,
  onClick,
  disabled,
  required,
}): React.ReactElement => {
  return (
    <div className="Checkbox">
      <div className="checkbox-container">
        <input
          type="checkbox"
          name={name}
          defaultChecked={defaultChecked}
          required={required}
          disabled={disabled}
          onClick={onClick}
        />
        <span className="checkmark"></span>
      </div>
    </div>
  )
}
