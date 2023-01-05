import { Outlet, NavLink } from 'react-router-dom'
import './Header.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../services/firebase'

export const navigates = [
  {
    id: 1,
    name: 'Main',
    to: '/'
  },
  {
    id: 2,
    name: 'Profile',
    to: '/profile'
  },
  {
    id: 3,
    name: 'Chat',
    to: '/chats'
  },
  {
    id: 4,
    name: 'About',
    to: '/about'
  },
  {
    id: 5,
    name: 'Articles',
    to: '/articles'
  }
]

export default function Header() {
  const name = useSelector((store) => store.profile.name)
  const isAuth = useSelector((store => store.profile.isAuth))
  const navigate = useNavigate()


  const handleLogin = () => {
    navigate('/signin')
  }

  const handleSignUp = () => {
    navigate('/signup')
  }

  const handleLogOut = async () => {
    await logOut()
  }

  return (
    <>
      <header>
        <nav className="header">
          <div className="header__login">
            {!isAuth && (
              <>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleSignUp}>Sign up</button>
              </>
            )}
            {isAuth && (
              <>
                <button onClick={handleLogOut}>Log out</button>
                <p>User: {name}</p>
              </>
            )}
          </div>
          <ul>
            {navigates.map(link => (
              <li key={link.id}>
                <NavLink
                  to={link.to}
                  style={({ isActive }) => ({
                    color: isActive ? 'red' : 'blue'
                  })}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}