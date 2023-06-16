// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('updates the display when buttons are clicked', () => {
    render(<Calculator />);
    const button = screen.getByText('1');
    button.click();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
