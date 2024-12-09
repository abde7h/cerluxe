import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'icon' | 'sm' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'default', children, className = '', ...props }) => {
  const baseStyles = 'rounded text-white font-bold focus:outline-none transition';
  const variantStyles = variant === 'primary'
    ? 'bg-blue-600 hover:bg-blue-700'
    : 'bg-gray-600 hover:bg-gray-700';
  
  const sizeStyles = {
    'default': 'px-4 py-2',
    'icon': 'p-2',
    'sm': 'px-3 py-1 text-sm',
    'lg': 'px-6 py-3 text-lg'
  }[size];

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
