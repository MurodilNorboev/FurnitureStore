import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Data } from '../../mock/mockDatail';
import { DataType, Tname } from '../../types/maintp';
import { AnimatedButton2, BtnWrap2, ImageGrid, Sorts, TopContainer, TopContent, TopContent2} from '../categories';
import styled from 'styled-components';
import { ImageContainer, Imagecontent, PagesName, SlaiderContainer } from './catalog';
import { Image } from './catalog';
import useMediaQuery from '@mui/material/useMediaQuery';
import home from '../../../assets/home.svg'
import SortComponents from '../sort.catalog';

export const StyledPagination = styled(Stack)`
  margin-top: 20px;
  height: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default function CatalogPagecomponent(Props: Tname) {
  const isTablet = useMediaQuery('(max-width:1200px)');
  const isMobaile1 = useMediaQuery('(max-width:840px)');
  const isMobile = useMediaQuery('(max-width:550px)');

  const [page, setPage] = useState<number>(1);
  const [selectedLabel, setSelectedLabel] = useState<string | null>('mirrors');

  const ITEMS_PER_PAGE = isMobile ? 4 : isMobaile1 ? 8 : isTablet ? 12 : 16;
  const columns = isMobile ? 1 : isMobaile1 ? 2 : isTablet ? 3 : 4;
  const desiredLabels = ['mirrors', 'wall art', 'clocks', 'vases', 'storage'];
  const desiredLabels2 = ['candles', 'Shelves', 'Plant Pots', 'Bathroom Accessories'];

  const groupedData: Record<string, DataType[]> = Data.reduce((acc, item) => {
    if (desiredLabels.includes(item.label)) {
      if (!acc[item.label]) acc[item.label] = [];
      acc[item.label].push(item);
    }
    return acc;
  }, {} as Record<string, DataType[]>);

  const groupedData2: Record<string, DataType[]> = Data.reduce((acc, item) => {
    if (desiredLabels2.includes(item.label)) {
      if (!acc[item.label]) acc[item.label] = [];
      acc[item.label].push(item);
    }
    return acc;
  }, {} as Record<string, DataType[]>);

  const mergedData = { ...groupedData, ...groupedData2 };

  const currentData = selectedLabel && mergedData[selectedLabel] ? mergedData[selectedLabel] : [];
  const totalPages = Math.ceil(currentData.length / ITEMS_PER_PAGE);
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const displayedData = currentData.slice(startIdx, endIdx);

  const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <TopContainer>
      <PagesName>
        <h3>Home</h3>
        <img src={home} alt="" />
        <h4>{Props?.name}</h4>
      </PagesName>

      <div>
        <TopContent className='TopContent'>
          <div style={{display:"flex"}}>
          {Object.keys(groupedData).map((label) => (
           
              <BtnWrap2 onClick={() => setSelectedLabel(selectedLabel === label ? null : label)} key={label}>
                <AnimatedButton2>
                  <div className="catcontan">
                    <div className="catContainer">
                      <div className="cat_con_wrap">
                        {groupedData[label][0]?.images && (
                          <img src={groupedData[label][0].images} alt={label} />
                        )}
                      </div>
                      <h5>{label}</h5>
                    </div>
                  </div>
                </AnimatedButton2>
              </BtnWrap2>
           
          ))}</div>
          <div style={{display:"flex"}}>
          {Object.keys(groupedData2).map((label) => (
           
              <BtnWrap2 onClick={() => setSelectedLabel(selectedLabel === label ? null : label)} key={label}>
                <AnimatedButton2>
                  <div className="catcontan">
                    <div className="catContainer">
                      <div className="cat_con_wrap">
                        {groupedData2[label][0]?.images && (
                          <img src={groupedData2[label][0].images} alt={label} />
                        )}
                      </div>
                      <h5>{label}</h5>
                    </div>
                  </div>
                </AnimatedButton2>
              </BtnWrap2>
            
          ))}</div>
        </TopContent>
        
        <TopContent2 className='TopContent2'>
          {Object.keys(groupedData).map((label) => (
            
              <BtnWrap2 onClick={() => setSelectedLabel(selectedLabel === label ? null : label)} key={label}>
                <AnimatedButton2>
                  <div className="catcontan">
                    <div className="catContainer">
                      <div className="cat_con_wrap">
                        {groupedData[label][0]?.images && (
                          <img src={groupedData[label][0].images} alt={label} />
                        )}
                      </div>
                      <h5>{label}</h5>
                    </div>
                  </div>
                </AnimatedButton2>
              </BtnWrap2>
           
          ))}
          {Object.keys(groupedData2).map((label) => (
   
              <BtnWrap2 onClick={() => setSelectedLabel(selectedLabel === label ? null : label)} key={label}>
                <AnimatedButton2>
                  <div className="catcontan">
                    <div className="catContainer">
                      <div className="cat_con_wrap">
                        {groupedData2[label][0]?.images && (
                          <img src={groupedData2[label][0].images} alt={label} />
                        )}
                      </div>
                      <h5>{label}</h5>
                    </div>
                  </div>
                </AnimatedButton2>
              </BtnWrap2>
       
          ))}
        </TopContent2>

        <Sorts>
          <h2>Furniture</h2>
          <SortComponents />
        </Sorts>

        <SlaiderContainer className='SlaiderContainer'>
          <ImageGrid >
            {selectedLabel && displayedData.map((item) => (
              <ImageContainer key={item.id}>
                <Imagecontent>
                  <Image 
                  className='Image'
                  src={item.images} alt="" />
                  <h6></h6>
                  <h5>{item.label}</h5>
                  <h4>{item.cost}</h4>
                  </Imagecontent>
              </ImageContainer>
            ))}
          </ImageGrid>
        </SlaiderContainer>


        <StyledPagination  spacing={2}>
          <Pagination style={{position:"absolute",left:"46%"}}
            count={totalPages}
            page={page}
            onChange={handleChangePagination}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </StyledPagination>
      </div>
    </TopContainer>
  );
}





