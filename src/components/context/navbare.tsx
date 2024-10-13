import { AnimatedButton, BtnWrap, NavbarCon } from '../styles/navbar';
import UNA from '../../assets/Logo.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import search from '../../assets/search.svg'
import user from '../../assets/user.svg'
import Menus_Icon from '../hook/menus';
import MultiCarousel from '../page/main_pages/lupa';
import BasicMenu from '../page/main_pages/cart';
import Tajriba from '../page/main_pages/dropdownmenus';
// import Tajriba from '../page/main_pages/menusdropdown';

const NavbareComponent = () => {
  return (
    <NavbarCon>
      <div className='leftCon_wrap'>
     <div className='menu_icon_wrap'>< Menus_Icon /></div>
      <div><img className='ab' src={UNA} alt="Logo" /></div>

      <div className="left_menus_wrap">
          <Tajriba />
      </div>

      </div>

      <div></div>

      <div className="right_menus_wrap">
        <h5 className='h5_wrap' style={{paddingBottom:"8px",margin:"0px 0px 0px 0px"}}>(704) 555-0127</h5>

           <div style={{width:"30px"}}>
            <MultiCarousel />
           </div>

           <BtnWrap>
           <AnimatedButton>
           <img src={user} alt="" style={{marginBottom:"10px"}}/>
           </AnimatedButton>
           </BtnWrap>

           <BasicMenu />

      </div>
    </NavbarCon>
  );
}
export default NavbareComponent;