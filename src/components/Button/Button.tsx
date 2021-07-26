import React from 'react'

import { ButtonProps } from './Button.types'

import './Button.scss'

const Button: React.FC<ButtonProps> = ({
  children,
  label,
  appearance: { type = 'primary', size = 'default' },
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`Button ${type} ${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label ? label : children}
    </button>
  )
}

export default Button
