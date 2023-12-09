import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import pingu from '../img/pingu.png'

const ChatMessage = ( {message} ) => {
  const { user } = useContext( UserContext )
  return (
    <div className='chat-message'>
        <p> 
          <span>{message.user}:  {message.content}</span>
        </p>
    </div>
  )
}

export default ChatMessage