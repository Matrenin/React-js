import { Outlet, NavLink } from 'react-router-dom'
import './Header.css'

export const navigate = [
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
  },
  {
    id: 6,
    name: 'SingIn',
    to: '/singin'
  },
  {
    id: 7,
    name: 'SingUp',
    to: '/singup'
  }
]

export default function Header() {
  return (
    <>
      <header>
        <nav className="header">
          <ul>
            {navigate.map(link => (
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