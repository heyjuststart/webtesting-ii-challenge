import React, { useState } from 'react';
import styled from 'styled-components';

import Display from './Display';

const initialState = {
  strikes: 0,
  balls: 0
};

const DashboardWrapper = styled.div`
  display: flex;
`;

const Controls = styled.div`
  display: flex;
`;

const Dashboard = props => {
  const [dashState, setDashState] = useState(initialState);
  const { balls, strikes } = dashState;

  const handleStrike = () => {
    const { strikes } = dashState;

    if (strikes < 2) {
      setDashState({ ...dashState, strikes: strikes + 1 });
    } else {
      setDashState(initialState);
    }
  };

  const handleBall = () => {
    if (balls < 3) {
      setDashState({ ...dashState, balls: balls + 1 });
    } else {
      setDashState(initialState);
    }
  };

  const handleFoul = () => {
    if (strikes < 2) {
      setDashState({ ...dashState, strikes: strikes + 1 });
    }
  };

  const handleHit = () => {
    setDashState(initialState);
  };

  return (
    <DashboardWrapper>
      <Display balls={balls} strikes={strikes} />
      <Controls>
        <button onClick={handleStrike}>strike</button>
        <button onClick={handleBall}>ball</button>
        <button onClick={handleFoul}>foul</button>
        <button onClick={handleHit}>hit</button>
      </Controls>
    </DashboardWrapper>
  );
};

export default Dashboard;
