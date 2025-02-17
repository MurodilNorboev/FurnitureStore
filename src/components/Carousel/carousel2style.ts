import styled from "styled-components";

// carousel
export const CarouselContainer = styled.div`
position: relative;
width: 100%;
max-height: auto;
max-height: 614px;
overflow: hidden;
`;
export const CarouselWrapper = styled.div<{ translate: number }>`
display: flex;
height: 100%;
transform: translateX(${({ translate }) => translate}%);
transition: transform 1.5s ease-in-out;
`;
export const CarouselItem = styled.div`
min-width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
.imgaes {
  /* border-bottom: 10px solid white; */
  /* border-left: 5px solid white; */
} .images {
  border: 5px solid white;
  /* border-bottom: 10px solid white; */
  /* border-right: 5px solid white; */
} .line {
  color: var(--accent, #DBA514);
  width: 40px;
  height: 2px;
  margin-top: -50px;
} .cost_wrap {
display: flex;
gap: 10px;
} .testse {
      height: 104px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      color: white;
      margin-top: 290px;
      z-index: 2;
      h4 {
          color: var(--main, #32324D);
          text-align: center;
          font-feature-settings: 'liga' off, 'clig' off;
          font-family: Prompt;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 30px; /* 125% */
          letter-spacing: 3px;
          text-transform: uppercase;
      } h5 {
          color: var(--red, #F66);
          font-feature-settings: 'liga' off, 'clig' off;
          font-family: Prompt;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 26px; /* 130% */
          letter-spacing: 2px;
          text-transform: uppercase;
      } h6 {
          color: var(--pastel, #D1BCB2);
          font-feature-settings: 'liga' off, 'clig' off;
          font-family: Prompt;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 26px; /* 130% */
          letter-spacing: 2px;
          text-decoration-line: strikethrough;
          text-transform: uppercase;
      }
  }
`;
export const NavButton = styled.button`
position: absolute;
top: 50%;
transform: translateY(-50%);
background: none;
border: none;
cursor: pointer;
color: white;
z-index: 1;
font-size: 30px;

&:hover {
  color: rgba(255, 255, 255, 0.8);
}

&.prev {
  left: 20px;
}

&.next {
  right: 20px;
}
`;
export const DotsContainer = styled.div`
position: absolute;
bottom: 20px;
left: 50%;
transform: translateX(-50%);
display: flex;
gap: 10px;
`;
export const Dot = styled.button<{ $active: boolean }>`
width: 10px;
height: 10px;
border-radius: 50%;
background-color: ${({ $active }) =>
  $active ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.6)'};
border: none;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
`;
