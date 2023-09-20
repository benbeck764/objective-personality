import { useEffect } from 'react';
import { AppRoute, AppRoutes } from '../../routing/common/routes';
import { useGoogleAnalytics } from './useGoogleAnalytics';
import { useRouter } from 'next/router';

export const usePageViewTracking = (): void => {
  const googleAnalytics = useGoogleAnalytics();
  const router = useRouter();

  useEffect(() => {
    if (googleAnalytics) {
      const appRoute = Object.values(AppRoutes).find(
        (appRoute: AppRoute) => appRoute.path === router.pathname
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
