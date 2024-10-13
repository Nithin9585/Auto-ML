"use client";
import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation'; 

//nithin@gmail.com
//abcdefg


const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(''); 
  const [error, setError] = useState(''); 
  
  const [signInWithEmailAndPassword, userCredential, loadingSignInError] = useSignInWithEmailAndPassword(auth);
  
  const router = useRouter(); 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading('Logging In...'); 
    setError('');

    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log(res);
      console.log("Login successful");

      setEmail('');
      setPassword('');
      setLoading(''); 
      router.push('/');
    } catch (error) {
      setError('Login failed. Please check your email and password.');
      console.error(error);
      setLoading(''); 
    }
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
  };

  const handleGithubLogin = () => {
    console.log('Login with GitHub');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white-100 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <div className='flex justify-between mb-6'>
          <div className="mt-4">
            <Button className='w-full bg-red-500 text-white' onClick={handleGoogleLogin}>
              Login with Google
              <FontAwesomeIcon icon={faGoogle} className="ml-2" />
            </Button>
          </div>
          <div className="mt-4">
            <Button className='w-full bg-gray-800 text-white' onClick={handleGithubLogin}>
              Login with GitHub
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
          <Button className='w-full' type="submit" disabled={loading === 'Logging In...'}>
            {loading || 'Login'}
          </Button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
