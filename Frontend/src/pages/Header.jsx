import React, { useState } from 'react';
import './Header.css';
import { food_list } from '../assets/frontend_assets/assets';
import { Link, useNavigate } from "react-router-dom";

function Header() {
  

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a deleatable array of dishes crafted with the finest ingeredients and culinary . out mission is to satisfy your craving and elevate your dining experience ,.  </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
