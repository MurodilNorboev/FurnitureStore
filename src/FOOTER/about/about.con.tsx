import { PagesName } from '../../components/main.all_categorie/catalog.page/catalog'
import { AboutChief, AboutContainer, AboutContent, AboutContent2, CarouselItem, CloseButton, ImageContainer, ModalContainer, ModalOverlay } from './about.Style'
import home from '../../assets/home.svg'
import { useEffect, useState } from 'react';
import { BtnWrap4, CarouselContainer, Carouselimgwrapp, CarouselTrack, DotsContainer } from '../../components/styles/main';
import { IconButton } from '@mui/material';
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import icon5 from '../../assets/icon5.svg'
import icon6 from '../../assets/icon6.svg'
import icon7 from '../../assets/icon7.svg'


export const Modal = ({ imgSrc, onClose }: { imgSrc: string, onClose: () => void }) => {
  return ( /// onClick={onClose}
    <ModalOverlay>
      <ModalContainer className='ModalContainer'>
        <img src={imgSrc} alt="Modal Tasvir" />
      <CloseButton className='CloseButton' onClick={onClose}>X</CloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

const datatest = [
  {
    id: 1,
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRc4pnwZFPQJ1d3p3mZh_S6PvKU9xHbmVhN-aXG6n6i2cBXqPMw',
    text: 'ebro bedside table',
    cost: '$250',
    seil: 'ebro bedside table'
  },
  {
    id: 2,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Jama_Masjid_-_In_the_Noon.jpg/1200px-Jama_Masjid_-_In_the_Noon.jpg',
    text: 'Tirado chair',
    cost: '$280',
    seil: 'ebro bedside table',
  },
  {
    id: 3,
    img: 'https://www.salutbyebye.com/wp-content/uploads/2020/02/arche-port-blanc-roche-percee.jpg',
    text: 'caleido lamp',
    cost: '$355',
    seil: 'ebro bedside table',
  },
  {
    id: 4,
    img: 'https://www.salutbyebye.com/wp-content/uploads/2020/03/rochefort-en-terre.jpg',
    text: 'caleido lamp',
    cost: '$240',
    seil: 'ebro bedside table',
  },
  {
    id: 5,
    img: 'https://www.salutbyebye.com/wp-content/uploads/2020/03/roscoff-bretagne.jpg',
    text: 'emmi set',
    cost: '$200',
    seil: 'ebro bedside table',
  },
  {
    id: 6,
    img: 'https://lifeinmadinah.wordpress.com/wp-content/uploads/2015/08/al_masjid_al_nabawi-1440x900.jpg?w=640',
    text: 'textiles',
    cost: '$260',
    seil: 'ebro bedside table',
  },
  {
    id: 7,
    img: 'https://media.licdn.com/dms/image/v2/C5612AQFpHl-P5B52yA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1549991766865?e=2147483647&v=beta&t=fz-7k0C9RV6-Zc3r0YRYxlduYtsW3F90lEywv54XmWY',
    text: 'Sofas set',
    cost: '$230',
    seil: 'ebro bedside table',
  },
];
interface datatestT {
  id: number;
  img: string;
  text: string;
  cost: string;
  seil: string;
}
const AboutComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState('');

  const handleImageClick = (src: string) => {
    setModalImgSrc(src);  
    setIsModalOpen(true);  
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [ data, setdata ] = useState<datatestT[] | null>(null);
  useEffect(() => {setdata(datatest)},[])
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(3); 
  const [isHovered, setIsHovered] = useState<boolean>(false); 

  const totalSlides = 7; 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 550) {
        setSlidesToShow(1); 
      } else if (window.innerWidth <= 900) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 1500) {
        setSlidesToShow(3); 
      } else {
        setSlidesToShow(3); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) return; 
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); 
    return () => clearInterval(intervalId); 
  }, [isHovered, slideIndex]);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % (totalSlides - slidesToShow + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides - slidesToShow + 1) % (totalSlides - slidesToShow + 1));
  };

