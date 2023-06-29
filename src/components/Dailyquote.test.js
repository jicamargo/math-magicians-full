// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import Dailyquote from './Dailyquote';

describe('Dailyquote', () => {
  beforeAll(() => {
    fetchMock.enableMocks();
  });

  fetchMock.mockResponseOnce(JSON.stringify({ quote: 'Daily quote' }));
  
  it('displays the loading message initially', () => {
    render(<Dailyquote />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  afterEach(() => {
    fetchMock.resetMocks();
  });
});
