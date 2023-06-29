// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders the Button component', () => {
    render(<Button text="Click Me" onClick={() => {}} />);
    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('calls the onClick handler when the button is clicked', () => {
    const onClickMock = jest.fn();
    render(<Button text="Click Me" onClick={onClickMock} />);
    const buttonElement = screen.getByRole('button');
    buttonElement.click();
    expect(onClickMock).toHaveBeenCalled();
  });
});