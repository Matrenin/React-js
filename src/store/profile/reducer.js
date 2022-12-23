import * as types from './types'

const initialState = {
  name: 'Shvonder',
  visible: true
}

export const profileReduser = (state = initialState, action) => {
  const { type, value } = action
  switch (type) {
    case types.CHANGE_NAME: 
      return {
        ...state,
        name: value
      }
    case types.TOGGLE_PROFILE:
      return {
        ...state,
        visible: !state.visible
      }
    default:
      return state
  }
}