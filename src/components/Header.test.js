// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header', () => {
  it('renders the Header component', () => {
    render(<Header>Test Header</Header>);
    expect(screen.getByRole('banner')).toMatchSnapshot();
  });

  it('renders the header class correctly', () => {
    render(<Header>Test Header</Header>);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('header');
  });

  it('renders the children correctly', () => {
    render(<Header>Test Header</Header>);
    expect(screen.getByText('Test Header')).toBeInTheDocument();
  });
});
