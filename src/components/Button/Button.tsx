import React from 'react'

import { ButtonProps } from './Button.types'

import './style/Button.scss'

export const Button: React.FC<ButtonProps> = ({
  children,
  label,
  appearance: { style = 'primary', size = 'default', width = 'default' },
  onClick,
  disabled,
  type = 'button',
}): React.ReactElement => {
  return (
    <button
      className={`Button ${style} ${size} ${width}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label ? label : children}
    </button>
  )
}
