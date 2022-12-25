import { useContext, useState } from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import './style/profile.css'
import { changeName, toggleProfile } from '../store/profile/actions'
import { connect } from 'react-redux'

function AboutPage(props) {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const [value, setValue] = useState('')

  return (
    <div className="profile">
      <h2>About Page</h2>
      <p>{theme === 'light' ? '🌞' : '🌙'}</p>
      <button onClick={toggleTheme}>Change theme</button>
      <h4>user: {props.name}</h4>
      <div className="profile__user">
        <input type="checkbox" checked={props.visible} readOnly/>
        <button onClick={() => props.toggle()}>change visible</button>
      </div>
      <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
      <button onClick={() => props.changeName(value)}>Change name</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  name: state.profile.name,
  visible: state.profile.visible
})

export const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleProfile()),
  changeName: (value) => dispatch(changeName(value))
})

export const  AboutWithConnect = connect(mapStateToProps, mapDispatchToProps)(AboutPage)