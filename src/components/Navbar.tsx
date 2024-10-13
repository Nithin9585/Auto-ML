import Link from 'next/link';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from './ui/theme-btn';

export default function Navbar() {
  return (
    <nav className="bg-background/50 sticky top-0 backdrop-blur   border-b p-4 z-50">      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-2xl text-purple-600 font-bold">
          <Link  href="/">
            Automl
          </Link>
        </div>
      <div className="hidden md:flex space-x-4 items-center">
  <Link href="/" className="transition   duration-300 ease-in-out relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-900 after:to-grpurpleeen-200 after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100 hover:-translate-y-1">Home</Link>
  <Link href="/blog" className="transition  duration-300 ease-in-out relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-900 after:to-purple-200 after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100 hover:-translate-y-1">Blog</Link>
  <Link href="/about" className="transition  duration-300 ease-in-out relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-900 after:to-purple-200 after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100 hover:-translate-y-1">About</Link>
  <Link href="/Contact" className="transition  duration-300 ease-in-out relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-900 after:to-purple-200 after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100 hover:-translate-y-1">Contact</Link>

<div><Link href="/Login">
    <Button className="mx-1 ">Login</Button>
    </Link>
    <Link href="/Sign-up">
    <Button className="mx-1 ">Sign up</Button>
    </Link>
  </div>
  <ModeToggle />
</div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
            <svg className="w-6 h-6" fill="green" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            </SheetTrigger>

            <SheetContent >
              <SheetHeader>
                <SheetTitle className='text-purple-600'>Automl</SheetTitle>
                <SheetDescription>
                  <div className="flex pt-10 flex-col gap-8 items-center">
                    <Link href="/" className=" hover:text-purple-300">Home</Link>
                    <Link href="/blog" className=" hover:text-purple-300">XYZ</Link>
                    <Link href="/about" className=" hover:text-purple-300">About</Link>
                    <Link href="/Contact" className=" hover:text-purple-300">Contact</Link>
                    <div className="flex justify-center absolute bottom-0 left-0 w-full p-4">
                    <Link href="/Login">
                      <Button className="mx-3 border-purple-600 hover:bg-purple-400 text-purple-100" variant="outline">Login</Button>
                      </Link>
                      <Link href="/Sign-up">
                      <Button className="mx-3 border-purple-600 hover:bg-purple-400 text-purple-400" variant="outline">Sign up</Button>
                      </Link>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <span className='mx-2'>
            <ModeToggle />
          </span>
        </div>
      </div>
    </nav>
  );
}
