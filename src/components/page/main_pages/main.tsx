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

    <CategorieComponent />

      <ImgComponent />
      
    </MainCon>
  );
};

export default MainComponent;




