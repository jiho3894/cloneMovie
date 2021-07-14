import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 50px;
  margin-top: 30px;
`;

const Loader = () => 
  <Container>
    <span role="img" aria-label="Loading">
      ⏰
    </span>
  </Container>;

export default Loader;