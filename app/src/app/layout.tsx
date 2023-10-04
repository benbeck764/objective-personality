import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AppContent from './AppContent';
import ThemeRegistry from '@/theme/ThemeRegistry';

const inter = Inter({ subsets: ['latin'] });

// Handle SEO & <head> here
export const metadata: Metadata = {
  title: 'Objective Personality',
  description: 'OP Next.js test app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <AppContent>{children}</AppContent>
        </ThemeRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
