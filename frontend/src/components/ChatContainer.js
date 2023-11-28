import React from 'react'
import ChatMessageContainer from './ChatMessageContainer'
import ChatForm from './ChatForm'

const ChatContainer = () => {
  const tempMessages = [
    {
        user: 'pongu',
        content: 'example message'
    }
  ]

  return (
    <div className='chat-container'>
      <ChatMessageContainer messages={tempMessages}/>
      <ChatForm />
    </div>
  )
}

export default ChatContainer