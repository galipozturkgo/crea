import React from 'react';
import { TextareaInputProps } from './TextareaInput.types';

const TextareaInput: React.FC<TextareaInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => (
  <div className="space-y-2 max-w-96">
    <label>{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="border w-full p-0.5"
    />
  </div>
);

export default TextareaInput;
