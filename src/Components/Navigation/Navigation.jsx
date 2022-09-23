import React from 'react'
import Logo from '../Logo/Logo'

const Navigation = () => {
  return (
    <nav className='flex justify-between items-center'>
      <Logo />
      <h1 className='white title'>SmartBrain</h1>
      <p className='f3 ma4 link dim black underline pa3 pointer'>Sign Out</p>
    </nav>
  )
}

export default Navigation