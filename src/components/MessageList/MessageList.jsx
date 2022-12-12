import './MessageList.css'

export default function MessageList({ messages }) {

  return (
    <div className="messageList-box">
      <h3>Cписок сообщений:</h3>
      <ul>{messages.map((el, index) => (
        <li key={index}>{el.author}: {el.text}</li>
      ))}</ul>
    </div>
  )
}