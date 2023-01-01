import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProfilePage from './pages/ProfilePage'
import ChatsPage from './pages/ChatsPage'
import Chats from './components/Chats/Chats'
import { useEffect, useState } from 'react'
// import { nanoid } from 'nanoid'
import { defaultContext, ThemeContext } from './utils/ThemeContext'
import { useDispatch } from 'react-redux'
import { persistor } from './store/index'
import { AboutWithConnect } from './pages/AboutPage'
import { PersistGate } from 'redux-persist/integration/react'
import { ArticlesPage } from './pages/ArticlesPage'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { PriviteRoute } from './utils/PriviteRoute'
import { PublicRoute } from './utils/PublicRoute'
import { firebaseAuth, messagesRef } from './services/firebase'
import { auth } from './store/profile/actions'
import { onValue} from "firebase/database"

export default function App() {
  const [theme, setTheme] = useState(defaultContext.theme)
  const dispatch = useDispatch()
  const [messageDB, setMessageDB] = useState({})
  const [chats, setChats] = useState([])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(auth(true))
      } else {
        dispatch(auth(false))
      }
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val()
      const newChats = Object.entries(data).map(item => ({
        name: item[0],
        message: item[1]
      }))
      setChats(newChats)
      setMessageDB(data)
    })
  }, [])

  return (
    <>
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
              {/* <Route path="chats">
                <Route index element={<Chats/>}></Route>
                <Route
                  path=":chatId"
                  element={<ChatsPage
                  />}
                ></Route>
              </Route> */}
              <Route path="chats" element={<PriviteRoute/>}>
                <Route
                  index
                  element={<Chats chats={chats} messageDB={messageDB}/>}
                />
                <Route
                  path=":chatId"
                  element={<ChatsPage chats={chats} messageDB={messageDB}/>}
                />
              </Route>
              <Route path="articles" element={<ArticlesPage/>}></Route>
              <Route path="signin" element={<PublicRoute component={<SignIn />} />} />
              <Route path="signup" element={<SignUp/>}></Route>
            </Route>

            <Route path="*" element={<h2>404 Page not Found</h2>}></Route>
          </Routes>
        </ThemeContext.Provider>
      </PersistGate>
    </>
  )
}