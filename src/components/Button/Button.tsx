import React from 'react';
import './Button.css';

interface ButtonProps {
  className?: string;
  backgroundColor?: string;
  color?: string;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  backgroundColor,
  label,
  color,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={className}
      type="button"
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </button>
  );
};
