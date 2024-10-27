import { Route, Routes, useLocation } from 'react-router-dom'
import LoginComponent from './components/auth/login'
import RegloginComponent from './components/auth/reglogin'
import NavbareComponent from './components/context/navbare'
import FooterComponent from './components/context/footer'
import ScrollToTop from './components/context/scollTotop'
import ErrComponent from './components/error/err'
import Ssofar from './components/MainPage2/catalog.page/catalog_cart'
import SimpleSlider from './components/test/test.tse'
import CartDatail from './components/Navbar/Cart/cart.datail'
import Checkout from './components/Navbar/Cart/checkout'
import ProfilePersonal from './components/Navbar/profile/profile.personal'
import ProfilePersonal2page from './components/Navbar/profile/profile.2page'
import ProfilePassword from './components/Navbar/profile/profile.password'
import MenusComponent from './components/Navbar/navbar.menus.datail/menus'
// import DatailMenus from './components/Navbar/menus.datail'
import MainComponent from './components/MainPage/main'
import DatailComponent from './components/filterDatail/2datail/filterData2'
import DatailMenusID from './components/Navbar/dropdownmenus'
import DatailMenus from './components/Navbar/MenusNavbar/menus.datail'

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
        <Route path='/stol/:label' element={<Ssofar  name='furniture'/>} />

        <Route path='/stul/:id' element={<DatailComponent  names='furniture' name='Armchair, fleece' propse={true} />} /> 
        <Route path='*' element={<ErrComponent />}/>  
        <Route path='/menu/:id' element={<DatailMenusID />} />
        <Route path='/data/:id' element={<DatailMenus />}/>
        <Route path='/ul/:label' element={<MenusComponent name='New In'/>} />
        {/* <Route path='/ul/:label' element={<MenusComponent name='new In'/>} /> */}
        
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
