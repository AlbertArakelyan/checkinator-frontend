import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import VerifyEmail from '../VerifyEmail';

describe('VerifyEmail', () => {
  it('should work correctly for passed verification', () => {
    const { getByText, getByRole } = render(
      <MemoryRouter>
        <VerifyEmail error={null} loading={false} showLogInLink={true} isVerificationPassed={true} />
      </MemoryRouter>
    );

    const verifiedText = getByText(/Email verified successfully\./i);
    const logInLink = getByRole('link');

    expect(verifiedText).toBeTruthy();
    expect(logInLink).toBeTruthy();
  });
});
