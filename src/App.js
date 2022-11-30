import { useState } from 'react';
import { Message } from './components/func/Message';
import styles from './components/func/Form.module.css';

function App() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const [timeMessage, setTime] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleClick = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    let time = {hours, minutes};
    setTime(time);
    setMessage(text);
  }

  return (
    <>
      <div className={styles.box}>
        <div className={styles.messageArea}>
          {message ? <Message message={message} timeMessage={timeMessage}/> : ''}
        </div>
        <input
          type="text"
          className={styles.writeArea}
          onChange={handleChange}
          placeholder="Write message..."
        />
        <button className={styles.btnSend} onClick={handleClick}>Send</button>
      </div>
    </>
  )
}

// function App() {
//   const [toggle, setToggle] = useState(true);
//   const [arr] = useState([
//     {name: 'Aslan'},
//     {name: 'Tagir'},
//     {name: 'Goga'}
//   ]);

//   return (
//     <>
//       <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'}</button>
//       <ul>
//         {arr.map((item, index) => (
//           <li key={index}>{item.name}</li>
//         ))}
//       </ul>
//       {toggle && <NewForm name='Pepe Silvia' age='31' arr={arr}/>}
//     </>
//   )
// }

export default App;