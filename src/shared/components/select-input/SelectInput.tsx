import React from 'react';
import { SelectInputProps } from './SelectInput.types';

const SelectInput = <T,>({
  label,
  options,
  value,
  onChange,
  renderOption,
}: SelectInputProps<T>) => (
  <div>
    <label>{label}</label>
    <select
      value={String(value)}
      className="block border"
      onChange={(e) => onChange(options[parseInt(e.target.value)])}
    >
      {options.map((option, index) => (
        <option key={index} value={index}>
          {renderOption(option)}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
