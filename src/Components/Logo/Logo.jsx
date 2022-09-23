import React from 'react'
import Tilt from 'react-parallax-tilt'
import './logo.css'
import { brainai } from '../../assets'

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='logotilt'>
        <div className='w-100 flex justify-center'>
          <img className='brainlogo w-75' src={brainai} alt='SmartBrain' />
        </div>
      </Tilt>
    </div>


  )
}

export default Logo
