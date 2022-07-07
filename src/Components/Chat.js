import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import {Button} from 'antd'



const socket = io("http://localhost:5000")

const Chat = () => {

  const user = localStorage.getItem('chat-userId')
  // console.log(user);


    const [message, setMessage] = useState("")
  const [chat, setChat] = useState([])
  // const userName = nanoid(4)

  useEffect(() => {
    socket.on('chat', (payload) => {
      setChat([...chat, payload])
    })
  })

  const sendChat = (e) => {
    e.preventDefault()
    socket.emit("chat", {message, user})
    setMessage("")
  }

  const handleLogout = () => {
    localStorage.removeItem('chat-userId')
    localStorage.removeItem('chat-token')
    localStorage.removeItem('chat-email')
    window.location.assign("/login")
  }
  return (
    <div>
        <h1>Chat App</h1>
        <Button type="primary" style={{padding: "2px"}} onClick={handleLogout}>Logout</Button>
        <br />
        <br />
        {chat.map((msg, idx) => {
         return <p key={idx}>{msg.message}: <span>{user}</span></p>
        })}
        <form onSubmit={sendChat}>
          <input type='text' name="chat" placeholder='Send message..' value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default Chat