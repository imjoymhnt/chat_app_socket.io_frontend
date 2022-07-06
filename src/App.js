import './App.css';
import {useState, useEffect} from 'react'
import io from 'socket.io-client'
import {nanoid} from 'nanoid'

const socket = io("http://localhost:5000")

function App() {
  const [message, setMessage] = useState("")
  const [chat, setChat] = useState([])
  const userName = nanoid(4)

  useEffect(() => {
    socket.on('chat', (payload) => {
      setChat([...chat, payload])
    })
  })

  const sendChat = (e) => {
    e.preventDefault()
    socket.emit("chat", {message, userName})
    setMessage("")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat App</h1>
        {chat.map((msg, idx) => {
         return <p key={idx}>{msg.message}: <span>{userName}</span></p>
        })}
        <form onSubmit={sendChat}>
          <input type='text' name="chat" placeholder='Send message..' value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type='submit'>Send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
