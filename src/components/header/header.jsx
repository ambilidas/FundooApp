import React from 'react'
import './header.css'
import img1 from './images/mainmenuIcon.png'
import img2 from './images/keeplogo.png'
import img3 from './images/keep.png'
import img4 from './images/refreash.png'
import img5 from './images/list view icon.png'
import img6 from './images/settings.jpg'
import img7 from './images/appsicon.png'
import img8 from './images/accounticon.png'
import img9 from './images/searchicon.jpg'
function Header(props) {
  return (
    <div className='mainBox'>
        <div className='subBox1'>
            <img className='img1' src={img1} onClick={props.listenToHeader} />
            <img className='img1' src={img2}  />
            <img className='img1' src={img3}  />
        </div>
        <div className='subBox2'>
             <img className='img' src={img9}  />
            <input id='textarea' type="text" placeholder='Search' />
            
        </div>
        <div className='subBox3'>
            <img className='img1' src={img4}  />
            <img className='img1' src={img5}  />
            <img className='img1' src={img6}  />
        </div>
        <div className='subBox4'>
            <img className='img1' src={img7}  />
            <img className='img1' src={img8}  />
        </div>
    </div>
  )
}

export default Header