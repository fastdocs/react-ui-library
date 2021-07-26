import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
}

export const Primary = () => {
  return (
    <>
      <Button
        onClick={() => {
          alert('You clicked me')
        }}
        appearance={{
          type: 'primary',
          size: 'default',
        }}
      >
        Click me
      </Button>
    </>
  )
}
