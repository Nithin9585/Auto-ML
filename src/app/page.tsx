import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import LoginForm from '@/components/ui/login';
import SignUpForm from '@/components/ui/signup';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <div className='flex-row w-full min-h-screen justify-center items-center'>
      <Link href="/Uploadcsv">
        <Button>
          Get Started...
        </Button>
        </Link>

        <LoginForm/>
        <SignUpForm/>
      <Footer/>
    </div>
  );
}