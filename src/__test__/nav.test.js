// Should Render Nav without crashing
// Should Render icon and navitems
// Should Render navitem
import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav';

test('Should render Nav without crashing', () => {
  render(<Nav />);
});
