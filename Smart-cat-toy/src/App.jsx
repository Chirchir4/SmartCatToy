import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from './pages/HomePage';
import Shop from './pages/ShoppingPage/Shop';
import Footer from './pages/partials/Footer';
import NavBar from './pages/partials/Navbar';
import Cart from './pages/ShoppingPage/Cart';
import { setCartItems } from './redux/cart/cart.slice';
import Terms from './pages/Terms';
import Product from './pages/ShoppingPage/OrderPage';

function App() {



  return (
    <div className='bg-white text-gray-950 overflow-x-hidden font-poppins'>
      <NavBar/>
    <Routes>
    <Route  path="/" element={<Home />} />
    <Route  path="/shop" element={<Shop />} />
    <Route  path="/product" element={<Product />} />
    <Route  path="/cart" element={<Cart/>} />
    <Route  path="/Terms" element={<Terms/>} />
  </Routes>
  <Footer/>
    </div>
  )
}

export default App
