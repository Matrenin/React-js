import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUp } from '../services/firebase'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function SignUp() {
  const [inputs, setInputs] = useState({email: '', password: ''})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signUp(inputs.email, inputs.password)
      navigate('/signin')
    } catch (error) {
      setError(error.message)
      console.log(error)
      setInputs({email: '', password: ''})
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h3>SingUp</h3>
      <form onSubmit={handleSubmit}>
        <label>Email: 
          <input
            type="text"
            value={inputs.email}
            name="email"
            onChange={(e) => setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))}
          />
        </label>
        <label>Password: 
          <input
            type="text"
            value={inputs.password}
            name="password"
            onChange={(e) => setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))}
          />
        </label>
        <button>Sign up</button>
      </form>
      { loading && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
      {error && <p style={{ color: 'red'}}>{error}</p>}
    </>
  )
}