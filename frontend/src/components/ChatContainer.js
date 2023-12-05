import React, { useState, useEffect } from 'react'
import ChatMessageContainer from './ChatMessageContainer'
import ChatForm from './ChatForm'
import io from 'socket.io-client'

const ChatContainer = () => {
  const [messages, setMessages] = useState([])
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const URL = 'http://localhost:3001'
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