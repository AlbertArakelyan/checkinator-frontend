import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Success from '../Success';

describe('Success', () => {
  it('should contain text "Payment Successful"', function () {
    const { container } = render(
      <MemoryRouter>
        <Success />
      </MemoryRouter>
    );

    const title = container.querySelector('h2');
    expect(title?.textContent).toContain('Payment Successful');
  });
});
