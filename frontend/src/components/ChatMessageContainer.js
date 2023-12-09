import React from 'react'
import { useEffect } from 'react'
import ChatMessage from './ChatMessage'

const ChatMessageContainer = ( {tempMessages} ) => { 
  useEffect(() => {
    document.getElementById("chat-message-container").scrollTop = document.getElementById("chat-message-container").scrollHeight;
  })

  return (
    <div className='chat-message-container' id='chat-message-container'>
        {tempMessages.map((message) => (
            <ChatMessage key={Math.random() * 1000} message={message} />   
        ))}
    </div>
  )
}

export default ChatMessageContainer