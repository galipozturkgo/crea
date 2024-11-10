import { render, act, screen, waitFor } from '@testing-library/react';
import { useRequest } from './useRequest';
import { useAuth } from '../contexts/auth-context/AuthContext';
import { Mock, vi } from 'vitest';
import { useState } from 'react';
import { BASE_URL } from '../utils/constants/Contants';

vi.mock('../contexts/auth-context/AuthContext', () => ({
  useAuth: vi.fn(),
}));

global.fetch = vi.fn();

const TestComponent = () => {
  const [text, setText] = useState<string>('');
  const { request, isLoading, hasError } = useRequest();

  const handleRequest = async () => {
    const data = await request<{ data: string }>({ url: '/test' });

    if (data) {
      setText(data.data);
    }
  };

  return (
    <div>
      <button onClick={handleRequest}>Make request</button>
      {isLoading && <div>Loading...</div>}
      {hasError && <div>Error!</div>}
      <div data-testid="response">{text}</div>
    </div>
  );
};

describe('useRequest', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should make a successful request and return data', async () => {
    const mockResponse = { data: 'test' };
    (fetch as Mock).mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValueOnce(mockResponse),
    });

    const mockUser = { token: 'valid-token' };
    (useAuth as Mock).mockReturnValue({ user: mockUser });

    render(<TestComponent />);

    act(() => {
      screen.getByText('Make request').click();
    });

    await waitFor(() => {
      expect(screen.getByTestId('response').textContent).toBe('test');
    });

    expect(fetch).toHaveBeenCalledWith(
      `${BASE_URL}/test`,
      expect.objectContaining({
        headers: { Authorization: 'Bearer valid-token' },
      })
    );
  });

  it('should handle request failure and set error state', async () => {
    const mockError = new Error('Network error');
    (fetch as Mock).mockRejectedValueOnce(mockError);

    const mockUser = { token: 'valid-token' };
    (useAuth as Mock).mockReturnValue({ user: mockUser });

    render(<TestComponent />);

    act(() => {
      screen.getByText('Make request').click();
    });

    await waitFor(() => {
      expect(screen.getByText('Error!')).toBeTruthy();
    });
  });

  it('should handle request without user token', async () => {
    const mockResponse = { data: 'test' };
    (fetch as Mock).mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValueOnce(mockResponse),
    });

    (useAuth as Mock).mockReturnValue({ user: null });

    render(<TestComponent />);

    act(() => {
      screen.getByText('Make request').click();
    });

    expect(screen.getByTestId('response').textContent).not.toBe('test');
    expect(fetch).toHaveBeenCalledWith(
      `${BASE_URL}/test`,
      expect.objectContaining({
        headers: {},
      })
    );
  });
});
