import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='flex-row w-full min-h-screen justify-center items-center'>
      <Link href="/Uploadcsv">
        <Button>
          Get Started...
        </Button>
        </Link>

       
      <Footer/>
    </div>
  );
}