import React from 'react'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import img2 from './images/keeplogo.png'
import img3 from './images/keep.png'
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header(props) {
  return (
    <div className='mainBox'>
        <div className='subBox1'>
            <MenuIcon onClick={props.listenToHeader} />
            <img className='img1' src={img2}  />
            <img className='img1' src={img3}  />
        </div>
        
        <div className='subBox2'>
            <SearchIcon  />
            <input id='textarea' type="text" placeholder='Search' />
            
        </div>
        <div className='subBox3'>
            <RefreshIcon  />
            <ViewStreamIcon  />
            <SettingsIcon  />
        </div>
        <div className='subBox4'>
            <AppsIcon/>
           < AccountCircleIcon  />
        </div>
        
    </div>
  )
}

export default Header