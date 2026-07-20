import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  'aria-label'?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  'aria-label': ariaLabel,
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="btn__icon btn__icon--left" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="btn__label">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="btn__icon btn__icon--right" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default Button;
