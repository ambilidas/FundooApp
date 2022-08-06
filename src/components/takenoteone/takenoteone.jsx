import React from 'react'
import './takenoteone.css'
import img1 from './images/newlist.png'
import img2 from './images/drawingicon.jpg'
import img3 from './images/imageicon.png'

function Takenoteone(props) {
  return (
    <div className='mainDiv' onClick={() => props.takeNoteOne()}>
      <input id='textField' type="text" placeholder='Take a note...' />
      <div className='imgBlock'>
      <img className='image1' src={img1}  />
      <img className='image' src={img2}  />
      <img className='image1'  src={img3}  />
      </div>
    </div>
  )
}

export default Takenoteone