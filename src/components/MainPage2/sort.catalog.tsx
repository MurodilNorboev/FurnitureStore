import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import sort from '../../assets/sort.svg' 

const top100Films = [
  { title: 'Price: low to high' },
  { title: 'Price: high to low' },
  { title: 'Popular' },
  { title: 'New' },
];
const ContainerWrapper = styled.div`
display: flex;
padding: 0px;
gap: 20px;
.css-1ll44ll-MuiOutlinedInput-notchedOutline {
    border: 1px solid #D1BCB2;
    height: 45px;
    border-radius: 0%;
}
input {
    height: 10px;
    margin-top: -2.10px;
    z-index: 1000;
}
.css-1uhhrmm-MuiAutocomplete-endAdornment {
    margin-top: -2.10px;
    color: #D1BCB2;
}
label {
    margin-top: -5px;
    color: var(--middle-grey, #999);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 100% */
}
.css-1umw9bq-MuiSvgIcon-root {
    color: #D1BCB2;
}
@media screen and (max-width: 1450px){
    .Container {
        top: 105%;
        padding: 0px 0px;
        h1 {
            left: 97%;
            top: -3%;
        }
    }
}
@media screen and (max-width: 900px){
    .Container {
        top: 148%;
    }
}
@media screen and (max-width: 730px){
    .Container {
        top: 155%;
    }
}
@media screen and (max-width: 600px){
    .Container {
        top: 240%;
    }
}
`;
const Container = styled(Box)`
  border: 1px solid red;
  position: absolute;
  top: 85%;
  height: auto;
  left: 0;
  width: 100%;
  background-color: transparent; 
  box-shadow: 24;
  padding: 0px 87px;
  overflow-y: auto; 
  z-index: 1;
  h1 {
    position: absolute;
    left: 92%;
    top: -5%;
  }
`;
const Content = styled.div`
display: flex;
background-color: #FFF; 
padding: 80px;
`;
const ButtonWrap = styled.div`
    width: 107px;
    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 15px;
    button {
        width: 107px;
        height: 40px;
        border: 1px solid var(--pastel, #D1BCB2);
        background-color: transparent;
        color: var(--dark, #AD8775);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        letter-spacing: 2px;
        text-transform: uppercase;
    }
`;

export default function SortComponents() {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<string | null>(null);

  const handleOpen = (data: string) => {
    setModalData(data);
    setOpen(true);
  };
  
  const handleClose = () => setOpen(false);

  return (
    <ContainerWrapper>
      <Autocomplete 
        sx={{ width: 280,height:"56px",background:"linergradient#FFF",}}
        options={top100Films}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} label="Sort by" margin="normal" onClick={handleClose}> <img src={sort} alt="" /></TextField>
        )}
        renderOption={(props, option, { inputValue }) => {
          const { key, ...optionProps } = props;
          const matches = match(option.title, inputValue, { insideWords: true });
          const parts = parse(option.title, matches);

          return (
            <div>
            <li  key={key} {...optionProps} style={{ cursor: 'pointer'}}>
              <div onClick={() => handleOpen(option.title)}>
                {parts.map((part: { text: string; highlight: boolean }, index: number) => (
                  <span onClick={() => handleOpen(option.title)}
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 100 : 100,
                    }}
                  >
                    <div style={{width:"100vw"}}>{part.text}</div>
                  </span>
                ))}
              </div>
            </li>
            </div>
          );
        }}
      /> <ButtonWrap onClick={handleClose}><button>close</button></ButtonWrap>
      
      {open && (
          <Container className='Container' >
            
            <Content className='Content'>
                <h2>Tanlangan Ma'lumot</h2>
                <p>{modalData}</p> 
            </Content>

        </Container>
      )}
    </ContainerWrapper>
  );
}

// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import parse from 'autosuggest-highlight/parse';
// import match from 'autosuggest-highlight/match';
// import Box from '@mui/material/Box';
// import styled from 'styled-components';
// import sort from '../../assets/sort.svg' 

