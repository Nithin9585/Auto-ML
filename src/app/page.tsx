import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  
  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen'>
      <Link href="/Uploadcsv">
        <Button>
          Get Started...
        </Button>
      </Link>
    </div>
  );
}
