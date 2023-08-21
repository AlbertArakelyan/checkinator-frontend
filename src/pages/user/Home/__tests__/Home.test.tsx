import { render, RenderResult } from '@testing-library/react';

import Home from '../Home';

let container: HTMLElement;
let component: any;

describe('Home', () => {
  beforeEach(() => {
    ({ container, ...component } = render(<Home />));
  });

  it('should have 1 h2 tag inside', () => {
    expect(container.querySelectorAll('h2').length).toBe(1);
  });

  it('should have 4 subscription cards', () => {
    const { getAllByTestId } = component;
    const subscriptionCards = getAllByTestId('subscription-card');
    expect(subscriptionCards.length).toBe(4);
  });
});
