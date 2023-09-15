import { IPlan } from 'types';

export const mockAuthData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  password: 'test1234',
  confirmPassword: 'test1234',
};

export const mockPlansData: IPlan[] = [
  {
    _id: '1',
    name: 'Free',
    price: 0,
    color: 'primary',
    planItems: [
      {
        _id: '1',
        name: 'Happiness',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    _id: '2',
    name: 'Premium',
    price: 9.99,
    color: 'secondary',
    planItems: [
      {
        _id: '1',
        name: 'Happiness',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    _id: '3',
    name: 'Business',
    price: 19.99,
    color: 'subscription-purple',
    planItems: [
      {
        _id: '1',
        name: 'Happiness',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    _id: '4',
    name: 'Enterprise',
    price: 29.99,
    color: 'subscription-blue',
    planItems: [
      {
        _id: '1',
        name: 'Happiness',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];