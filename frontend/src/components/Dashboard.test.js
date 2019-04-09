import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

afterEach(cleanup);

describe('<Dashboard/>', () => {
  describe('strike button', () => {
    it('increments strikes by 1 if less than 3', () => {
      const { getByText } = render(<Dashboard />);
      const strikeButton = getByText('strike');

      fireEvent.click(strikeButton);
      expect(getByText(/strikes: 1/i)).toBeInTheDocument();
    });

    it('resets strikes if clicked when strikes is 2', () => {
      const { getByText } = render(<Dashboard />);
      const strikeButton = getByText('strike');
      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);
      expect(getByText(/strikes: 0/i)).toBeInTheDocument();
    });

    it('resets balls if clicked when strikes is 2', () => {
      const { getByText } = render(<Dashboard />);
      const strikeButton = getByText('strike');
      const ballButton = getByText('ball');
      fireEvent.click(ballButton);
      expect(getByText(/balls: 1/i)).toBeInTheDocument();
      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);
      expect(getByText(/balls: 0/i)).toBeInTheDocument();
    });
  });

  describe('ball button', () => {
    it('increments balls if balls < 3', () => {
      const { getByText } = render(<Dashboard />);
      const ballButton = getByText('ball');
      fireEvent.click(ballButton);
      expect(getByText(/balls: 1/i)).toBeInTheDocument();
    });

    it('resets score if clicked when balls is 3', () => {
      const { getByText } = render(<Dashboard />);
      const strikeButton = getByText('strike');
      const ballButton = getByText('ball');
      fireEvent.click(strikeButton);
      fireEvent.click(ballButton);
      fireEvent.click(ballButton);
      fireEvent.click(ballButton);
      fireEvent.click(ballButton);
      expect(getByText(/strikes: 0/i)).toBeInTheDocument();
      expect(getByText(/balls: 0/i)).toBeInTheDocument();
    });
  });
});