'use client';
import ThemeRegistry from '@/theme/ThemeRegistry';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );
  return (
    <ThemeRegistry>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeRegistry>
  );
};

export default Providers;
