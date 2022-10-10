import React from 'react'
import Tilt from 'react-parallax-tilt'
import './logo.css'
import { brainai } from '../../assets'

const Logo = () => {
  return (
    <div className='ma4 flex items-center'>
      <Tilt className='logotilt'>
        <div className='w-100 flex items-center'>
          <img className='brainlogo w-75' src={brainai} alt='SmartBrain' />
          <h1 className='ml2 white title'>SmartBrain</h1>
        </div>
      </Tilt>
      
    </div>


  )
}

export default Logo
