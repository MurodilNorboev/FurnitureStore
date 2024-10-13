import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import LoginComponent from './components/log/login'
import RegloginComponent from './components/log/reglogin'
import NavbareComponent from './components/context/navbare'
import FooterComponent from './components/context/footer'
import ScrollToTop from './components/context/scollTotop'
import ErrComponent from './components/error/err'
import DarkVariantExample from './components/page/main_pages/main'
import DatailComponent from './components/page/main_datail/main_datail'
import CenterMode from './components/page/main_pages/lupa'
import MultiCarousel from './components/page/main_pages/lupa'
import MainComponent from './components/page/main_pages/main'
import CartComponent from './components/page/main_pages/dropdownmenus'
import BasicMenu from './components/page/main_pages/cart'
import Cartcomponent from './components/page/main_pages/dropdownmenus'
import BasicMenus from './components/page/main_pages/dropdownmenus'
import Tessta from './components/test/tests'
// import DarkVariantExample, { slides } from './components/page/main_pages/carousel'

const RouterComponent = () => {
  const loginin = useLocation();
const filterCon = loginin.pathname === "/login" || loginin.pathname === "/regLogin"
  return (
   <>
       < ScrollToTop/>

    {!filterCon &&  <NavbareComponent />}

    <Routes>
        <Route path='/login' element={<LoginComponent />}/>
        <Route path='/regLogin' element={< RegloginComponent />}/>

        <Route path='/' element={<MainComponent />}/>
        <Route path='/datail' element={<DatailComponent />} />

        <Route path='*' element={<ErrComponent />}/> 

        <Route path='/s' element={<Tessta />}/> 
    </Routes>

    {!filterCon && <FooterComponent />}
   </>
  )
}

export default RouterComponent
