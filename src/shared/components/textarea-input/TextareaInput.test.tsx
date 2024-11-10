import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TextareaInput from './TextareaInput';

describe('TextareaInput component', () => {
  it('renders the label correctly', () => {
    render(
      <TextareaInput
        label="Test Label"
        value=""
        onChange={vi.fn()}
        placeholder="Type here"
      />
    );

    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeTruthy();
  });

  it('renders the placeholder text correctly', () => {
    render(
      <TextareaInput
        label="Test Label"
        value=""
        onChange={vi.fn()}
        placeholder="Enter your text here"
      />
    );

    const textAreaElement =
      screen.getByPlaceholderText(/Enter your text here/i);
    expect(textAreaElement).toBeTruthy();
  });

  it('renders the value correctly', () => {
    render(
      <TextareaInput
        label="Test Label"
        value="Test value"
        onChange={vi.fn()}
        placeholder="Type here"
      />
    );

    const textAreaElement = screen.getByDisplayValue(/Test value/i);
    expect(textAreaElement).toBeTruthy();
  });

  it('calls onChange function when text is typed', () => {
    const handleChange = vi.fn();

    render(
      <TextareaInput
        label="Test Label"
        value=""
        onChange={handleChange}
        placeholder="Type here"
      />
    );

    const textAreaElement = screen.getByPlaceholderText(/Type here/i);
    fireEvent.change(textAreaElement, { target: { value: 'New text' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('New text');
  });

  it('applies correct CSS classes', () => {
    render(
      <TextareaInput
        label="Test Label"
        value=""
        onChange={vi.fn()}
        placeholder="Type here"
      />
    );

    const textAreaElement = screen.getByPlaceholderText(/Type here/i);
    expect(textAreaElement.getAttribute('class')).toBe('border w-full p-0.5');
  });
});
