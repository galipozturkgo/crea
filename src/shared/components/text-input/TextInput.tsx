import React from 'react';
import { TextInputProps } from './TextInput.types';
import classNames from 'classnames';

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  className,
  ...props
}) => (
  <div className="space-y-2 max-w-96">
    <label>{label}</label>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={classNames('border w-full p-0.5', className)}
      {...props}
    />
  </div>
);

export default TextInput;
