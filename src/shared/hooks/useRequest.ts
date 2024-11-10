import { useState } from 'react';
import { BASE_URL } from '../utils/constants/Contants';
import { joinPaths } from '../utils/url/Url';
import { useAuth } from '../contexts/auth-context/AuthContext';

interface RequestOptions {
  url: string;
  body?: BodyInit | null;
  options?: RequestInit;
}

export const useRequest = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const request = async <T>({ url, body, options = {} }: RequestOptions) => {
    try {
      const response = await fetch(joinPaths(BASE_URL, url), {
        body,
        ...options,
        headers: {
          ...(user ? { Authorization: `Bearer ${user.token}` } : {}),
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = (await response.json()) as T;

      return data;
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { request, isLoading, hasError };
};
