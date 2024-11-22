"use client";
import React, { useEffect, useState } from 'react';
import { Button } from '../../components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase'; // Make sure auth is correctly initialized here
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Use the hook to sign in
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
  };

  const handleGithubLogin = () => {
    console.log('Login with GitHub');
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="bg-white-100 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <div className='flex flex-col gap-4 mb-6'>
          <div>
            <Button className='w-full bg-red-500 text-white flex justify-center items-center' onClick={handleGoogleLogin}>
              <span>Login with Google</span>
              <FontAwesomeIcon icon={faGoogle} className="ml-2" />
            </Button>
          </div>
          <div>
            <Button className='w-full bg-gray-800 text-white flex justify-center items-center' onClick={handleGithubLogin}>
              <span>Login with GitHub</span>
              <FontAwesomeIcon icon={faGithub} className="ml-2" />
            </Button>
          </div>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="********"
            />
          </div>
          <Button className='w-full' type="submit" disabled={loading}>
            {loading ? 'Logging In...' : 'Login'}
          </Button>
          {error && <p className="text-red-500 mt-2">{error.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
