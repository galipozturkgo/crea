import Button from '@crea/shared/components/button/Button';
import TextInput from '@crea/shared/components/text-input/TextInput';
import { useAuth } from '@crea/shared/contexts/auth-context/AuthContext';
import React, { useState } from 'react';

const Login = () => {
  const { login } = useAuth();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username && password) {
      const result = await login({ username, password });

      if (!result) {
        setError('Invalid credentials');
      }
    } else {
      setError('Field the fields');
    }
  };

  return (
    <div className="grid place-content-center">
      <div className="w-64 space-y-3">
        <h1 className="text-xl font-semibold">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <TextInput
            label="Username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={setUsername}
            autoComplete="username"
          />
          <TextInput
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
            autoComplete="current-password"
          />
          <Button label="Login" type="submit" />
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
