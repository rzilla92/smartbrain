import React from 'react'
import Logo from '../Logo/Logo'

const Navigation = ({onRouteChange , isSignedIn}) => {
    if(isSignedIn) {
      return (
      <nav className='flex justify-between items-center'>
        <Logo />
        <p onClick={() => onRouteChange('signout')} className='f3 ma4 link dim white underline pa3 pointer'>Sign Out</p>
      </nav>
      )
    } else {
      return (
      <nav className='flex justify-between items-center'>
        <Logo />
        <div className='flex flex-row items-end'>
        <p onClick={() => onRouteChange('register')} className='f3 ma4 link dim white underline pa3 pointer'>Register</p>
        <p onClick={() => onRouteChange('signin')} className='f3 ma4 link dim white underline pa3 pointer'>Sign In</p>
        </div>
        
      </nav>
      )
    }
}

export default Navigation