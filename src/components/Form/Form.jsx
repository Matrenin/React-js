import './Form.css'
import { useState, useEffect, useRef } from 'react'
import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6600',
    },
    secondary: {
      main: '#ff6600',
    },
  },
});

export default function Form({ addMessage }) {
  const [text, setText] = useState('')
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    addMessage({
      author: 'user',
      text
    })
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