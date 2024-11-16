import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  background: #ccc;
`;

const Carousel: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <CarouselWrapper>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          style={{ display: 'flex', width: '300%' }}
        >
          <div style={{ width: '100%', height: '500px', background: 'red' }} />
          <div style={{ width: '100%', height: '500px', background: 'green' }} />
          <div style={{ width: '100%', height: '500px', background: 'blue' }} />
        </motion.div>
      </CarouselWrapper>
    </motion.div>
  );
};

export default Carousel;

