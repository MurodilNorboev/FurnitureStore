import { Route, Routes, useLocation } from 'react-router-dom'
import LoginComponent from './components/auth/login'
import RegloginComponent from './components/auth/reglogin'
import NavbareComponent from './components/context/navbare'
import FooterComponent from './components/context/footer'
import ScrollToTop from './components/context/scollTotop'
import ErrComponent from './components/error/err'
import DatailComponent from './components/page/2datail/filterData2'
import MainComponent from './components/page/main'
import Ssofar from './components/page/3catalog.page/catalog_cart'
import SimpleSlider from './components/test/test.tse'
import ShopBYroom from './components/page/1pages/3shopBYroom'
import CartDatail from './components/page/0pages.datail/cart.datail'
import Checkout from './components/page/0pages.datail/checkout'
import ProfilePersonal from './components/page/profile/profile.personal'
import ProfilePersonal2page from './components/page/profile/profile.2page'
import ProfilePassword from './components/page/profile/profile.password'

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
        <Route path='/stol/:id' element={<Ssofar name='furniture' />} />
        <Route path='/stul/:id' element={<DatailComponent name='Armchair, fleece' />} /> 
        <Route path='*' element={<ErrComponent />}/> 
        
        <Route path='/u' element={<SimpleSlider />}/> 
        <Route path='/cart' element={<CartDatail name='Cart' />}/>
        <Route path='/chekout' element={<Checkout name='Checkout' />}/>

        <Route path='/profile' element={<ProfilePersonal name='profile' />}/>
        <Route path='/profile2' element={<ProfilePersonal2page name='profile' />}/>
        <Route path='/profilePassword' element={<ProfilePassword name='profile' />}/>
    </Routes>

    {!filterCon && <FooterComponent />}
   </>
  )
}

export default RouterComponent
