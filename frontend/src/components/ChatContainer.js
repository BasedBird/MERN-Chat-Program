import React, { useState, useEffect } from 'react'
import ChatMessageContainer from './ChatMessageContainer'
import ChatForm from './ChatForm'
import io from 'socket.io-client'

const URL = 'http://localhost:3001'
const socket = io.connect(URL)

const ChatContainer = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch('http://localhost:5000/api')
      const json = await res.json()
      
      if (res.ok) {
        setMessages(json)
      }
    }
    fetchMessages()
    
  }, [])

  const addMessage = (message) => {
    setMessages([ ...messages, message ])
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