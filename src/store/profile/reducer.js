import * as types from './types'

const initialState = {
  name: 'White chocolate',
  visible: true,
  isAuth: false
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
    case types.IS_AUTH:
      return {
        ...state,
        isAuth: value
      }
    default:
      return state
  }
}