'use client';

import { createContext, useContext } from 'react';

export interface LoginForm {
  username: string;
  password: string;
}

export interface AuthUser {
  token: string;
  user: string;
}

interface AuthContextProps {
  user?: AuthUser;
  login: (form: LoginForm) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  login: () => Promise.resolve(false),
  logout: () => null,
});

export const useAuth = () => {
  return useContext(AuthContext);
};
