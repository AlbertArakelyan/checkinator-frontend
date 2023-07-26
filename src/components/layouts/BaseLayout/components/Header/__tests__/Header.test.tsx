import { render } from '@testing-library/react';

import Header from '../Header';

describe('Header', () => {
  it('should have one h1 logo', () => {
    const { container } = render(<Header />);

    expect(container.querySelectorAll('h1').length).toBe(1);
  });
});
