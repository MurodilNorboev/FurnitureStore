import { BtnWrap3, ImgCons } from '../../styles/main'
import React, { useState, useEffect } from 'react';
import '../../styles/maine.css'
import { Navlink } from '../../styles/LINK';
import { imges, imgesTypes } from '../../../FOOTER/blog/blog.mock';


const ImgComponent: React.FC = () => {
  const [data, setdata] = useState<imgesTypes[] | null>(null);
  useEffect(() => {setdata(imges)}, []);
  const filter = data?.slice(8)
  return (
    <>
        <div className='wraps sd'>
            <h2 ></h2>
            <h4>blog</h4>
        </div>
        <ImgCons>
          <div className="img_wrap_con2">
            {filter?.map((val, ind) => (
              <Navlink to={`/blogdatail/${val.id}`} key={ind}>
                <BtnWrap3>
                  <div key={ind} className="imagesshadow">
                    <div className="img_hei">
                      <img
                        src={val.img}
                        alt=""
                      />
                    </div>
                  </div>
                </BtnWrap3> 
              </Navlink>
            ))}
          </div>
        </ImgCons> 
    </>
  );
};

export default ImgComponent; 






