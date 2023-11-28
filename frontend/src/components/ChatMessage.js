import React from 'react'
import pingu from '../img/pingu.png'

const ChatMessage = ( {message} ) => {
  return (
    <div className='chat-message'>
      <img src={pingu} alt='profile'/>
      <div className='chat-message-content'>
        <h3>
          {message.user}
        </h3>
        <p>
          {message.content}
        </p>
      </div>
    </div>
  )
}

export default ChatMessage