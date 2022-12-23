import { ADD_CHAT, DELETE_CHAT, ADD_MESSAGE } from './actions'

const inintialState = {
  default: [
    {
      author: 'user',
      text: 'one text'
    },
    {
      author: 'user',
      text: 'two text'
    }
  ]
}

export const messagesReducer = (state = inintialState, action) => {
  const { type, value} = action
  switch (type) {
    case ADD_CHAT: 
      return {
        ...state,
        [value]: []
      }

    case DELETE_CHAT: 
      const chats = { ...state }
      delete chats[value]
      return chats

    case ADD_MESSAGE:
      return {
        ...state,
        [value.chatName]: [
          ...state[value.chatName],
          {
            author: 'user',
            text: value.text
          }
        ]
      }

    default:
      return state
  }
}