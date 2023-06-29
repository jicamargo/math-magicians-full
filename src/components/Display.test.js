// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from './Display';

describe('Display', () => {
  it('displays the provided result', () => {
    render(<Display result="123" />);
    expect(screen.getByText('123')).toBeInTheDocument();
  });
});