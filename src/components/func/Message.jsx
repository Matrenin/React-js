import './Form.css'
// import { useState, useEffect } from 'react'

export default function Message(props) {

  return (
    <>
      <div>{props.messageList.map((el, index) => (
        <div className="messageDesc" key={index}>{el.author}: 
          <span className="newMessage" key={index}>{el.text}</span>   
        </div>
      ))}</div>
    </>
  )
}