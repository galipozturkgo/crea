export interface SelectInputProps<T> {
  label: string;
  options: T[];
  value: T;
  onChange: (value: T) => void;
  renderOption: (option: T) => string;
}
