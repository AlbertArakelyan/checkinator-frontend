import { FC, forwardRef } from 'react';

import { IInputProps } from './types';

const Input: FC<IInputProps> = forwardRef(
  ({ variant = 'primary', error, className = '', wrapperClassName = '', ...props }, ref = null) => {
    return (
      <div className={`input-wrapper ${wrapperClassName}`}>
        <input
          // eslint-disable-next-line
          // @ts-ignore
          ref={ref}
          className={`input input--${variant} ${error ? 'input--error' : ''} ${className}`}
          type="text"
          {...props}
        />
        {error && <span className="input__error-message">{error}</span>}
      </div>
    );
  }
);

export default Input;
