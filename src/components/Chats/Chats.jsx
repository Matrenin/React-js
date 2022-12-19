import './Chats.css'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import { theme } from '../Form/Form'
import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';

export default function Chats({ addChat, chats, deleteChat }) {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addChat({
      id: nanoid(),
      name: value
    })
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
