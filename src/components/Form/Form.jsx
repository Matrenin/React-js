import './Form.css'
import { useState, useEffect, useRef } from 'react'
import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux'
import { addMessages } from '../../store/messages/actions'
import { useParams } from 'react-router-dom'

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
    dispatch(addMessages(chatId, text))
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