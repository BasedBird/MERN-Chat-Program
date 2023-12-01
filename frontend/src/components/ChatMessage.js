import React from 'react'
import pingu from '../img/pingu.png'

const ChatMessage = ( {message} ) => {
  return (
    <div className='chat-message'>
        <p> 
          {message.user}  {message.content}
        </p>
    </div>
  )
}

export default ChatMessage