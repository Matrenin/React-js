import MessageList from '../components/MessageList/MessageList'
import Form from '../components/Form/Form'
import '../App.css'
import { useState, useEffect } from 'react'
import Chats from '../components/Chats/Chats'
import { useParams, Navigate } from 'react-router-dom'

export default function ChatsPage({ addChat, onAddMessage, messages, chats, }) {
  const { chatId } = useParams()

  useEffect(() => {
    if (chatId && messages[chatId].length > 0 && messages[chatId][messages[chatId].length - 1].author === 'user') {
      const timeout = setTimeout(() => {
        onAddMessage(chatId, {
          author: 'bot',
          text: 'Im bot'
        })
      }, 1500)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [chatId, messages])

  const handleAddMessage = (message) => {
    if (chatId) {
      onAddMessage(chatId, message)
    }
  }

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" />
  }

  return (
    <div className="box">
      <Chats chats={chats} addChat={addChat}/>
      <div className="list">
        <Form addMessage={handleAddMessage}/>
        <MessageList messages={chatId ? messages[chatId] : []}/>
      </div>
    </div>
  )
}