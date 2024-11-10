import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { useAuth } from '@crea/shared/contexts/auth-context/AuthContext';

vi.mock('@crea/shared/contexts/auth-context/AuthContext', () => ({
  useAuth: vi.fn(),
}));

describe('ProtectedRoute Component', () => {
  it('redirects to /login if user is not authenticated', () => {
    (useAuth as Mock).mockReturnValue({ user: null });

    render(
      <MemoryRouter initialEntries={['/protected']}>
        <Routes>
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                <div>Protected content</div>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<div>Login page</div>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Login page')).toBeTruthy();
    expect(screen.queryByText('Protected content')).not.toBeTruthy();
  });

  it('renders the children if user is authenticated', () => {
    (useAuth as Mock).mockReturnValue({ user: { name: 'Test User' } });

    render(
      <MemoryRouter initialEntries={['/protected']}>
        <Routes>
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                <div>Protected content</div>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<div>Login page</div>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Protected content')).toBeTruthy();
    expect(screen.queryByText('Login page')).not.toBeTruthy();
  });
});
