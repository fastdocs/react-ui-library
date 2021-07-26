import React from 'react'
export interface ButtonProps {
  children: React.ReactNode
  label: string
  type: 'button' | 'submit' | 'reset'
  appearance?: {
    style: 'primary' | 'secondary' | 'tertiary'
    size: 'default' | 'small' | 'large'
    width: 'default' | 'full-width'
  }
  disabled?: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