return (
    <AboutContainer>
      <PagesName>
        <h3>Home</h3>
        <img src={home} alt="Home icon" />
        <h4>About</h4>
      </PagesName>

      <AboutContent>
        <div className='about'><h1>About</h1></div>
        <div className='imgwrap'>
          <img src="https://images.cdn.inspogroup.net/0XbrysNuRMmLDw6MnFEYm6MFMuRBQVa3lX0UNMRhuY0/aHR0c/DovL3/N0eW1hZ2F6aW5lLndwZW5naW5lLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMy9SWl9IT1JfY29sbG92LWhvbWUtZGVzaWduLTRfalFMNEpDUzk4LXVuc3BsYXNoLmpwZw" alt="" />
        </div>
      </AboutContent>

      <AboutContent2 className='AboutContent2'>
        <div className="textCon">
          <h2>Focus on Canada An introduction to Canada in intermediate-levelEnglish</h2>
        </div>
        <div className="textCon">
          <h3>There is something else promised as well. The blessing was not only for Abraham. It says that “all peoples on earth will be blessed through you” (through Abraham). We should pay attention because you and I are part of ‘all peoples on earth’ – no matter what our religion, color, background, nationality, social status, or what language we speak.</h3>
        </div>
        <div className="textCon">
          <h3>Why? A look at Israel’s history in the book of Genesis in the Bible reveals that 4000 years ago a man, who is now very well known, went on a camping trip in that part of the world.  The Bible says that his story affects our future. This ancient man is Abraham (also known as Abram).  We can take his story seriously because the places and cities he visited are mentioned in other old writings.</h3>
        </div>
      </AboutContent2>

      <AboutChief>
       <h4></h4>
       <h5>why you should choose us</h5>
      </AboutChief>

      <AboutContent className='AboutContent002'>

      <div className="wrap">
       <div className="catalog">
          <BtnWrap4>
            <div className="menus">
                <img src={icon1} alt="" />
                <h6>Best furniture shop in 2021</h6>
            </div>
          </BtnWrap4>
          <BtnWrap4>
            <div className="menus">
                <img src={icon2} alt="" />
                <h6>500+ happy clients</h6>
            </div>
          </BtnWrap4>
          <BtnWrap4>
            <div className="menus">
                <img src={icon3} alt="" />
                <h6>rich assortment</h6>
            </div>
          </BtnWrap4>
          <BtnWrap4>
            <div className="menus">
                <img src={icon4} alt="" />
                <h6>100% natural and quality</h6>
            </div>
          </BtnWrap4>
       </div>

       <div className="catalog">
          <BtnWrap4>
            <div className="menus">
                <img src={icon5} alt="" />
                <h6>10+ years of experience</h6>
            </div>
          </BtnWrap4>
          <BtnWrap4>
            <div className="menus">
                <img src={icon6} alt="" />
                <h6>modern design</h6>
            </div>
          </BtnWrap4>
          <BtnWrap4>
            <div className="menus">
                <img src={icon7} alt="" />
                <h6>profitable prices</h6>
            </div>
          </BtnWrap4>
       </div>
       </div>

       <div className="p2">
          <BtnWrap4>
            <div className="menus">
                <img src={icon1} alt="" />
                <h6>Best furniture shop in 2021</h6>
            </div>
          </BtnWrap4>
          <BtnWrap4>
            <div className="menus">
                <img src={icon2} alt="" />
                <h6>500+ happy clients</h6>
            </div>
          </BtnWrap4>
          <BtnWrap4>
            <div className="menus">
                <img src={icon3} alt="" />
                <h6>rich assortment</h6>
            </div>
          </BtnWrap4>
          <BtnWrap4>
            <div className="menus">
                <img src={icon4} alt="" />
                <h6>100% natural and quality</h6>
            </div>
          </BtnWrap4>

          <BtnWrap4>
            <div className="menus">
                <img src={icon5} alt="" />
                <h6>10+ years of experience</h6>
            </div>
          </BtnWrap4>
          <BtnWrap4>
            <div className="menus">
                <img src={icon6} alt="" />
                <h6>modern design</h6>
            </div>
          </BtnWrap4>
          <BtnWrap4>
            <div className="menus">
                <img src={icon7} alt="" />
                <h6>profitable prices</h6>
            </div>
          </BtnWrap4>
      
       </div>
      </AboutContent>

      <AboutChief>
       <h4></h4>
       <h5>Conservationists oppose plans <br /> to modernise a wind</h5>
       <p>There is something else promised as well. The blessing was not only for Abraham. It says that “all peoples on earth will be blessed through you” (through Abraham). We should pay attention because you and I are part of ‘all peoples on earth’ – no matter what our religion, color, background, nationality, social status, or what language we speak.</p>
      </AboutChief>

      <CarouselContainer
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      >
        <CarouselTrack $slideIndex={slideIndex} $slidesToShow={slidesToShow} className='CarouselTrack'>
          <>
        {data?.map((val, ind) => (
            <CarouselItem key={ind}>
             <ImageContainer>
              <BtnWrap4>
              <Carouselimgwrapp>
               <img key={val.id}
                      src={val.img}
                      alt={val.img}
                      onClick={() => handleImageClick(val.img)} />
              </Carouselimgwrapp>
              </BtnWrap4>
              </ImageContainer>
            </CarouselItem>
        ))} 
        </>
        </CarouselTrack>
          
      <DotsContainer style={{display:"flex",justifyContent:"center",marginTop:"30px"}}>
           <div style={{display:"flex",gap:"10px",alignItems:"center"}}>

           <div className="bottom">
          <IconButton onClick={prevSlide} className='name'>
            ❮
          </IconButton>
          </div>
          <div className="bottom">
          <IconButton onClick={nextSlide} className='name'>
            ❯
          </IconButton>
          </div>
           </div>
      </DotsContainer>
      </CarouselContainer>
      {isModalOpen && <Modal imgSrc={modalImgSrc} onClose={closeModal} />}

    </AboutContainer>
  )
}

export default AboutComponent