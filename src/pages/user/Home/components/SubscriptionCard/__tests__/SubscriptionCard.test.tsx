import { render } from '@testing-library/react';

import SubscriptionCard from '../SubscriptionCard';
import { SubscriptionCardFeature } from '../components';

import { mockPlansData } from 'tests/constants';

const planItemsContent = mockPlansData[0].planItems.map((planItem) => {
  return <SubscriptionCardFeature key={planItem._id} value={planItem.name} />;
});

describe('SubscriptionCard', () => {
  it('should contain title including word "Plan"', () => {
    const { container } = render(
      <SubscriptionCard plansItemsContent={planItemsContent} variant="primary" price={10} id="1" name="Basic" />
    );

    const title = container.querySelector('h3');

    expect(title).not.toBeNull();
    expect(title?.textContent).toContain('Plan');
  });

  it('should have list of features containing at least 1 item', () => {
    const { container } = render(
      <SubscriptionCard plansItemsContent={planItemsContent} variant="primary" price={10} id="1" name="Basic" />
    );

    const list = container.querySelector('ul');

    expect(list?.children.length).toBeGreaterThanOrEqual(1);
  });
});
