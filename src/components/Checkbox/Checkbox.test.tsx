import React from 'react'
import { render } from '@testing-library/react'

import { Button } from './Checkbox'
import { ButtonProps } from './Checkbox.types'

describe('Test Component', () => {
  let props: ButtonProps

  beforeEach(() => {
    props = {
      label: 'Test Button',
      children: 'Test Button',
      onClick: jest.fn(),
      type: 'button',
    }
  })

  const renderComponent = () => render(<Button {...props} />)

  it('should render foo text correctly', () => {
    props.children = 'Hello World'
    const { baseElement } = renderComponent()

    const component = baseElement

    expect(component).toHaveTextContent('Hello World')
  })
})
