import '@/app/ui/global.css';
import { lexend } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend.className}`}>{children}</body>
    </html>
  );
}