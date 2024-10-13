"use client"
import React from 'react';
import { Button } from './button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';


const LoginForm: React.FC = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as any).email.value;
    const password = (e.target as any).password.value;

    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
  };

  const handleGithubLogin = () => {
    console.log('Login with GitHub');
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white-100 p-8 rounded-lg  w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <div className='flex justify-between mb-6'>
  <div className="mt-4">
    <Button className='w-full bg-red-500 text-white' onClick={handleGoogleLogin}>Login with Google
    <FontAwesomeIcon icon={faGoogle} className=" ml-2" />

    </Button>
  </div>
  <div className="mt-4">
    <Button className='w-full bg-gray-800 text-white' onClick={handleGithubLogin}>Login with GitHub
    <FontAwesomeIcon icon={faGithub} className=" ml-2" />

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
              name="email"
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
              name="password"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="********"
            />
          </div>
          <Button className='w-full'>Login</Button>
        </form>
        
      </div>
    </div>
  );
};

export default LoginForm;