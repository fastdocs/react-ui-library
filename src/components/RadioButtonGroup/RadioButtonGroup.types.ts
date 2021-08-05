import React from 'react'

export interface RadioButtonProps {
  name: string
  defaultValue: string | number
  defaultChecked: boolean
  children?: React.ReactNode
  label?: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface RadioButtonGroupProps {
  children: React.ReactNode
  orientation?: 'horizontal' | 'vertical'
  showDescription?: boolean
}

export interface RadioButtonLabelProps {
  children: React.ReactNode
  description?: string
}
