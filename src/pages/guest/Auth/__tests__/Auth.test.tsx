import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import Auth from '../Auth';

import { mockAuthData } from 'tests/constants';

describe('Auth', () => {
  it('should work correctly for sign up', async () => {
    const mockHandleFormSubmit = jest.fn();

    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <Auth
          isSignUp={true}
          handleToggleIsSignUp={jest.fn()}
          handleFormSubmit={jest.fn()}
          errors={{}}
          register={jest.fn()}
          handleSubmit={mockHandleFormSubmit}
          verificationData={null}
          loading={false}
        />
      </MemoryRouter>
    );

    // Interact with input fields
    fireEvent.change(getByLabelText('First Name'), { target: { value: mockAuthData.firstName } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: mockAuthData.lastName } });
    fireEvent.change(getByLabelText('Email'), { target: { value: mockAuthData.email } });
    fireEvent.change(getByLabelText('Password'), { target: { value: mockAuthData.password } });
    fireEvent.change(getByLabelText('Confirm Password'), { target: { value: mockAuthData.confirmPassword } });

    // Submit the form
    await act(async () => {
      fireEvent.click(getByText('Sign Up'));
    });

    // Check if the form submission function was called
    expect(mockHandleFormSubmit).toHaveBeenCalled();
  });

  it('should work correctly for sign in', async () => {
    const mockHandleFormSubmit = jest.fn();

    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <Auth
          isSignUp={false}
          handleToggleIsSignUp={jest.fn()}
          handleFormSubmit={jest.fn()}
          errors={{}}
          register={jest.fn()}
          handleSubmit={mockHandleFormSubmit}
          verificationData={null}
          loading={false}
        />
      </MemoryRouter>
    );

    // Interact with input fields
    fireEvent.change(getByLabelText('Email'), { target: { value: mockAuthData.email } });
    fireEvent.change(getByLabelText('Password'), { target: { value: mockAuthData.password } });

    // Submit the form
    await act(async () => {
      fireEvent.click(getByText('Sign In'));
    });

    // Check if the form submission function was called
    expect(mockHandleFormSubmit).toHaveBeenCalled();
  });

  it('should contain link to forgot password', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Auth
          isSignUp={false}
          handleToggleIsSignUp={jest.fn()}
          handleFormSubmit={jest.fn()}
          errors={{}}
          register={jest.fn()}
          handleSubmit={jest.fn()}
          verificationData={null}
          loading={false}
        />
      </MemoryRouter>
    );

    const link = getByText(/Forgot password\?/i);
    expect(link).toBeTruthy();
  });
});
