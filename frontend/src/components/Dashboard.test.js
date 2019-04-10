import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import Dashboard from './Dashboard';

afterEach(cleanup);

describe('<Dashboard/>', () => {
  const setup = () => {
    const utils = render(<Dashboard />);
    const strikeButton = utils.getByText('strike');
    const ballButton = utils.getByText('ball');
    const foulButton = utils.getByText('foul');
    const hitButton = utils.getByText('hit');

    return {
      strikeButton,
      ballButton,
      foulButton,
      hitButton,
      ...utils
    };
  };

  describe('strike button', () => {
    it('renders without crashing', () => {
      render(<Dashboard />);
    });

    it('increments strikes by 1 if less than 3', () => {
      const { getByText, strikeButton } = setup();

      fireEvent.click(strikeButton);
      getByText(/strikes: 1/i);
    });

    it('resets strikes if clicked when strikes is 2', () => {
      const { getByText, strikeButton } = setup();
      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);
      getByText(/strikes: 0/i);
    });

    it('resets balls if clicked when strikes is 2', () => {
      const { getByText, strikeButton, ballButton } = setup();
      fireEvent.click(ballButton);
      getByText(/balls: 1/i);
      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);
      getByText(/balls: 0/i);
    });
  });

  describe('ball button', () => {
    it('increments balls if balls < 3', () => {
      const { getByText, ballButton } = setup();
      fireEvent.click(ballButton);
      getByText(/balls: 1/i);
    });

    it('resets score if clicked when balls is 3', () => {
      const { getByText, strikeButton, ballButton } = setup();
      fireEvent.click(strikeButton);
      fireEvent.click(ballButton);
      fireEvent.click(ballButton);
      fireEvent.click(ballButton);
      fireEvent.click(ballButton);
      getByText(/strikes: 0/i);
      getByText(/balls: 0/i);
    });
  });

  describe('foul button', () => {
    it('increments strikes by 1 if strikes < 2', () => {
      const { getByText, foulButton, strikeButton } = setup();
      fireEvent.click(strikeButton);
      fireEvent.click(foulButton);

      getByText(/strikes: 2/i);
    });

    it('stops incrementing strikes when strikes is 2', () => {
      const { getByText, foulButton, strikeButton } = setup();
      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);
      fireEvent.click(foulButton);

      getByText(/strikes: 2/i);
    });
  });

  describe('hit button', () => {
    it('resets score when clicked', () => {
      const {
        getByText,
        foulButton,
        strikeButton,
        ballButton,
        hitButton
      } = setup();
      fireEvent.click(strikeButton);
      fireEvent.click(ballButton);
      fireEvent.click(foulButton);
      fireEvent.click(hitButton);
      getByText(/strikes: 0/i);
      getByText(/balls: 0/i);
    });
  });
});
