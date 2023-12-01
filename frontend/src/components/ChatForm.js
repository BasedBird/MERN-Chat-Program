import React from 'react'
import { useState } from 'react'

const ChatForm = ( {addMessage} ) => {
const [user, setUser] = useState('pongu')
const [content, setContent] = useState('')

const onSubmit = (e) => {
  e.preventDefault()
  const temp = {
    user: user,
    content: content
  }
  addMessage(temp)
  document.getElementById('input').value = '';
  setContent('')
}

const onEnter = (e) => {
  if (e.keyCode == 13) onSubmit(e)
}



  return (
    <div className='chat-input'>
      <input 
        type='text' 
        id='input'
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={onEnter}
      />
      <button className='chat-button' onClick={onSubmit}>
        Submit
      </button>
    </div>
  )
}

export default ChatForm