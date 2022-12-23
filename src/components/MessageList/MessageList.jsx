import './MessageList.css'

export default function MessageList({ messages, chatId }) {

  return (
    <div className="messageList-box">
      <h3>Cписок сообщений в {chatId} чате:</h3>
      <ul className="message__area">{messages.map((el, index) => (
        <li key={index}>{el.author}: {el.text}</li>
      ))}</ul>
    </div>
  )
}