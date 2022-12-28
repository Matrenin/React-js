import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { auth } from '../store/profile/actions'

export function SingIn() {
  const [inputs, setInputs] = useState({login: '', password: ''})
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()
    if (inputs.login === 'Admin' && inputs.password === 'Admin') {
      dispatch(auth(true))
      navigate('/')
    } else {
      setError('Login and password failed')
      setInputs({login: '', password: ''})
    }
  }

  return (
    <>
      <h3>SingIn</h3>
      <form onSubmit={handleSubmit}>
        <p>Login: </p>
        <input
          type="text"
          value={inputs.login}
          name="login"
          onChange={(e) => setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))}
        />
        <p>Password: </p>
        <input
          type="text"
          value={inputs.password}
          name="password"
          onChange={(e) => setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))}
        />
        <button>Login</button>
      </form>
      {error && <p style={{ color: 'red'}}>{error}</p>}
    </>
  )
}