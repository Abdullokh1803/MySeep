import { ButtonProps } from "~/src/types/types";


const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default', 
  size = 'medium', 
  onClick,
  disabled = false,
  className = '',
}) => {
  const variantClasses = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-100',
    filled: 'bg-blue-600 text-white hover:bg-blue-700',
    text: 'bg-transparent text-blue-500 hover:underline',
  };

  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg',
  };

  const buttonClass = `
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    rounded font-medium focus:outline-none focus:ring 
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:ring-blue-300'}
    ${className}
  `;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;