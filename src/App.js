import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProfilePage from './pages/ProfilePage'
import ChatsPage from './pages/ChatsPage'
import Chats from './components/Chats/Chats'
import { useState } from 'react'
// import { nanoid } from 'nanoid'
import { defaultContext, ThemeContext } from './utils/ThemeContext'
import { Provider } from 'react-redux'
import { store, persistor } from './store/index'
import { AboutWithConnect } from './pages/AboutPage'
import { PersistGate } from 'redux-persist/integration/react'
import { ArticlesPage } from './pages/ArticlesPage'
import { SingIn } from './pages/SingIn'
import { SingUp } from './pages/SingUp'

export default function App() {
  const [theme, setTheme] = useState(defaultContext.theme)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeContext.Provider value={{
            theme,
            toggleTheme
          }}>
            <Routes>
              <Route path="/" element={<Header/>}>
                <Route index element={<MainPage/>}></Route>
                <Route path="profile" element={<ProfilePage/>}></Route>
                <Route path="about" element={<AboutWithConnect/>}></Route>
                <Route path="chats">
                  <Route index element={<Chats/>}></Route>
                  <Route
                    path=":chatId"
                    element={<ChatsPage
                    />}
                  ></Route>
                </Route>
                <Route path="articles" element={<ArticlesPage/>}></Route>
                <Route path="singin" element={<SingIn/>}></Route>
                <Route path="singup" element={<SingUp/>}></Route>
              </Route>

              <Route path="*" element={<h2>404 Page not Found</h2>}></Route>
            </Routes>
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    </>
  )
}