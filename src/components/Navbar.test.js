// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders the Navbar component', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByRole('navigation')).toMatchSnapshot();
  });

  it('renders the navigation links correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const navLinks = screen.getAllByRole('link');

    const expectedLinks = [
      { path: 'Home', text: 'Home' },
      { path: 'Calc', text: 'Calculator' },
      { path: 'Quote', text: 'Quote' },
    ];

    navLinks.forEach((navLink, index) => {
      expect(navLink.getAttribute('href')).toEqual(`/${expectedLinks[index].path}`);
      expect(navLink.textContent).toEqual(expectedLinks[index].text);
    });
  });

  it('renders the logo text correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText('Math Magicians')).toBeInTheDocument();
  });
});
