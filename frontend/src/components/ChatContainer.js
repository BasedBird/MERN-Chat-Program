import React, { useState } from 'react'
import ChatMessageContainer from './ChatMessageContainer'
import ChatForm from './ChatForm'

const ChatContainer = () => {
  const [messages, setMessages] = useState([{
    user: 'pongu',
    content: 'content'
  }
  ])

  const addMessage = (message) => {
    setMessages([ ...messages, message ])
  }

  return (
    <div className='chat-container'>
      <ChatMessageContainer tempMessages={messages}/>
      <ChatForm addMessage={ addMessage }/>
    </div>
  )
}

export default ChatContainer