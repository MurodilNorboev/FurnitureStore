import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Data } from '../../mock/mockDatail';
import { DataType, Tname } from '../../types/maintp';
import { AnimatedButton2, BtnWrap2, ImageGrid, Sorts, TopContainer, TopContent} from '../categories';
import styled from 'styled-components';
import { ImageContainer, Imagecontent, PagesName, SlaiderContainer } from './catalog';
import { Image } from './catalog';
import useMediaQuery from '@mui/material/useMediaQuery';
import home from '../../../assets/home.svg'
import { Navlink } from '../../styles/LINK';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const StyledPagination = styled(Stack)`
  margin-top: 20px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SimpleSlider = (Props: Tname) => {
  
  const isTablet = useMediaQuery('(max-width:1200px)');
  const isMobaile1 = useMediaQuery('(max-width:840px)');
  const isMobile = useMediaQuery('(max-width:550px)');
  
  const [page, setPage] = useState<number>(1);
  const [selectedLabel, setSelectedLabel] = useState<string | null>('mirrors');
  

  const ITEMS_PER_PAGE = isMobile ? 4 : isMobaile1 ? 8 : isTablet ? 12 : 16;
  const desiredLabels = ['mirrors', 'wall art', 'clocks', 'vases', 'storage', 'candles', 'Shelves', 'Plant Pots', 'Bathroom Accessories'];

  const groupedData: Record<string, DataType[]> = Data.reduce((acc, item) => {
    if (desiredLabels.includes(item.label)) {
      if (!acc[item.label]) acc[item.label] = [];
      acc[item.label].push(item);
    }
    return acc;
  }, {} as Record<string, DataType[]>);

  const currentData = selectedLabel && groupedData[selectedLabel] ? groupedData[selectedLabel] : [];
  
  const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleLabelSelection = (label: string) => {
    if (selectedLabel === label) {
      return;
    }

    setSelectedLabel(label);
    setIsFiltered(false); 
  };

  /// cost filter
  const [age, setAge] = React.useState('');
  const [filteredData, setFilteredData] = useState<DataType[]>(Data); 
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  const getCostNumber = (cost: string) => {
    return parseFloat(cost.replace('$', '').trim());
  };  
  const handleFilterAndSort = (filter: { popular?: string, new?: string, lowToHigh?: boolean, highToLow?: boolean }) => {
    let filteredArr = [...Data];
    
    if (filter.popular === 'popular') {
      filteredArr = filteredArr.filter(item => item.Popular === 'Popular');
    } else if (filter.new === 'new') {
      filteredArr = filteredArr.filter(item => item.new === 'new');
    }
    
    if (filter.lowToHigh) {
      filteredArr = filteredArr.sort((a, b) => getCostNumber(a.cost) - getCostNumber(b.cost));
    } else if (filter.highToLow) {
      filteredArr = filteredArr.sort((a, b) => getCostNumber(b.cost) - getCostNumber(a.cost));
    }
    
    setFilteredData(filteredArr);
    setIsFiltered(true); 
  };
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  
  
  const displayedData = isFiltered ? filteredData : currentData;
  const totalPages = Math.ceil(displayedData.length / ITEMS_PER_PAGE); 
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const paginatedData = displayedData.slice(startIdx, endIdx);

  return (
    <TopContainer>
      <PagesName>
        <h3>Home</h3>
        <img src={home} alt="" />
        <h4>{Props?.name}</h4>
      </PagesName>

      <div>
        <TopContent className="TopContent">
          {Object.keys(groupedData).map((label) => (
            <BtnWrap2 onClick={() => handleLabelSelection(label)} key={label}>
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
        </TopContent>

        <Sorts>
          <h2>Furniture</h2>
          <div className='FormControl'>
          <FormControl fullWidth sx={{maxWidth:"240px",width:"100vw"}}>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select sx={{borderRadius:"0px",border:"0.01px solid #D1BCB2"}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem onClick={() => handleFilterAndSort({ popular: 'popular' })} value={10}>Popular</MenuItem>
              <MenuItem onClick={() => handleFilterAndSort({ new: 'new' })} value={20}>New</MenuItem>
              <MenuItem onClick={() => handleFilterAndSort({ lowToHigh: true })} value={30}>Price: Low to High</MenuItem>
              <MenuItem onClick={() => handleFilterAndSort({ highToLow: true })} value={40}>Price: High to Low</MenuItem>
            </Select>
          </FormControl>
          <button 
              onClick={() => {
                setAge(""); 
                setFilteredData(Data); 
                setIsFiltered(false); 
              }}
            >
              Cancel
          </button>
          </div>

        </Sorts>

        <div>
          <SlaiderContainer className="SlaiderContainer">
            <ImageGrid>
              {paginatedData.map((item, ind) => (
                <ImageContainer key={item.id}>
                  <Navlink to={`/stul/${item.id}`}>
                    <Imagecontent>
                      <Image 
                        onMouseOver={(e) => (e.currentTarget.src = item.images2)}
                        onMouseOut={(e) => (e.currentTarget.src = item.images)}
                        className="Image h"
                        src={item.images} 
                        alt={`img-${ind + startIdx}`} 
                      />
                      <h6></h6>
                      <h5>{item.label}</h5>
                      <h4>{item.cost}</h4>
                    </Imagecontent>
                  </Navlink>
                </ImageContainer>
              ))}
            </ImageGrid>
          </SlaiderContainer>

          <StyledPagination spacing={2}>
            <Pagination
              style={{ position: 'absolute', left: '46%' }}
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
      </div>
    </TopContainer>
  );
};

export default SimpleSlider;


