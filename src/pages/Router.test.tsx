import { render, screen } from '@testing-library/react';
import Router from './Router';
import { MemoryRouter } from 'react-router-dom';
import { useAuth } from '@crea/shared/contexts/auth-context/AuthContext';
import { Mock } from 'vitest';

vi.mock('@crea/shared/contexts/auth-context/AuthContext', () => ({
  useAuth: vi.fn(),
}));

describe('Router', () => {
  it('should render Login component when navigating to /login', () => {
    (useAuth as Mock).mockReturnValue({ user: null, logout: vi.fn() });

    render(
      <MemoryRouter initialEntries={['/login']}>
        <Router />
      </MemoryRouter>
    );

    expect(screen.getByRole('button').textContent).toBe('Login');
  });
});
