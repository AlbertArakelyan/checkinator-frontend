import { render } from '@testing-library/react';

import Input from '../Input';

describe('Input Component', () => {
  it('should render children correctly', () => {
    const { container } = render(<Input />);
    const inputElement = container.querySelector('input');
    expect(inputElement).toBeInTheDocument();
  });

  it('should apply className correctly', () => {
    const { container } = render(<Input className="custom-input" />);
    const inputElement = container.querySelector('.input.custom-input');
    expect(inputElement).toBeInTheDocument();
  });

  it('should apply wrapperClassName correctly', () => {
    const { container } = render(<Input wrapperClassName="wrapper" />);
    const inputElement = container.querySelector('.input-wrapper.wrapper');
    expect(inputElement).toBeInTheDocument();
  });

  it('should display error message', () => {
    const { getByText } = render(<Input error="Invalid input" />);
    const errorMessage = getByText('Invalid input');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should display variant correctly', () => {
    const { container } = render(<Input variant="secondary" />);
    const inputElement = container.querySelector('.input--secondary');
    expect(inputElement).toBeInTheDocument();
  });
});
