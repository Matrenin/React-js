import './Chats.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { theme } from '../Form/Form'
import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux'
import { addChat, deleteChat } from '../../store/messages/actions'
import { selectChat } from '../../store/messages/selectors'
import { messagesRef } from '../../services/firebase'
import { push, set, remove } from "firebase/database"

export default function Chats({ messageDB }) {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const chats = useSelector(selectChat, (prev, next) => prev.length === next.length)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addChat(value))
    set(messagesRef, {
      ...messageDB,
      [value]: {
        name: value
      }
    })
    setValue('')
  }

  return (
    <div className="chats">
      <h3>Список чатов:</h3>
      <ul>
        {chats.map(chat => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.name}`}>
              {chat.name}
            </Link>
            <button onClick={() => dispatch(deleteChat(chat.name))}>delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
      <ThemeProvider theme={theme}>
        <ITextField
          id="outlined-basic"
          label="write chat"
          variant="outlined"
          type="text"
          onChange={(event) => setValue(event.target.value)}
          color="primary"
          size="small"
        />
        <IButton
          variant="contained"
          type="submit"
          color="primary"
        >
          Add chat
        </IButton>
      </ThemeProvider>
      </form>
    </div>
  )
}
