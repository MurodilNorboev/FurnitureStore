import { useEffect, useState } from "react";
import './test.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
interface ImpgSliderProps {
    imageURLS: string[];
}

const ImageSlider = ({imageURLS}: ImpgSliderProps ) => {
    const [ imagesindex, setimagesindex ] = useState(0);

    function showNextImage() {
        setimagesindex((index) => (index === imageURLS.length - 1 ? 0 : index + 1));
      }
    
      function showPrevImage() {
        setimagesindex((index) => (index === 0 ? imageURLS.length - 1 : index - 1));
      }
    
  return (
    <div style={{width:"100%", height:"100%", position:"relative"}}>
        <div style={{width:"100%", height:"100%", display:"flex",overflow:"hidden"}}>
            {imageURLS.map(url => (
                <img src={url} alt={url} 
                className="img-slider-img"
                style={{ translate: `${-100 * imagesindex}%`}}/>
            ))}
        </div>
        <button 
        className="img-btn" 
        style={{left:"0"}} 
        onClick={showPrevImage}
        aria-label="View Previos Image"
        >
            <ArrowBackIosIcon />
        </button>
        <button 
        className="img-btn" 
        style={{right:"0"}} 
        onClick={showNextImage}
        aria-label="View Next Image"
        >
            <ArrowForwardIosIcon />
        </button>
        <div 
        style={{
            position:"absolute",
            bottom:"1rem",
            left:"50%",
            translate:"-50%",
            display:"flex",
            gap:"10px",
        }}>
        {imageURLS.map((_, index) => (
            <>
            <button 
            key={index}
            className="img-slider-dot-btn"
            aria-label={`Viev image ${index}`}
            onClick={() => setimagesindex(index)}
            > 
            <div 
                style={{
                    backgroundColor: index === imagesindex ? "#ffffff" : "transparent", 
                    zIndex: 999999,
                    position:"fixed",
                    border: "1px solid white",
                    borderRadius:"50%",
                    width:"7px",
                    height:"7px",
                    margin:"-17px 0px 0px 12px",
                    cursor: "pointer",
                    padding: "0",
                  }}>
               
                </div>
                </button>
            </>
        ))}
        </div>
    </div>
  )
}

export default ImageSlider


