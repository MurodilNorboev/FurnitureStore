import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavbarWrapper = styled.nav`
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Navbar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <NavbarWrapper>
        <div>Logo</div>
        <div>Menu</div>
      </NavbarWrapper>
    </motion.div>
  );
};

export default Navbar;


