import { Route, Routes, useLocation } from 'react-router-dom'
import LoginComponent from './components/auth/login'
import RegloginComponent from './components/auth/reglogin'
import NavbareComponent from './components/context/navbare'
import FooterComponent from './components/context/footer'
import ScrollToTop from './components/context/scollTotop'
import ErrComponent from './components/error/err'
import DatailComponent from './components/page/2main_datail/filterData2'
import MainComponent from './components/page/1main_pages/main'
import Ssofar from './components/page/3catalog.page/catalog_cart'
import SimpleSlider from './components/test/test.tse'

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
        <Route path='/stol/:id' element={<Ssofar />} />
        <Route path='/stul/:id' element={<DatailComponent />} /> 
        <Route path='*' element={<ErrComponent />}/> 
        
        <Route path='/u' element={<SimpleSlider />}/> 
    </Routes>

    {!filterCon && <FooterComponent />}
   </>
  )
}

export default RouterComponent
