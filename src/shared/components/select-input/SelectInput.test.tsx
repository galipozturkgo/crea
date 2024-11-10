import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SelectInput from './SelectInput';
import { SelectInputProps } from './SelectInput.types';

describe('SelectInput component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const renderOption = (option: string) => option;

  it('renders the label correctly', () => {
    const props: SelectInputProps<string> = {
      label: 'Select an option',
      options,
      value: options[0],
      onChange: vi.fn(),
      renderOption,
    };
    render(<SelectInput {...props} />);
    expect(screen.getByText('Select an option')).toBeTruthy();
  });

  it('displays the options correctly', () => {
    const props: SelectInputProps<string> = {
      label: 'Choose:',
      options,
      value: options[0],
      onChange: vi.fn(),
      renderOption,
    };
    render(<SelectInput {...props} />);

    options.forEach((option) => {
      expect(screen.getByRole('option', { name: option })).toBeTruthy();
    });
  });

  it('calls onChange with the correct option when selected', () => {
    const onChangeMock = vi.fn();
    const props: SelectInputProps<string> = {
      label: 'Choose:',
      options,
      value: options[0],
      onChange: onChangeMock,
      renderOption,
    };
    render(<SelectInput {...props} />);

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: '1' } });

    expect(onChangeMock).toHaveBeenCalledWith(options[1]);
  });
});
