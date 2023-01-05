import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import IButton from '@mui/material/Button'
import { initialState} from '../../store/messages/reducers'

describe('Testing button', () => {
  it('Render component button', () => {
    render(<IButton>Add message</IButton>)
  })

  it('render with snapshot', () => {
    const {asFragment} = render(<IButton>Change name</IButton>)
    expect(asFragment()).toMatchSnapshot()
   })

  it('testing reducer message', () => {
    expect(initialState).toHaveProperty('default')
  })

  it('render multiply component', () => {
    render(
      <>
        <IButton>Edit</IButton>
        <IButton>Delete</IButton>
      </>
    )
    expect(screen.queryAllByRole('button').length).toBe(2)
  })

  it('button is disable', () => {
    render(<IButton disabled>Add message</IButton>)
    expect(screen.getByText(/Add message/)).toBeDisabled()
  })
})