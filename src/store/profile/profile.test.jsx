import { initialState } from './reducer'
import ProfilePage from '../../pages/ProfilePage'
import { render, screen } from '@testing-library/react'
import IButton from '@mui/material/Button'

import * as types from './types'

export const profileReduser = (state = initialState, action) => {
  const { type, value } = action
  switch (type) {
    case types.CHANGE_NAME: 
      return {
        ...state,
        name: 'Roman'
      }
    case types.TOGGLE_PROFILE:
      return {
        ...state,
        visible: !state.visible
      }
    case types.IS_AUTH:
      return {
        ...state,
        isAuth: value
      }
    default:
      return state
  }
}

describe('testing profile reducer', () => {
  it('test store', () => {
    expect(initialState).toHaveProperty('name')
  })

  // Не могу понять, появляется ошибка, что компонент должен быть обернут в <Provider/>, хотя все приложение и так обернутo в index.js
  it('redner Header', () => {
    render(<ProfilePage/>)
  })

  it('Render component button', () => {
    render(<IButton>Add message</IButton>)
  })

  it('reducer changeName', () => {
    const action = {
      type: types.CHANGE_NAME
    }
    expect(profileReduser(initialState, action)).toEqual({
      ...initialState,
      name: 'Roman'
    })
  })
})
