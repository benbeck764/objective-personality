import type { Metadata } from 'next';
import AppContent from './AppContent';
import Providers from './Providers';

// Handle SEO & <head> here
export const metadata: Metadata = {
  title: 'Objective Personality',
  description: 'OP Next.js test app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppContent>{children}</AppContent>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
