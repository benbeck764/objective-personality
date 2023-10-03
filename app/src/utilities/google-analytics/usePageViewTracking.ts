import { useEffect } from 'react';
import { AppRoute, AppRoutes } from '../../routing/common/routes';
import { useGoogleAnalytics } from './useGoogleAnalytics';
import { usePathname } from 'next/navigation';

export const usePageViewTracking = (): void => {
  const googleAnalytics = useGoogleAnalytics();
  const pathname = usePathname();

  useEffect(() => {
    if (googleAnalytics) {
      const appRoute = Object.values(AppRoutes).find(
        (appRoute: AppRoute) => appRoute.path === pathname
      );
      if (appRoute) {
        googleAnalytics.pageView({
          page: appRoute.path,
          title: appRoute.displayName,
        });
      }
    }
  }, [googleAnalytics, location.pathname]);
};
