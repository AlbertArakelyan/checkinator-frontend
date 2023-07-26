import { render } from '@testing-library/react';

import SubscriptionCard from '../SubscriptionCard';

describe('SubscriptionCard', () => {
  it('should contain title including word "Plan"', () => {
    const { container } = render(<SubscriptionCard variant="primary" />);

    const title = container.querySelector('h3');

    expect(title).not.toBeNull();
    expect(title?.textContent).toContain('Plan');
  });

  it('should have list of features containing at least 1 item', () => {
    const { container } = render(<SubscriptionCard variant="primary" />);

    const list = container.querySelector('ul');

    expect(list?.children.length).toBeGreaterThanOrEqual(1);
  });
});
