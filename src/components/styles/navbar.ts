import styled from "styled-components";

export const NavbarCon = styled.div`
display: flex;
width: 100%;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    width: 100%;
    background-color: white;
    position: fixed;
    z-index: 999; 
    box-shadow: rgba(237, 228, 224, 0.25) 0px 14px 28px, 
            rgba(237, 228, 224, 0.22) 0px 10px 10px !important;
.motionDiv {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    width: 100%;
    background-color: white;
    position: fixed;
    z-index: 999; 
    box-shadow: rgba(237, 228, 224, 0.25) 0px 14px 28px, 
            rgba(237, 228, 224, 0.22) 0px 10px 10px !important;
}

.menu_icon_wrap {
    display: none;
} .ab {
    margin-right: 30px;
} .leftCon_wrap {
    display: flex;
    align-items: center;
} .left_menus_wrap {
display: flex;
gap: 20px;
} 
.right_menus_wrap {
    display: flex;
    align-items: end;
    margin-top: -5px;
    cursor: pointer;
    gap: 10px;
    button {
        cursor: pointer;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        width: 30px;
        height: 30px;
        background: transparent;
        transform: rotate(2px);
    } h5 {
        padding-bottom: 5px;
        margin-right: 10px;
        color: #32324D;
        stroke-width: 1px;
        stroke: var(--accent, #DBA514);
        border-bottom: 2px solid #DBA514;
    }
    .cartes {
        display: flex;
        border-radius: 100%;
        border: .10px solid #AD8775;
    } 
    /* .cartes :hover {
        border-bottom: 2px solid  #DBA514;
    } */
}
@media only screen and (max-width: 1200px) {
    .left_menus_wrap {
        display: none;
    } .ab {
        margin-left: 10px;
    } .menu_icon_wrap {
    display: flex;
    } 
}
@media only screen and (max-width: 500px) {
    .h5_wrap {
        display: none;
    }
}
`
//button
export const BtnWrap = styled.div`
text-align: center;
height: 30px;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #DBA514;
  }
  transition: transform 0.2s ease; 
  &:active {
    transform: scale(1.1); 
  } 
`
export const AnimatedButton = styled.button`
    display: flex;
    align-items: center;
    color: var(--dark, #AD8775);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; 
    letter-spacing: 2px;
    text-transform: uppercase;
    border: none;
    background: transparent;
`;

