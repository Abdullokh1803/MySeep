import { useState } from "react";
import { InputWithValidationProps } from "~/src/types/types";

const TextField: React.FC<InputWithValidationProps> = ({
  label,
  type = 'text',
  value,
  placeholder = '',
  required = false,
  minLength,
  maxLength,
  pattern,
  errorMessage = 'Invalid input',
  prevIcon,
  nextIcon,
  onChange,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleValidation = (value: string) => {
    if (required && !value) {
      setError('This field is required');
      return;
    }
    if (minLength && value.length < minLength) {
      setError(`Minimum length is ${minLength} characters`);
      return;
    }
    if (maxLength && value.length > maxLength) {
      setError(`Maximum length is ${maxLength} characters`);
      return;
    }
    if (pattern && !pattern.test(value)) {
      setError(errorMessage);
      return;
    }
    setError(null); 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    handleValidation(newValue);
  };

  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="relative flex items-center">
        {prevIcon && <span className="absolute left-3">{prevIcon}</span>}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md ${
            prevIcon ? 'pl-10' : ''
          } ${nextIcon ? 'pr-10' : ''} focus:outline-none focus:ring ${
            error ? 'border-red-500 ring-red-200' : 'border-gray-300 ring-blue-200'
          }`}
        />
        {nextIcon && <span className="absolute right-3">{nextIcon}</span>}
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default TextField;