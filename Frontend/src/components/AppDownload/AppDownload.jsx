import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets'


function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
        <p>for better experience download ,<br /> Tommato App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt=''>
            </img>
            <img src={assets.app_store}>
            </img>
        </div>

    </div>
  )
}

export default AppDownload