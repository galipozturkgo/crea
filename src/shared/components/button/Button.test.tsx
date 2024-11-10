import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';
import { ButtonProps } from './Button.types';

describe('Button component', () => {
  it('renders the button with label', () => {
    const props: ButtonProps = { onClick: vi.fn(), label: 'Click me' };
    render(<Button {...props} />);

    expect(screen.getByRole('button', { name: /click me/i })).toBeTruthy();
  });

  it('applies default and custom classes', () => {
    const props: ButtonProps = {
      onClick: vi.fn(),
      label: 'Test Button',
      className: 'bg-blue-500',
    };
    render(<Button {...props} />);
    const button = screen.getByRole('button');

    expect(button.getAttribute('class')).contains('border p-0.5 bg-blue-500');
  });

  it('calls the onClick handler when clicked', () => {
    const onClickMock = vi.fn();
    const props: ButtonProps = { onClick: onClickMock, label: 'Click me' };
    render(<Button {...props} />);

    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
