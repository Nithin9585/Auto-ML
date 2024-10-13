"use client";
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
export default function Home() {
  const [user, loading] = useAuthState(auth); 
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/Sign-up');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen'>
      <Link href="/Uploadcsv">
        <Button>
          Get Started...
        </Button>
      </Link>
      <Footer />
    </div>
  );
}
