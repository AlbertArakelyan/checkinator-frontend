import { render, fireEvent } from '@testing-library/react';

import Button from '../Button';

describe('Button Component', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<Button>Hello World</Button>);
    const buttonElement = getByText('Hello World');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should apply className correctly', () => {
    const { container } = render(<Button className="some-class">Hello World</Button>);
    const buttonElement = container.querySelector('.base-button.some-class');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Hello World</Button>);
    const buttonElement = getByText('Hello World');

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalled();
  });

  it('displays correct variant', () => {
    const { getByText } = render(<Button variant="primary">Primary Button</Button>);
    const buttonElement = getByText('Primary Button');
    expect(buttonElement).toHaveClass('base-button--primary');
  });
});
