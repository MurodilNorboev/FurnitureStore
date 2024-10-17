import React, { useEffect, useState } from 'react';
import mebel from '../../../assets/mebel9.jpg';
import mebels from '../../../assets/mebel7.avif';
import mebelse from '../../../assets/mebel5.jpg';
import stul from '../../../assets/stul.webp';
import stul2 from '../../../assets/stul2.jpg';
import stul3 from '../../../assets/stul3.webp';
import { Images } from '../../types/maintp';
import { CarouselContainer, CarouselItem, CarouselWrapper, Dot, DotsContainer, NavButton } from './carousel2style';

const slides = [
  {
    srcset: mebelse
  },
  {
    srcset: stul,
    texts: 'Quiet micro velvet chair',
    cost: '$370',
    skidka: '$300',
    line: "________"
  },
  {
    srcset: mebel
  },
  {
    srcset: stul2,
    texts: 'Quiet micro velvet chair',
    cost: '$370',
    skidka: '$300',
    line: "  ________"
  },
  {
    srcset: mebels
  },
  {
    srcset: stul3,
    texts: 'Quiet micro velvet chair',
    cost: '$370',
    skidka: '$300',
    line: "  ________"
  },
];

const Carousel2: React.FC<Images> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const allSlides = [...slides, ...(props.name || [])];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    if (currentIndex === allSlides.length - 1) {
      setCurrentIndex(0);
      setTranslate(0);
    } else {
      setCurrentIndex(currentIndex + 1);
      setTranslate(translate - 100);
    }
  };

  const goToPrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(allSlides.length - 1);
      setTranslate(-100 * (allSlides.length - 1));
    } else {
      setCurrentIndex(currentIndex - 1);
      setTranslate(translate + 100);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setTranslate(-100 * index);
  };

  return (
    <>
      <CarouselContainer>
        <CarouselWrapper translate={translate}>
          {allSlides.map((slide, index) => (
            <CarouselItem key={index}>
                <img 
                  className='images'
                  style={{width: '100%',height:"100%" }} 
                  src={slide.srcset}
                  alt={slide.texts}
                />
                <div className='testse'>
                  <div className='line'>{slide.line}</div>
                  <h4>{slide.texts}</h4>
                  <div className='cost_wrap'>
                    <h5>{slide.cost}</h5>
                    <h6>{slide.skidka}</h6>
                  </div>
                </div>
            </CarouselItem>
          ))}
        </CarouselWrapper>

        <NavButton className="prev" onClick={goToPrev}>
          &#10094;
        </NavButton>
        <NavButton className="next" onClick={goToNext}>
          &#10095;
        </NavButton>

        <DotsContainer>
          {allSlides.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsContainer>
      </CarouselContainer>
    </>
  );
};

export default Carousel2;
