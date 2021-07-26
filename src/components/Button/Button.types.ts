import React from 'react'
export interface ButtonProps {
  children: React.ReactNode
  label: string
  appearance?: {
    type: 'primary' | 'secondary' | 'tertiary'
    size: 'default' | 'small' | 'large'
    width: 'default' | 'full-width'
  }
  disabled?: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
