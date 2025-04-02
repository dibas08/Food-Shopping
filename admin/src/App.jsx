import React from 'react'
import Navbar from './component/Navbar/navbar'
import Sidebar from './component/Sidebar/sidebar'
import { Routes,Route } from 'react-router-dom'
import Add from './pages/Add/add'
import List from './pages/List/list'
import Order from './pages/Orders/order'
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer } from 'react-toastify';


function App() {
  const URL = "http://localhost:4000";
  return (
    <div>
      <ToastContainer/>
        <Navbar/>
        <hr/>
        <div className="app-content">
          <Sidebar/>
          <Routes>
            <Route path="/add" element={<Add url={URL}/>}/>
            <Route path="/list" element={<List URL={URL}/>}/>
            <Route path="/order" element={<Order URL={URL}/>}/>
          </Routes>
        </div>
    </div>
  )
}

export default App