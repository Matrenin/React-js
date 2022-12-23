import MessageList from '../components/MessageList/MessageList'
import Form from '../components/Form/Form'
import '../App.css'
import { useState, useEffect } from 'react'
import Chats from '../components/Chats/Chats'
import { useParams, Navigate } from 'react-router-dom'
import { selectMessage } from '../store/messages/selectors'
import { useSelector } from 'react-redux'

export default function ChatsPage() {
  const { chatId } = useParams()
  const messages = useSelector(selectMessage)
  
  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" />
  }

  return (
    <div className="box">
      <Chats/>
      <div className="list">
        <MessageList messages={chatId ? messages[chatId] : []} chatId={chatId}/>
      </div>
      <Form/>
    </div>
  )
}