import { render, waitFor } from '@testing-library/react';

import Home from '../Home';
import SubscriptionCard from '../components/SubscriptionCard/SubscriptionCard';

import { mockPlansData } from 'tests/constants';

import { VariantType } from 'types';
import { SubscriptionCardFeature } from '../components/SubscriptionCard/components';

let container: HTMLElement;
let component: any;

describe('Home', () => {
  beforeEach(() => {
    const planItemsContent = mockPlansData[0].planItems.map((planItem) => {
      return <SubscriptionCardFeature key={planItem._id} value={planItem.name} />;
    });
    const plansListContent = mockPlansData.map((planItem) => {
      return (
        <SubscriptionCard
          className="home__subscription-card"
          key={planItem._id}
          id={planItem._id}
          variant={planItem.color as VariantType}
          plansItemsContent={planItemsContent}
          name={planItem.name}
          price={planItem.price}
          data-testid="subscription-card"
          handleActivateClick={jest.fn()}
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
