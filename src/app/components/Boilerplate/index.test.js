import { render, screen } from '@testing-library/react';
import React from 'react';
import Boilerplate from '.';

describe('Component.Boilerplate', () => {
  it('works', () => {
    render(<Boilerplate />);
    expect(screen.getByText(/Hello jest/i)).toBeInTheDocument();
  });
});
