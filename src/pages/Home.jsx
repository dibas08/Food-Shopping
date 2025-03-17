import React, { useState } from 'react'
import './Home.css'
import Header from './Header'
import Exploremenu from '../components/ExploreMenu/Exploremenu'
import FoodDisplay from '../components/FoodDisplay/FoodDisplay';
import AppDownload from '../components/AppDownload/AppDownload';

function Home() {

  const[category,setCategory] = useState("All");



  return (
    <div className='Home'>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home
