import React from 'react';
import Reset from './components/Reset';
import Dashboard from './components/Dashboard';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
`;

const App = () => {
  return (
    <AppWrapper>
      <Reset />
      <Dashboard />
    </AppWrapper>
  );
};

export default App;
