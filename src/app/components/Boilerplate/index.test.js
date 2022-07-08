import React from 'react';
import { render, screen } from '~tests/utils';
import Boilerplate from '.';

describe('Component.Boilerplate', () => {
  it('works', () => {
    render(<Boilerplate />);
    expect(screen.getByText(/Hello boilerplate/i)).toBeInTheDocument();
  });
});
