import Image from 'next/image';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lexend } from '@/app/ui/fonts';

export default function SGSLogo() {
  return (
    <div
      className={`${lexend.className} flex flex-row items-center leading-none text-white`}
    >
      <Image 
        src="/logo.png" // Path to your image in the "public" directory
        alt="Acme Logo" 
        width={250} // Set desired width
        height={90} // Set desired height
      />
    </div>
  );
}
