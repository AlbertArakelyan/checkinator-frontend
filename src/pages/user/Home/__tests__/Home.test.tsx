import { render, waitFor } from '@testing-library/react';

import Home from '../Home';
import { SubscriptionCard } from '../components/SubscriptionCard';

import { mockPlansData } from 'tests/constants';

import { VariantType } from 'types';

let container: HTMLElement;
let component: any;

describe('Home', () => {
  beforeEach(() => {
    const plansListContent = mockPlansData.map((planItem) => {
      return (
        <SubscriptionCard
          className="home__subscription-card"
          key={planItem._id}
          id={planItem._id}
          variant={planItem.color as VariantType}
          planItems={planItem.planItems}
          name={planItem.name}
          price={planItem.price}
          data-testid="subscription-card"
        />
      );
    });
    ({ container, ...component } = render(<Home plansListContent={plansListContent} />));
  });

  it('should have 1 h2 tag inside', () => {
    expect(container.querySelectorAll('h2').length).toBe(1);
  });

  it('should have 4 subscription cards', async () => {
    const { getAllByTestId } = component;
    await waitFor(() => {
      const subscriptionCards = getAllByTestId('subscription-card');
      expect(subscriptionCards.length).toBe(4);
    });
  });

  // TODO make tests advanced by checking the content inside
});
