import React from 'react'
import Navbar from './components/Navbar/Navbar'
// import { Route, Routes } from 'react-router-dom'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'


import Contact from './pages/Contact/Contact'
import Services from './pages/Services/Services'
import About from './pages/AboutUs/About'


// import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          < Route path='/' element={<Home />} />
          < Route path='/cart' element={<Cart />} />
          < Route path='/order' element={<PlaceOrder />} />
          < Route path='/contact' element={<Contact />} />
          < Route path='/menu' element={<Services />} />
          < Route path='/About' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
