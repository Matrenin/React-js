import { useState, useEffect } from 'react'
import './components/func/Form.css'

export default function App () {
  const [messageList, setMessageList] = useState([])
  const [message, setMessage] = useState('')
  const [toggle, setToggle] = useState(false)

  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  const handleClick = () => {
    if (message === '') {
      return
    }
    const obj = {author: 'Roman', text: message}
    setMessageList([...messageList, obj])
  }

  useEffect(() => {
    messageList.forEach(el => {
      if (el.author === 'Roman') {
        setTimeout(() => {
          setToggle(true)
        }, 1500)
      }
    })
  }, [messageList])

  return (
    <>
      <div className="box">
        <h2 className="title">Добро пожаловать</h2>
        <div className="message-area">
        <div>{messageList.text}</div>
          <div>{messageList.map((el, index) => (
            <div className="messageDesc">
              <div key={index}>{el.author}: 
                <span className="newMessage" key={index}>{el.text}</span>
              </div>
              <p className="robot-text">{toggle ? 'Ваше обращение принято в обработку' : ''}</p>
            </div>
          ))}</div>
        </div>
        <input type="text" className="text-area" placeholder="Write message..." onChange={handleChange}/>
        <button className="send-btn" onClick={handleClick}>Send</button>
      </div>
    </>
  )
}
