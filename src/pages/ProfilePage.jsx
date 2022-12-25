import { useContext, useState } from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import { useSelector, useDispatch } from 'react-redux'
import './style/profile.css'
import { selectName, selectVisible } from '../store/profile/selectors'
import { changeName, toggleProfile } from '../store/profile/actions'

export default function ProfilePage() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const name = useSelector(selectName)
  const visible = useSelector(selectVisible)
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  // const handleChange = () => {
  //   if (value === '') {
  //     return
  //   }
  //   dispatch(changeName(value))
  //   setValue('')
  // }

  return (
    <div className="profile">
      <h2>Profile Page</h2>
      <p>{theme === 'light' ? '🌞' : '🌙'}</p>
      <button onClick={toggleTheme}>Change theme</button>
      <h4>user: {name}</h4>
      <div className="profile__user">
        <input type="checkbox" checked={visible} readOnly/>
        <button onClick={() => dispatch(toggleProfile())}>change visible</button>
      </div>
      <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
      <button onClick={() => dispatch(changeName(value))}>Change name</button>
    </div>
  )
}