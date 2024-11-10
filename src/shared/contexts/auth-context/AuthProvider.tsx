'use client';

import { useEffect, useState } from 'react';
import { AuthContext, AuthUser, LoginForm } from './AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { useRequest } from '@crea/shared/hooks/useRequest';

interface AuthProviderProps {
  children: React.ReactNode;
}

const decodeToken = (token: string) => {
  try {
    const decoded = jwtDecode<JwtPayload & { name: string }>(token);

    if (decoded && decoded.exp && decoded.exp < Date.now() / 1000) {
      return null;
    }

    return decoded;
  } catch (error) {
    console.error('Token decoding failed', error);
    return null;
  }
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { request } = useRequest();

  const [user, setUser] = useState<AuthUser>();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const payload = decodeToken(token);

      if (payload) {
        setUser({ token, user: payload.name });
        navigate(pathname !== '/login' ? pathname : '/');
      } else {
        logout();
      }
    }
  }, []);

  const login = async ({ username, password }: LoginForm) => {
    const res = await request<{ token: string }>({
      url: '/login',
      options: { method: 'POST' },
      body: JSON.stringify({ username, password }),
    });

    if (res) {
      const decoded = decodeToken(res.token);

      if (decoded) {
        localStorage.setItem('token', res.token);
        setUser({ token: res.token, user: decoded.name });
        navigate('/');
        return true;
      }

      return false;
    } else {
      console.error('Login failed', res);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(undefined);
    navigate('/login', { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
