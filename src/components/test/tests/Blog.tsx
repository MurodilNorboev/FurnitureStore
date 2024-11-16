import React from 'react';
import styled from 'styled-components';

const BlogWrapper = styled.section`
  padding: 50px 20px;
  text-align: center;
`;

const Blog: React.FC = () => {
  return (
    <BlogWrapper>
      <h2>Blog</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <img src="blog1.jpg" width="200" height="300" alt="Blog 1" />
        </div>
        <div>
          <img src="blog2.jpg" width="200" height="300" alt="Blog 2" />
        </div>
        <div>
          <img src="blog3.jpg" width="200" height="300" alt="Blog 3" />
        </div>
        <div>
          <img src="blog4.jpg" width="200" height="300" alt="Blog 4" />
        </div>
        <div>
          <img src="blog5.jpg" width="200" height="300" alt="Blog 5" />
        </div>
      </div>
    </BlogWrapper>
  );
};

export default Blog;
