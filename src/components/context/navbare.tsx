import UNA from '../../assets/Logo.svg';
import { AnimatedButton, BtnWrap, NavbarCon } from '../styles/navbar';
import userimg from '../../assets/user.svg'
import Menus_Icon from '../Drawer/menus';
import MultiCarousel from '../Navbar/Cart/lupa';
import BasicMenu from '../Navbar/Cart/cart';
import Tajriba from '../Navbar/dropdownmenus';
import { Navlink } from '../styles/LINK';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseAPI } from '../../utils/constanst';

const NavbareComponent = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(`${baseAPI}/userFur/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <NavbarCon>
      <div className='leftCon_wrap'>

     <div className='menu_icon_wrap'>
      < Menus_Icon />
      </div>

      <Navlink to={'/'}>
      <div>
        <img className='ab' src={UNA} alt="Logo" />
      </div>
      </Navlink>

      <div className="left_menus_wrap">
          <Tajriba />
      </div>

      </div>

      <div></div>

      <div className="right_menus_wrap">
        <h5 className='h5_wrap' style={{paddingBottom:"8px",margin:"0px 0px 0px 0px"}}>(8210) 5714-7887</h5>

           <div style={{width:"30px"}}>
            <MultiCarousel />
           </div>

            <Navlink to={profile ? '/profile' : '/login'}> 
             <BtnWrap>
            <AnimatedButton>
            <img src={userimg} alt="" style={{marginBottom:"10px"}}/>
            </AnimatedButton>
            </BtnWrap>
            </Navlink> 

           <Navlink to={"/cart"}>
           <BasicMenu />
           </Navlink>

      </div>
    </NavbarCon>
  );
}
export default NavbareComponent;
