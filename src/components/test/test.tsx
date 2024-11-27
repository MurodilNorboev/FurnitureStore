import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { DataType } from '../types/maintp';
import { Data } from '../mock/mockDatail'

// const Data = [
//   { id: 1, cost: '$100', Popular: 'Popular', new: 'new' },
//   { id: 2, cost: '$500', Popular: 'Not Popular', new: 'new' },
//   { id: 3, cost: '$800', Popular: 'Popular', new: 'old' },
//   { id: 4, cost: '$300', Popular: 'Not Popular', new: 'new' },
//   { id: 5, cost: '$1200', Popular: 'Popular', new: 'old' },
// ];

const MyComponent = () => {
  const [filteredData, setFilteredData] = useState(Data); 
  const [value, setValue] = useState([0, 1000]); 
  const getCostNumber = (cost: string) => parseFloat(cost.replace('$', '').trim());

  const handleFilterByCost = () => { // filterni tartiblash
    const [minCost, maxCost] = value;
    const filteredArr = Data.filter(item => {
      const costNumber = getCostNumber(item.cost);
      return costNumber >= minCost && costNumber <= maxCost;
    });
    setFilteredData(filteredArr);
  };

  const handleChange = (event: Event, newValue: number | number[]) => { /// slider qiymatlarini ozgartirish 
    setValue(newValue as number[]);
  };

  return (
    <div style={{paddingTop:"90px"}}>
      <h3>Filter by Cost</h3>

      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `$${value}`}
        min={0}
        max={1000}
        step={1}
        getAriaLabel={() => 'Price range'}
      />

      <div>
        <button onClick={() => alert(`Min Price: $${value[0]}`)}>${value[0]}</button>
        <button onClick={() => alert(`Max Price: $${value[1]}`)}>${value[1]}</button>
      </div>

      <button onClick={handleFilterByCost}>Filter by Cost</button>

      <div>
        {filteredData.map(item => (
          <div key={item.id}>
            <p>{item.Popular} - {item.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;






