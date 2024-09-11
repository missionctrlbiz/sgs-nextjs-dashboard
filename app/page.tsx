import Image from 'next/image';
import SGSLogo from './ui/sgs-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
       <div className="relative h-20 shrink-0 rounded-lg overflow-hidden md:h-52">
        <Image
          src="/banner.jpg"
          alt="Login Banner"
          fill
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 rounded-lg overflow-hidden warm-orange-overlay">
        </div>
      </div>

      <div className="mt-0 flex grow flex-col gap-4 md:flex-row">
        {/* Logo and Description Section */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-7/12 md:px-20">
          <SGSLogo />
          <h1 className="text-5xl mb-negative text-orange-500 md:text-5xl md:leading-normal pb-0">
    <strong>SGS Collateral System.</strong> 
  </h1>
  <p className="text-gray-800 text-8xl md:text-4xl font-semibold"> 
    Collateral Management {' '}
    <Link 
      href="https://saltingstein.com/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-sgsOrange-500"
    >
      System
    </Link> for Businesses
  </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-sgsOrange-500 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-sgsOrange-400 md:text-lg" 
          >
            <span>Log In</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        {/* Vector Illustration Section */}
        <div className="relative flex items-center justify-center p-6 md:w-5/12 md:px-28 md:py-12">
          <Image 
            src="/login-banner.png" 
            alt="Collateral Management Illustration"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
          />
        </div>
    </div>
    </main>
  );
}