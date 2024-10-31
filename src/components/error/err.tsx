import { ErrorCon, ErrorContent, ErrorMidl, ErroroContainer } from './errStyle'
import UNA from '../../assets/Logo.svg';
import circle from '../../assets/circlewhite.svg';
import { BtnWrap4 } from '../styles/main';
import { Navlink } from '../styles/LINK';

const ErrComponent = () => {
  return (
    <ErroroContainer>
      <div className='top_UNA'><img src={UNA} alt="" /></div>
      <ErrorContent>
        
        <ErrorCon>
          <ErrorMidl>
            <h5>404 error</h5>
            <h2>page not found</h2>
            <p>Sorry, something went wrong and page not found. <br /> Check the link or try later</p>
            <Navlink to={'/'}>
              <BtnWrap4>
                <div className='wrapper'>
                  <button>go to mainpage <img src={circle} alt="" /></button>
                </div>
              </BtnWrap4>
            </Navlink>
          </ErrorMidl>
        </ErrorCon>
      </ErrorContent>
    </ErroroContainer>
  )
}

export default ErrComponent