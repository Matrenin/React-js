import MessageList from './components/MessageList/MessageList'
import Form from './components/Form/Form'
import './App.css'
import { useState, useEffect } from 'react'
import Chats from './components/Chats/Chats'

export default function App() {
  const [messages, setMessages] = useState([])
  const [chats, setChats] = useState([])

  const addMessage = (newMessage) => {
    if (newMessage.text === '') {
      return
    }
    setMessages([...messages, newMessage])
  }

  useEffect(() => {
    setChats([
      {id: 1, name: 'Games'},
      {id: 2, name: "Films"}
    ])
    if (messages.length > 0 && messages[messages.length - 1].author === 'user') {
      const timeout = setTimeout(() => {
        addMessage({
          author: 'bot',
          text: 'Im bot'
        })
      }, 1500)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messages])

  return (
    <div className="box">
      <h2 className="title">Добро пожаловать</h2>
      <Form addMessage={addMessage}/>
      <div className="list">
        <Chats chats={chats}/>
        <MessageList messages={messages}/>
      </div>
    </div>
  )
}