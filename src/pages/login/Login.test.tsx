import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';
import { useAuth } from '@crea/shared/contexts/auth-context/AuthContext';
import { Mock, vi } from 'vitest';

vi.mock('@crea/shared/contexts/auth-context/AuthContext', () => ({
  useAuth: vi.fn(),
}));

describe('Login component', () => {
  it('should display error message when fields are empty', async () => {
    const mockLogin = vi.fn();
    (useAuth as Mock).mockReturnValue({ login: mockLogin });

    render(<Login />);

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Field the fields')).toBeTruthy();
    });
  });

  it('should display error message when login credentials are invalid', async () => {
    const mockLogin = vi.fn().mockResolvedValue(false);
    (useAuth as Mock).mockReturnValue({ login: mockLogin });

    render(<Login />);

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Invalid credentials')).toBeTruthy();
    });
  });

  it('should attempt login with correct credentials', async () => {
    const mockLogin = vi.fn().mockResolvedValue(true);
    (useAuth as Mock).mockReturnValue({ login: mockLogin });

    render(<Login />);

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith({
        username: 'testuser',
        password: 'password123',
      });
    });
  });

  it('should not show error message when fields are filled correctly', async () => {
    const mockLogin = vi.fn().mockResolvedValue(true);
    (useAuth as Mock).mockReturnValue({ login: mockLogin });

    render(<Login />);

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByText('Invalid credentials')).not.toBeTruthy();
    });
  });
});
