import styled from "styled-components";


export const Todo = styled.div`
display: grid;
grid-template-areas: "a a a a";
`
// Simple Carousel Container
export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
`;

export const Slider_wrapper = styled.div`
padding-top: 90px;
`;

export const Slider_con = styled.div<{ slideIndex: number }>`
display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -props.slideIndex * 100}%);
height: 400px;
width: 1400px;
border: 1px solid red;
overflow: scroll;
display: flex;
padding: 20px 30px;
gap: 30px;
`;
export const CarouselItem = styled.div`
  min-width: 100%;
  height: 100%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;