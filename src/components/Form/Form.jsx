import './Form.css'
import { useState, useEffect, useRef } from 'react'
import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux'
import { addMessageWithReply } from '../../store/messages/actions'
import { useParams } from 'react-router-dom'
import { getMessageListById } from '../../services/firebase'
import { push } from "firebase/database"

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6600',
    },
    secondary: {
      main: '#ff6600',
    },
  },
});

export default function Form() {
  const [text, setText] = useState('')
  const inputRef = useRef()
  const dispatch = useDispatch()
  const { chatId } = useParams()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (text === "") {
      return
    }
    dispatch(addMessageWithReply(chatId, {
      author: 'user',
      text
    }))
    push(getMessageListById(chatId), {
      author: 'user',
      text
    })
    setText('')
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <form className="form" onSubmit={handleSubmit}>
      <ThemeProvider theme={theme}>
        <ITextField
          id="outlined-basic"
          label="write message"
          variant="outlined"
          type="text"
          onChange={(event) => setText(event.target.value)}
          color="primary"
          size="small"
          ref={inputRef}
          value={text}
        />
        <IButton
          variant="contained"
          type="submit"
          color="primary"
        >
          Add message
        </IButton>
      </ThemeProvider>
    </form>
  )
}