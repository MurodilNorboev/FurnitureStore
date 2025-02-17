import { PagesName } from '../../components/main.all_categorie/catalog.page/catalog'
import { AboutContent,  CarouselItem, CloseButton, ImageContainer, ModalContainer, ModalOverlay } from '../about/about.Style'
import home from '../../assets/home.svg'
import { useEffect, useState } from 'react';
import { BtnWrap4, CarouselContainer, Carouselimgwrapp, CarouselTrack, DotsContainer } from '../../components/styles/main';
import { IconButton } from '@mui/material';
import { useParams } from 'react-router-dom';
import { AboutChief, AboutContainer, BlogComponent, BlogConent, BlogContainerwrap, BlogDatailContainer, BlogDatailContent } from './blog.Style';
import fasebook from '../../assets/fasebook.svg'
import tgr from '../../assets/tgram.svg'
import twitter from '../../assets/twitter.svg'
import { Navlink } from '../../components/styles/LINK';
import { imges, imgesTypes } from './blog.mock';


export const Modal = ({ imgSrc, onClose }: { imgSrc: string, onClose: () => void }) => {
  return ( 
    <ModalOverlay>
      <ModalContainer className='ModalContainer'>
        <img src={imgSrc} alt="Modal Tasvir" />
      <CloseButton className='CloseButton' onClick={onClose}>X</CloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

const BlogdatailComponent = () => {
  const { id } = useParams();
  const [data, setdata] = useState<imgesTypes[] | null>(null);
  const parsenT = id ? parseInt(id): 0;
  
  const filter = data?.filter((i) => i.id === parsenT);
  useEffect(() => {setdata(imges)}, [])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState('');

  const handleImageClick = (src: string) => {
    setModalImgSrc(src);  
    setIsModalOpen(true);  
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(3); 
  const [isHovered, setIsHovered] = useState<boolean>(false); 

  const totalSlides = 13; 
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

  const selectedImgs = data?.slice(0, 4)
return (
    <AboutContainer>

        <PagesName style={{display:"grid"}}>
            <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
               <h3>Home</h3>
               <img src={home} alt="Home icon" />
               <h3>Blog</h3>
               <img src={home} alt="Home icon" />
               <h4>Conservationists oppose plans to modernise a wind</h4>
            </div>
         </PagesName>

      <BlogDatailContent>
      <AboutContent>
        <div className='imgwrap'>
            {filter?.map((val, ind) => (
                <div key={`${val.id}`}>
                    <img src={`${val.img}`} alt='img' />
                </div>
            ))}
        </div>
      </AboutContent>
       
        <AboutChief>
             <h4></h4>
             <h5>Conservationists oppose plans <br /> to modernise a wind</h5>
             <h6>August 24, 2013</h6>
             <p>There is something else promised as well. The blessing was not only for Abraham. It says that “all peoples on earth will be blessed through you” (through Abraham). We should pay attention because you and I are part of ‘all peoples on earth’ – no matter what our religion, color, background, nationality, social status, or what language we speak.  This promise for a blessing includes everybody alive today!  How?  When?  What kind of blessing? This is not clearly stated here but since we know that the first parts of this promise have come true, we can have confidence that this last part will also come true. We find the key to unlock this mystery by continuing to follow the journey of Abraham in our next article.</p>
             <h3>The Journey that still shakes the World</h3>
             <p>The Jews who descended from Abraham were never really the nation we associate with greatness.  They did not conquer and build a great empire like the Romans did or build large monuments like the Egyptians did with the pyramids. Their fame comes from the Law and Book which they wrote; from some remarkable individuals that were Jewish; and that they have survived as a somewhat different people group for thousands of years.  Their greatness is not because of anything they did, but rather what was done to and through them.  The promise says repeatedly “I will …” – that would be the power behind the promise.  Their unique greatness happened because God made it happen rather than some ability, conquest or power of their own.
             The Jews who descended from Abraham were never really the nation we associate with greatness.  They did not conquer and build a great empire like the Romans did or build large monuments like the Egyptians did with the pyramids. Their fame comes from the Law and Book which they wrote; from some remarkable individuals that were Jewish; and that they have survived as a somewhat different people group for thousands of years.  Their greatness is not because of anything they did, but rather what was done to and through them.  The promise says repeatedly “I will …” – that would be the power behind the promise.  Their unique greatness happened because God made it happen rather than some ability, conquest or power of their own.</p>
       </AboutChief>

      </BlogDatailContent>

      <div style={{background:"#FFF",paddingBottom:"100px"}}>
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
               <img style={{width:"100vw",padding:"5px",border:"0.01px solid gray"}} key={val.id}
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
        <AboutChief>
             <h2>Abraham were never really the nation we associate with greatness</h2>
       </AboutChief>
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
      
       <AboutChief className='AboutChief'>
             <h5>The Sign of the Branch: The Dead</h5>
             <p>The Jews who descended from Abraham were never really the nation we associate with greatness.  They did not conquer and build a great empire like the Romans did or build large monuments like the Egyptians did with the pyramids. Their fame comes from the Law and Book which they wrote; from some remarkable individuals that were Jewish; and that they have survived as a somewhat different people group for thousands of years.  Their greatness is not because of anything they did, but rather what was done to and through them.  The promise says repeatedly “I will …” – that would be the power behind the promise.  Their unique greatness happened because God made it happen rather than some ability, conquest or power of their own.</p>
             <div className='line'></div>
             <div className='bottom'>
                <div className="menus">
                    <h1>Share post</h1>
                    <div className='imgwrap'>
                       <img src={fasebook} alt="" />
                       <img src={tgr} alt="" />
                       <img src={twitter} alt="" />
                    </div>
                </div>
                <div className="menus">
                    <h1>Author:</h1>
                    <h2>Jane foster</h2>
                </div>
             </div>
       </AboutChief>
       </div>

       <BlogContainerwrap  style={{marginBottom:"0px",paddingTop:"100px"}}>
       <AboutChief>
             <h5>You may also like</h5>
       </AboutChief>
    <BlogComponent className='BlogComponent'>
      {selectedImgs?.map((val) => (
          <BlogConent key={val.id}>
            <img src={val.img} alt="" />
            <h4></h4>
            <h5>{val.text}</h5>
            <h6>{val.data}</h6>
          </BlogConent>
      ))}
    </BlogComponent>
       </BlogContainerwrap>

    </AboutContainer>
  )
}

export default BlogdatailComponent