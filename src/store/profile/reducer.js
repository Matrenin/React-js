import * as types from './types'

const initialState = {
  name: 'Shvonder',
  admin: false
}

export const profileReduser = (state = initialState, action) => {
  const { type, value } = action
  switch (type) {
    case types.CHANGE_NAME: 
      return {
        ...state,
        name: value
      }
    case types.CHANGE_USER:
      return {
        ...state,
        admin: value
      }
    default:
      return state
  }
}