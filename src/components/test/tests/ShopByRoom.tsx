import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionWrapper = styled.section`
  padding: 50px 20px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Image = styled.img<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: 0 10px;
`;

const ShopByRoom: React.FC = () => {
  return (
    <SectionWrapper>
      <h2>Shop by Room</h2>
      <ImageWrapper>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <Image src="image1.jpg" width="300px" height="500px" />
            <p>Room 1</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <Image src="image2.jpg" width="400px" height="500px" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <Image src="image3.jpg" width="300px" height="500px" />
            <p>Room 3</p>
          </div>
        </motion.div>
      </ImageWrapper>
    </SectionWrapper>
  );
};

export default ShopByRoom;


