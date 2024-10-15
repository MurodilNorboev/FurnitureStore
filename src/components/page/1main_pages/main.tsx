import { MainCon } from '../../styles/main';
import Carousel2 from '../carousel2/carousel2';
import Carousel from './carousel';
import CategorieComponent from './categorie';
import ImgComponent from './img'

const MainComponent = () => {

  return (
    <MainCon>

      <div className='carousel22'>
      <Carousel2 />
      </div>

      <div className='carousel11'>
      <Carousel />
      </div>

    <CategorieComponent 
    name1='https://i.pinimg.com/736x/74/b1/23/74b123ff9916cfcdc6ef9cd19ab9442d.jpg'
    name2='https://target.scene7.com/is/image/Target/GUEST_10960559-bd22-42b2-8a17-7f4fef713e26?wid=488&hei=488&fmt=pjpeg'
    name3='https://www.oslodeco.no/cdn/shop/products/20130001_740x740_crop_center.png?v=1672924893'
    name4='https://mebel54.com/images/shkaf-kupe-20-27-m-dub-sonoma-v-novosibirske-6522001.jpg'
    name5='https://img.edilportale.com/product-thumbs/h_PLUME-Bed-double-bed-ESTEL-GROUP-68486-reldada7c4d.jpg'
    name6='https://alicelanehome.com/cdn/shop/files/lamp-0.jpg?v=1698850937'
    name7='https://www.ikea.com/us/en/images/products/ektandvinge-duvet-cover-and-pillowcase-s-anthracite-white-check__1315699_pe940532_s5.jpg?f=xxs'
    name8='https://target.scene7.com/is/image/Target/GUEST_366101fd-82ac-40bd-b38e-bfed86e3ded2?wid=488&hei=488&fmt=pjpeg'
    name9='https://www.heathceramics.com/cdn/shop/products/MoonstoneBasic_web_440x440_crop_center.jpg?v=1617606271'
    />

      <ImgComponent />
      
    </MainCon>
  );
};

export default MainComponent;




