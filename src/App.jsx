import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Placeorder from './pages/Placeorder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <Router>
            {showLogin? <LoginPopup setShowLogin={setShowLogin} />:<></>}
            <div className='app'>
                <Navbar setShowLogin={setShowLogin} />
                <Routes>
                    
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<Placeorder />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
