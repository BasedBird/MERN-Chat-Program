import React from 'react'
import pingu from '../img/pingu.png'

const ChatMessage = ( {message} ) => {
  return (
    <div className='chat-message'>
        <p> 
          <span>{message.user}:  {message.content}</span>
        </p>
    </div>
  )
}

export default ChatMessage