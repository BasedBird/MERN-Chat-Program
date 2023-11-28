import React from 'react'
import ChatMessage from './ChatMessage'

const ChatMessageContainer = ( ) => { 
    const tempMessages = [
        {
            user: 'pongu',
            content: 'example message'
        }
      ]

  return (
    <div className='chat-message-container'>
        {tempMessages.map((message) => (
            <ChatMessage key={Math.random * 1000} message={message} />   
        ))}
    </div>
  )
}

export default ChatMessageContainer