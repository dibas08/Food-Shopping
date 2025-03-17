import React, { useState,useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';




function Navbar({setShowLogin}) {

    const [menu , setMenu] = useState("menu");
    const {getTotalCartInput} = useContext(StoreContext)


  return (
    <div className='navbar'>
       <Link to="/"> <img src={assets.logo} alt="" className='logo' />  </Link>
        <ul className='navbar-menu'>
            <li to='/' onClick={()=>setMenu("home")} className={menu=="home"?"active":""}> home </li>
            <a href='#explore-menu'   onClick={()=>setMenu("menu")} className={menu=="menu"?"active":""}>menu</a>
            <a  href='#app-download'  onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app"?"active":""}>mobile-app</a>
            <a  href='#footer'  onClick={()=>setMenu("contact-us")} className={menu=="contact-us"?"active":""}>contact-us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="search" />
            <div className="navbar-search-icon">
                <Link to = '/cart' >
                    <img src={assets.basket_icon} alt='' />
                 </Link>
                <div className={getTotalCartInput()===0? "" :"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in </button>
        </div>
    </div>
  )
}

export default Navbar
