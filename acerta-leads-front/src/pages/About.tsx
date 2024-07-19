import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e0e0e0;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <h1>About Page</h1>
      <Link to="/">Go to Home</Link>
    </AboutContainer>
  );
};

export default About;
