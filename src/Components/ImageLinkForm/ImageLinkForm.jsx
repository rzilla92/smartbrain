import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ( { onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3 tc appinfo'>
        {'This Magic Brain will detect face(s) in your picture, slap it in!'}
      </p>
      <div className='center'>
       <div className='form center pa4 br4'>
        <input onChange={onInputChange} className='form-input f4 pa2 w-70' type='text' placeholder='Enter URL here'/>
        <button onClick={onButtonSubmit} className='submit w-30 f4 link ph3 pv2 dib white'>Detect</button>
       </div>
      </div>
    </div>
  )
}

export default ImageLinkForm