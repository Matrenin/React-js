import { useContext, useState } from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import { useSelector, useDispatch } from 'react-redux'
import './style/profile.css'
import * as types from '../store/profile/types'

export default function ProfilePage() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const name = useSelector(store => store.name)
  const [value, setValue] = useState('')
  const [admin, setAdmin] = useState(true)
  const hw = useSelector(state => state.admin)

  const dispatch = useDispatch()

  const handleChange = () => {
    if (value === '') {
      return
    }
    dispatch({ type: types.CHANGE_NAME, value})
    setValue('')
  }

  const selectUser = () => {
    setAdmin(!admin)
    dispatch({type: types.CHANGE_USER, value: admin})
  }

  console.log(hw)

  return (
    <div className="profile">
      <h2>Profile Page</h2>
      <div className="profile__user">
        <label htmlFor="admin">Do you admin?</label>
        <input value={admin} onChange={selectUser} type="checkbox" id="admin"/>
      </div>
      <p>{theme === 'light' ? '🌞' : '🌙'}</p>
      <button onClick={toggleTheme}>Change theme</button>
      <h4>user: {name}</h4>
      <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
      <button onClick={handleChange}>Change name</button>
    </div>
  )
}