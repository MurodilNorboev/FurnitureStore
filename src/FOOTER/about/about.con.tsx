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
    img: 'https://www.imgcomfort.com/dk/-/media/imgsite/category/nseries/diecut/n050namsos25sperspectivet410blkaluleg.png?la=da&h=423&w=749&mw=790&hash=30A03E1527A369B14E14C785AAC2564C',
    text: 'ebro bedside table',
    cost: '$250',
    seil: 'ebro bedside table'
  },
  {
    id: 2,
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'Tirado chair',
    cost: '$280',
    seil: 'ebro bedside table',
  },
  {
    id: 3,
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'caleido lamp',
    cost: '$355',
    seil: 'ebro bedside table',
  },
  {
    id: 4,
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'caleido lamp',
    cost: '$240',
    seil: 'ebro bedside table',
  },
  {
    id: 5,
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'emmi set',
    cost: '$200',
    seil: 'ebro bedside table',
  },
  {
    id: 6,
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'textiles',
    cost: '$260',
    seil: 'ebro bedside table',
  },
  {
    id: 7,
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'Sofas set',
    cost: '$230',
    seil: 'ebro bedside table',
  },
  {
    id: 8,
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'beds set',
    cost: '$210',
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

  const totalSlides = 8; 
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
          <img src="https://scontent.ficn3-3.fna.fbcdn.net/v/t1.6435-9/119049245_2711115725779940_4780711629906655890_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=NjRqnW_LlwEQ7kNvgGHaN8a&_nc_zt=23&_nc_ht=scontent.ficn3-3.fna&_nc_gid=AKgmG0i2HZYZxtlK6tTlWx-&oh=00_AYAzzuu9FukPbPUaRSkjOEoKnrzY_ItaLFIpFpr15GP_Kw&oe=675EB744" alt="" />
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
        <CarouselTrack slideIndex={slideIndex} slidesToShow={slidesToShow} className='CarouselTrack'>
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