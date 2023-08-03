import { InputHTMLAttributes } from 'react';
import { VariantType } from 'types';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
  variant?: VariantType;
  error?: string;
}
