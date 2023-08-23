import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Link from '../Link';

describe('Link Component', () => {
  it('should render link correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Link to="/">Link</Link>
      </MemoryRouter>
    );
    const linkElement = container.querySelector('a');
    expect(linkElement).toBeInTheDocument();
  });

  it('should apply className correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Link to="/" className="custom-link" />
      </MemoryRouter>
    );
    const linkElement = container.querySelector('.custom-link');
    expect(linkElement).toBeInTheDocument();
  });

  it('should apply variant correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Link to="/" variant="primary" />
      </MemoryRouter>
    );
    const linkElement = container.querySelector('.base-button--primary');
    expect(linkElement).toBeInTheDocument();
  });
});
