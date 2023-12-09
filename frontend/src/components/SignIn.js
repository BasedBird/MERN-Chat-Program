import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'

const DEFAULT_PORT = '3000'

const SignIn = () => {
  const [ username, setUsername ] = useState('')
  const [ ip, setIP ] = useState('')
  const [ port, setPort ] = useState(DEFAULT_PORT)

  const { user, setUser } = useContext( UserContext )
  
  return (
    <div>
      <input
        type='text'
        placeholder='Username'
        onChange={(e) => {
          setUsername(e.target.value)
        }}
      />
      <input
        type='text'
        placeholder='IP Address'
        onChange={(e) => {
          setIP(e.target.value)
        }}
      />
      <input
        type='text'
        placeholder='Port'
        value={DEFAULT_PORT}
        onChange={(e) => {
          setPort(e.target.value)
        }}
      />
      <button onClick={async () => {
        if (username === ""){
          setUser({
            ...user, 
            username: 'guest',
            isSignedIn: true})
        } else {
          setUser({
            ...user, 
            username: username,
            isSignedIn: true})
        }
      }}>Submit</button>
    </div>
  )
}

export default SignIn