// const top100Films = [
//   { title: 'Price: low to high' },
//   { title: 'Price: high to low' },
//   { title: 'Popular' },
//   { title: 'New' },
// ];
// const ContainerWrapper = styled.div`
// display: flex;
// padding: 0px;
// gap: 20px;
// .css-1ll44ll-MuiOutlinedInput-notchedOutline {
//     border: 1px solid #D1BCB2;
//     height: 45px;
//     border-radius: 0%;
// }
// input {
//     height: 10px;
//     margin-top: -2.10px;
//     z-index: 1000;
// }
// .css-1uhhrmm-MuiAutocomplete-endAdornment {
//     margin-top: -2.10px;
//     color: #D1BCB2;
// }
// label {
//     margin-top: -5px;
//     color: var(--middle-grey, #999);
//     font-feature-settings: 'liga' off, 'clig' off;
//     font-family: Prompt;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 500;
//     line-height: 16px; /* 100% */
//     background-color: #FFF;
// }
// .css-1umw9bq-MuiSvgIcon-root {
//     color: #D1BCB2;
// }
// .css-113d811-MuiFormLabel-root-MuiInputLabel-root {
//     background-color: transparent;
// }
// @media screen and (max-width: 1450px){
//     .Container {
//         top: 105%;
//         padding: 0px 0px;
//         h1 {
//             left: 97%;
//             top: -3%;
//         }
//     }
// }
// @media screen and (max-width: 900px){
//     .Container {
//         top: 148%;
//     }
// }
// @media screen and (max-width: 730px){
//     .Container {
//         top: 155%;
//     }
// }
// @media screen and (max-width: 600px){
//     .Container {
//         top: 240%;
//     }
// }
// `;
// const Container = styled(Box)`
//   border: 1px solid red;
//   position: absolute;
//   top: 85%;
//   height: auto;
//   left: 0;
//   width: 100%;
//   background-color: transparent; 
//   box-shadow: 24;
//   padding: 0px 87px;
//   overflow-y: auto; 
//   z-index: 1;
//   h1 {
//     position: absolute;
//     left: 92%;
//     top: -5%;
//   }
// `;
// const Content = styled.div`
// display: flex;
// background-color: #FFF; 
// padding: 80px;
// `;
// const ButtonWrap = styled.div`
//     width: 107px;
//     display: flex;
//     justify-content: center;
//     align-content: center;
//     padding-top: 16px;
//     button {
//         width: 107px;
//         height: 40px;
//         border: 1px solid var(--pastel, #D1BCB2);
//         background: var(--white, #FFF);
//         color: var(--dark, #AD8775);
//         font-feature-settings: 'liga' off, 'clig' off;
//         font-family: Prompt;
//         font-size: 16px;
//         font-style: normal;
//         font-weight: 400;
//         line-height: 24px; /* 150% */
//         letter-spacing: 2px;
//         text-transform: uppercase;
//     }
// `;

// export default function SortComponents() {
//   const [open, setOpen] = useState(false);
//   const [modalData, setModalData] = useState<string | null>(null);

//   const handleOpen = (data: string) => {
//     setModalData(data);
//     setOpen(true);
//   };
  
//   const handleClose = () => setOpen(false);

//   return (
//     <ContainerWrapper>
//       <Autocomplete 
//         sx={{ width: 280,height:"56px",background: "linear-gradient(to bottom, transparent 30%, white 5%)"}}
//         options={top100Films}
//         getOptionLabel={(option) => option.title}
//         renderInput={(params) => (
//           <TextField {...params} label="Sort by" margin="normal" onClick={handleClose}> <img src={sort} alt="" /></TextField>
//         )}
//         renderOption={(props, option, { inputValue }) => {
//           const { key, ...optionProps } = props;
//           const matches = match(option.title, inputValue, { insideWords: true });
//           const parts = parse(option.title, matches);

//           return (
//             <>
//             <li key={key} {...optionProps} style={{ cursor: 'pointer'}} onClick={handleClose}>
//               <div onClick={() => handleOpen(option.title)}>
//                 {parts.map((part: { text: string; highlight: boolean }, index: number) => (
//                   <span
//                     key={index}
//                     style={{
//                       fontWeight: part.highlight ? 100 : 100,
//                     }}
//                   >
//                     <div>{part.text}</div>
//                   </span>
//                 ))}
//               </div>
//             </li>
//             </>
//           );
//         }}
//       /> <ButtonWrap onClick={handleClose}><button>close</button></ButtonWrap>
      
//       {open && (
//           <Container className='Container' >
            
//             <Content className='Content'>
//                 <h2>Tanlangan Ma'lumot</h2>
//                 <p>{modalData}</p> 
//             </Content>

//         </Container>
//       )}
//     </ContainerWrapper>
//   );
// }


