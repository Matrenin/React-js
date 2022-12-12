import './Chats.css'

export default function Chats({chats}) {

  return (
    <div className="chats">
      <h3>Список чатов:</h3>
      <ul>{chats.map(el => (
        <li key={el.id}>{el.name}</li>
      ))}</ul>
    </div>
  )
}
