import { PagesName } from '../../components/MainPage2/catalog.page/catalog'
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

export const imges = [
    {
      id: 1,
      img: 'https://mblogthumb-phinf.pstatic.net/MjAyMTAzMTZfNTkg/MDAxNjE1ODQ4MzE5NDkz.SaP7eSBy8VK6OdnqrjJw3kSg5Lhun078uQMbxF3HXukg.86Y_etKzuDIY4J2sUxw4h2ZURDUJOkW3pSSBFlAFwGog.JPEG.ywpark5293/SmartSelect＿20210316－073930＿Google.jpg?type=w800',
      text: 'Consider the Gospel with English as 2nd Language',
      data: 'August 24, 2013'
    },
    {
      id: 2,
      img: 'https://static.onoffmix.com/afv2/thumbnail/2023/11/18/bfa23ee5ed73f4219066f7c0673b4c9e.png',
      text: 'An Ancient Journey that Affects us Today',
      data: 'October 24, 2018'
    },
    {
      id: 3,
      img: 'https://images.ams-prd.blv.cloud/eyJidWNrZXQiOiJpbWFnZXMtcHJkLTFvNHV6OXpieHd6cDF1Ym0iLCJrZXkiOiJmNDU4ZGVlMC04Yjg2LTQ0YjgtYWU5Yi01MDc2MDk4OTkwODAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ4MCwiaGVpZ2h0Ijo0ODB9fX0=',
      text: 'Conservationists oppose plans to modernise a wind',
      data: 'May 9, 2014'
    },
    {
      id: 4,
      img: 'https://image.guud.com/mall/IL/item/202405/21/S_6B934AEC776B421ABFD51A5777FF92BD.jpg',
      text: 'Consider the Gospel with English as 2nd Language',
      data: 'October 30, 2017'
    }
  ]
  export interface imgesTypes {
    id: number;
    img: string;
    text: string;
    data: string;
  }
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
export const imgess = [
    {
      id: 1,
      img: 'https://mblogthumb-phinf.pstatic.net/MjAyMTAzMTZfNTkg/MDAxNjE1ODQ4MzE5NDkz.SaP7eSBy8VK6OdnqrjJw3kSg5Lhun078uQMbxF3HXukg.86Y_etKzuDIY4J2sUxw4h2ZURDUJOkW3pSSBFlAFwGog.JPEG.ywpark5293/SmartSelect＿20210316－073930＿Google.jpg?type=w800',
      text: 'Consider the Gospel with English as 2nd Language',
      data: 'October 30, 2017'
    },
    {
      id: 2,
      img: 'https://static.onoffmix.com/afv2/thumbnail/2023/11/18/bfa23ee5ed73f4219066f7c0673b4c9e.png',
      text: 'Conservationists oppose plans to modernise a wind',
      data: 'August 24, 2013'
    },
    {
      id: 3,
      img: 'https://images.ams-prd.blv.cloud/eyJidWNrZXQiOiJpbWFnZXMtcHJkLTFvNHV6OXpieHd6cDF1Ym0iLCJrZXkiOiJmNDU4ZGVlMC04Yjg2LTQ0YjgtYWU5Yi01MDc2MDk4OTkwODAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ4MCwiaGVpZ2h0Ijo0ODB9fX0=',
      text: 'Abraham’s name became Great',
      data: 'May 9, 2014'
    },
    {
      id: 4,
      img: 'https://image.guud.com/mall/IL/item/202405/21/S_6B934AEC776B421ABFD51A5777FF92BD.jpg',
      text: 'An Ancient Journey that Affects us Today',
      data: 'October 24, 2018'
    },
    {
      id: 5,
      img: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*Iq6XcIWKbpDTCetf',
      text: 'Consider the Gospel with English as 2nd Language',
      data: 'August 24, 2013'
    },
    {
      id: 6,
      img: 'https://cdn.imweb.me/thumbnail/20220624/21bc859aa3795.jpg',
      text: 'An Ancient Journey that Affects us Today',
      data: 'October 24, 2018'
    },
    {
      id: 7,
      img: 'http://www.businessreport.kr/news/photo/202406/43968_56712_2046.jpeg',
      text: 'Abraham’s name became Great',
      data: 'May 9, 2014'
    },
    {
      id: 8,
      img: 'https://source.boomplaymusic.com/group10/M00/07/28/c5b8d30ffa564f5da12c1eb42743f31b_320_320.jpg',
      text: 'Consider the Gospel with English as 2nd Language',
      data: 'October 30, 2017'
    },
  ]
  export interface imgesTypess {
    id: number;
    img: string;
    text: string;
    data: string;
  }
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
const BlogdatailComponent = () => {
    const [ datass, setdatass ] = useState<imgesTypes[] | null>(null);
    useEffect(() => {setdatass(imges)}, [])

    const { id } = useParams();
    const [datas, setdatas] = useState<imgesTypess[] | null>(null);
    const parsenT = id ? parseInt(id): 0;
    const filter = datas?.filter((i) => i.id === parsenT)
    useEffect(() => {setdatas(imgess)}, [])

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
            {filter?.map((val) => (
                <div key={val.id}>
                    <img src={val.img} alt={val.text} />
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
      {datass?.map((val) => (
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