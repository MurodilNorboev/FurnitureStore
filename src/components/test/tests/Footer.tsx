import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <p>Email: example@example.com</p>
      <a href="https://example.com" style={{ color: 'white' }}>
        Visit our website
      </a>
    </FooterWrapper>
  );
};

export default Footer;
