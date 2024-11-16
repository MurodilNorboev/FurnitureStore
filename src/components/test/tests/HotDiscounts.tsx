import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 50px 20px;
  text-align: center;
`;

const HotDiscounts: React.FC = () => {
  return (
    <SectionWrapper>
      <h2>Hot Discounts</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <img src="image1.jpg" alt="Discount 1" width="300" height="500" />
          <p>Discount 1</p>
        </div>
        <div>
          <img src="image2.jpg" alt="Discount 2" width="400" height="500" />
        </div>
        <div>
          <img src="image3.jpg" alt="Discount 3" width="300" height="500" />
          <p>Discount 3</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HotDiscounts;
