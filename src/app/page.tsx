import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <header className="w-full py-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to AutoML</h1>
        <p className="text-lg text-gray-500 mt-4">Discover amazing features and get started today!</p>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 px-4">
        <div className="max-w-md border border-purple-600 border-rounded-sm  rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Train Your Model</h2>
          <p className="text-gray-500 mb-4">
            Upload your CSV data and let AutoML handle the rest.
          </p>
          <Link href="/Uploadcsv">
            <Button className="w-full py-3 px-4 ">
              Get Started
            </Button>
          </Link>
        </div>
      </main>
      <footer className="w-full py-4 text-center text-gray-500">
        <p>&copy; 2024 AutoML. All rights are not yet reserved.</p>
      </footer>
    </div>
  );
}