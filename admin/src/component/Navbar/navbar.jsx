import React from 'react'
import './navbar.css'
import {assets} from '../../assets/assets'

function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt='' />
        <img src={assets.profile_image} className='profile' alt="" />
    </div>
  )
}

export default Navbar