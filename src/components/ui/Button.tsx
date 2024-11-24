import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded text-white font-bold focus:outline-none transition';
  const variantStyles = variant === 'primary'
    ? 'bg-blue-600 hover:bg-blue-700'
    : 'bg-gray-600 hover:bg-gray-700';

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
