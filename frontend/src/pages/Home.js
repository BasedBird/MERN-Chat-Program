import React from 'react'
import Navbar from '../components/Navbar'
import ChatContainer from '../components/ChatContainer'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='App'>
        <Navbar />
        <ChatContainer />
        <Footer />
    </div>
  )
}

export default Home