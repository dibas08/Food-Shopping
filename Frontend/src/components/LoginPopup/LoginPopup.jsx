import React, { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './LoginPopup.css'
function LoginPopup({setShowLogin}) {
    const[currState,setCurrState] = useState("Login")
 
 
    return (
    <div className='Login-popup'>
        <form action="" className="login-popup-container">
            
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
            </div>
            <div className="login_popup_inputs">
              {currState === "Login" ? <></> : <input type="text" placeholder='your name ' required /> }
              <input type="email" placeholder='your email' required />
              <input type="password" placeholder='password' required />
            </div>
            <button> {currState === "Sign-Up" ? "Create Account " : "Login" } </button>
            <div className="login-popup-condition">
              <input type='checkbox' required />
              <p>By continuing , i agree to the terms of use & privacy policy . </p>
            </div>
            {currState === "Login" 
            ?<p>Create a new account ? <span onClick={()=>setCurrState("Sign-Up")} >Click Here</span></p>
            :<p>Already have an account ? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
}
         </form>  
    </div>
  )
}

export default LoginPopup