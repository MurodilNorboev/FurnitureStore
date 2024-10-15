import { Route, Routes, useLocation } from 'react-router-dom'
import LoginComponent from './components/log/login'
import RegloginComponent from './components/log/reglogin'
import NavbareComponent from './components/context/navbare'
import FooterComponent from './components/context/footer'
import ScrollToTop from './components/context/scollTotop'
import ErrComponent from './components/error/err'
import DatailComponent from './components/page/2main_datail/filterData2'
import MainComponent from './components/page/1main_pages/main'
import Ssofar from './components/page/3catalog.page/1sofas'
import Cchairs from './components/page/3catalog.page/2chairs'
import Ttable from './components/page/3catalog.page/3table'
import Sstorage from './components/page/3catalog.page/4storage'
import Bbeds from './components/page/3catalog.page/5beds'
import Llighting from './components/page/3catalog.page/6lighting'
import Ttextiles from './components/page/3catalog.page/7textiles'
import Ddecor from './components/page/3catalog.page/8decor'
import Kkitchen from './components/page/3catalog.page/9kitchen'

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

        <Route path='/furniture1' element={<Ssofar />} />

        <Route path='/furniture2' element={<Cchairs />} />

        <Route path='/furniture3' element={<Ttable />} />

        <Route path='/furniture4' element={<Sstorage />} />

        <Route path='/furniture5' element={<Bbeds />} />

        <Route path='/furniture6' element={<Llighting />} />

        <Route path='/furniture7' element={<Ttextiles />} />

        <Route path='/furniture8' element={<Ddecor />} />

        <Route path='/furniture9' element={<Kkitchen />} />

        <Route path='/furniture/:id' element={<DatailComponent />} />

        <Route path='*' element={<ErrComponent />}/> 
    </Routes>

    {!filterCon && <FooterComponent />}
   </>
  )
}

export default RouterComponent
