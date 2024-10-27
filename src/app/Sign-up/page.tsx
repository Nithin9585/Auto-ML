"use client";
import React, { useEffect, useState } from 'react';
import { Button } from '../../components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

const SignUpForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push('/');  
      }
    });
    return unsubscribe;
  }, [router]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(email, password);
      
      if (res && res.user) {
        console.log('User created:', res.user); // Handle user creation success
      } else {
        console.error("User creation failed or returned no user object");
      }

      setEmail('');
      setPassword('');
      setConfirmPassword(''); 
    } catch (e) {
      console.error(e); 
    }
  };

  const handleGoogleSignUp = () => {
    console.log('Sign up with Google');
  };

  const handleGithubSignUp = () => {
    console.log('Sign up with GitHub');
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
      <div className="p-6 md:p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Sign Up</h2>
        <div className='flex flex-col gap-4 mb-6'>
          <div>
            <Button className='w-full bg-red-500 text-white flex justify-center items-center' onClick={handleGoogleSignUp}>
              <span>Login with Google</span>
              <FontAwesomeIcon icon={faGoogle} className="ml-2" />
            </Button>
          </div>
          <div>
            <Button className='w-full bg-gray-800 text-white flex justify-center items-center' onClick={handleGithubSignUp}>
              <span>Login with GitHub</span>
              <FontAwesomeIcon icon={faGithub} className="ml-2" />
            </Button>
          </div>
        </div>
        <form onSubmit={handleSignUp}>
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="********"
            />
          </div>
          <Button className='w-full' type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>
        {error && <p className="text-red-500">{error.message}</p>}
      </div>
    </div>
  );
};

export default SignUpForm;
