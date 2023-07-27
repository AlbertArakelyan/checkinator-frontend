import { render } from '@testing-library/react';

import BaseLayout from '../BaseLayout';

let container: HTMLElement;

describe('BaseLayout', () => {
  beforeEach(() => {
    container = render(<BaseLayout accessToken="albert" />).container;
  });

  it('should have 1 main tag inside', () => {
    expect(container.querySelectorAll('main').length).toBe(1);
  });

  it('should have 1 header tag inside', () => {
    expect(container.querySelectorAll('header').length).toBe(1);
  });
});
