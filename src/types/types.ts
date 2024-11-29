export interface InputWithValidationProps {
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  value: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  errorMessage?: string;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  onChange: (value: string) => void;
}

type ButtonVariant = 'default' | 'outline' | 'filled' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
