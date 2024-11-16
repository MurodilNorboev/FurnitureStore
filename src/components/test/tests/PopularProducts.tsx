import React from 'react';
import styled from 'styled-components';

const PopularProductsWrapper = styled.section`
  padding: 50px 20px;
  text-align: center;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
`;

const PopularProducts: React.FC = () => {
  return (
    <PopularProductsWrapper>
      <h2>Popular Products</h2>
      <div>
        <Button>View All</Button>
        <Button>Shop Now</Button>
      </div>
      <div style={{ marginTop: '30px', display: 'flex' }}>
        <div style={{ width: '300px', height: '500px', background: 'purple' }} />
        <div style={{ width: '300px', height: '500px', background: 'orange' }} />
        <div style={{ width: '300px', height: '500px', background: 'yellow' }} />
      </div>
    </PopularProductsWrapper>
  );
};

export default PopularProducts;
