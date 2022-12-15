import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProfilePage from './pages/ProfilePage'
import ChatsPage from './pages/ChatsPage'
import Chats from './components/Chats/Chats'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const defaultMessage = {
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

export default function App() {
  const [messages, setMessages] = useState(defaultMessage)

  const chats = Object.keys(messages).map(chat => ({
    id: nanoid(),
    name: chat
  }))

  const addChat = (newChat) => {
    if (newChat.name === '') {
      return
    }
    console.log(newChat)
    setMessages({
      ...messages,
      [newChat.name]: []
    })
  }

  const onAddMessage = (chatId, newMessage) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage]
    })
  }

  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<MainPage/>}></Route>
          <Route path="profile" element={<ProfilePage/>}></Route>
          <Route path="chats">
            <Route index element={<Chats chats={chats} addChat={addChat}/>}></Route>
            <Route
              path=":chatId"
              element={<ChatsPage
              chats={chats}
              messages={messages}
              onAddMessage={onAddMessage}
              addChat={addChat}/>}
            ></Route>
          </Route>
        </Route>

        <Route path="*" element={<h2>404 Page not Found</h2>}></Route>
      </Routes>
    </>
  )
}