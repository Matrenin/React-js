import * as types from './types'

export const changeName = (data) => ({
  type: types.CHANGE_NAME,
  value: data 
})

export const toggleProfile = () => ({
  type: types.TOGGLE_PROFILE
})

export const auth = (auth) => ({
  type: types.IS_AUTH,
  value: auth
})