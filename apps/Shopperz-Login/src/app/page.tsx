'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin') {
      router.push('http://localhost:3001');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="w-96 p-8 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
      >
        <h2 className="mb-6 text-2xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Login to Shopperz
        </h2>
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <Input
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            isRequired
            className="light transition duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isRequired
            className="light transition duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-full transition duration-200 hover:from-blue-700 hover:to-purple-700"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
