import React from 'react'
import igloo from '../img/igloo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={igloo} alt='igloo' />
        <h1>Pingu Chat!</h1>
    </div>
  )
}

export default Navbar