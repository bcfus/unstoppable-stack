import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Home } from '../views/Home';

it('Home renders correctly', () => {
  const home = render(<Home />);
  expect(home.getByText('To make a request to the back-end,')).toBeInTheDocument();
  expect(home.getByText('click here')).toBeInTheDocument();
});
