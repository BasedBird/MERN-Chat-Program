import React, { useState, useEffect } from 'react'
import ChatMessageContainer from './ChatMessageContainer'
import ChatForm from './ChatForm'
import io from 'socket.io-client'

const ChatContainer = () => {
  const [messages, setMessages] = useState([])
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch('http://pongcord.mooo.com:5000/api')
      const json = await res.json()
      
      if (res.ok) {
        setMessages(json)
      }
    }
    fetchMessages()

    const URL = 'http://pongcord.mooo.com:3001'
    const newSocket = io.connect(URL)
    newSocket.on("recieved_message", (message) => {
      setMessages((prevMessages) => [ ...prevMessages, message ])
    });  
    setSocket(newSocket)
    return () => {
      newSocket.close()
    }
  }, [setSocket])

  const addMessage = (message) => {
    socket.emit('new_message', message)
  }

  return (
    <div className='chat-container'>
      <ChatMessageContainer tempMessages={messages}/>
      <ChatForm addMessage={ addMessage }/>
    </div>
  )
}

export default ChatContainer