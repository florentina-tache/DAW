import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

interface Props {
  children?: React.ReactNode;
  href?: string;
  size?: string;
  inverse?: boolean;
  danger?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  to?: string;
  type?: 'button' | 'submit' | undefined;
  disabled?: boolean;
}

const Button = ({
  children,
  href,
  size,
  inverse,
  danger,
  onClick,
  to,
  type,
  disabled,
}: Props) => {
  if (href) {
    return (
      <a
        className={`button button--${size || 'default'} ${
          inverse && 'button--inverse'
        } ${danger && 'button--danger'}`}
        href={href}
      >
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link
        to={to}
        className={`button button--${size || 'default'} ${
          inverse && 'button--inverse'
        } ${danger && 'button--danger'}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${size || 'default'} ${
        inverse && 'button--inverse'
      } ${danger && 'button--danger'}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
