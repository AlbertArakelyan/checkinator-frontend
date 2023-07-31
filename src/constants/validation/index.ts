// Typoes
import { IValidationLength, IMinValidationLength } from './types';

export const requiredMessage = 'Required';
export const emailMessage = 'Invalid email address';
export const passwordsMessage = "Passwords don't match";

export const validationLength: IValidationLength = {
  short: 64,
  base: 128,
  long: 256,
} as const;

export const minValidationLength: IMinValidationLength = {
  base: 8,
} as const;

const generateMaxLengthMessage = (length: keyof IValidationLength) => {
  return `Text is too long (maximum is ${validationLength[length]})`;
};

const generateMinLengthMessage = (length: keyof IMinValidationLength) => {
  return `At least ${minValidationLength[length]} characters needed`;
};

export const maxLengthMessage = {
  short: generateMaxLengthMessage('short'),
  base: generateMaxLengthMessage('base'),
  long: generateMaxLengthMessage('long'),
} as const;

export const minLengthMessage = {
  base: generateMinLengthMessage('base'),
} as const;
