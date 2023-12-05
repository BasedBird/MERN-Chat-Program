import React from 'react'
import Navbar from '../components/Navbar'
import ChatContainer from '../components/ChatContainer'
import SignIn from '../components/SignIn'
import Footer from '../components/Footer'
import { useState } from 'react'
import { UserContext } from '../context/UserContext'

const Home = () => {
  const [ user, setUser ] = useState({
    username: 'guest',
    ip: '',
    port: '',
    isSignedIn: false
  })

  return (
    <div className='App'>
        <Navbar />
        <UserContext.Provider  value={{user, setUser}}>
          { user.isSignedIn ? <ChatContainer /> : <SignIn />}
        </UserContext.Provider>
        <Footer />
    </div>
  )
}

export default Home