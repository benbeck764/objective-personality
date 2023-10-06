import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import AppContent from './AppContent';
import ThemeRegistry from '@/theme/ThemeRegistry';

const poppins = Poppins({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

// Handle SEO & <head> here
export const metadata: Metadata = {
  title: 'Objective Personality',
  description: 'OP Next.js test app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeRegistry>
          <AppContent>{children}</AppContent>
        </ThemeRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
