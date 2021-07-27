import React from 'react'

export interface CheckboxProps {
  name: string
  defaultChecked?: boolean
  required?: boolean
  disabled?: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
