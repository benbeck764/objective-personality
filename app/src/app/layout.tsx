import type { Metadata } from 'next';
import AppContent from './AppContent';
import ThemeRegistry from '@/theme/ThemeRegistry';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

// Handle SEO & <head> here
export const metadata: Metadata = {
  title: 'Objective Personality',
  description: 'OP Next.js test app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <NuqsAdapter>
            <AppContent>{children}</AppContent>
          </NuqsAdapter>
        </ThemeRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
