import ReactImageMagnify from 'react-image-magnify';
import img from '../../assets/mebel2.jpg'; // O'zingizning rasmni import qilasiz

const ImageSlider = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Product Image with Zoom</h2>
      <ReactImageMagnify 
        {...{
          smallImage: {
            alt: 'Product Image', // Tasvir nomi
            isFluidWidth: true,    // Rasmning kengligini ekranga moslashtirish
            src: img,              // O'zingizning rasm manzilingiz
            width: 300,            // Rasmning kichik versiyasining kengligi
            height: 300,           // Rasmning kichik versiyasining balandligi
          },
          largeImage: {
            src: img,              // Katta rasm manzili
            width: 1200,            // Katta rasmning kengligi
            height: 800,            // Katta rasmning balandligi
          },
        }}
      />
    </div>
  );
};

export default ImageSlider;


