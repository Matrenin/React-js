export const ADD_CHAT = 'ADD_CHAT'
export const DELETE_CHAT = 'DELETE_CHAT'
export const ADD_MESSAGE = 'ADD_MESSAGE'

export const addChat = (newChat) => ({
  type: ADD_CHAT,
  value: newChat
})

export const deleteChat = (chatName) => ({
  type: DELETE_CHAT,
  value: chatName
})

export const addMessages = (chatName, text) => ({
  type: ADD_MESSAGE,
  value: {chatName, text}
})