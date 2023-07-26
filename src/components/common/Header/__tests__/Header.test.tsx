import { render, screen, within } from '@testing-library/react';

import Header from '../Header';

describe('Header', () => {
  it('should have one h1 logo', () => {
    render(<Header />);

    const logo = screen.getAllByRole('heading');

    expect(logo).toHaveLength(1);
  });
});