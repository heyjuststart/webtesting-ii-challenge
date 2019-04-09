import React from 'react';
import styled from 'styled-components';

const DisplayWrapper = styled.div`
  display: flex;
`;

const Display = ({ balls, strikes }) => {
  return (
    <DisplayWrapper>
      <div>Balls: {balls}</div>
      <div>Strikes: {strikes}</div>
    </DisplayWrapper>
  );
};

export default Display;
