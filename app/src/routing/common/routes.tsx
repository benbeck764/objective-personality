export enum RouteName {
  // Site Routes
  Site = 'Site',
  Home = 'Home',
  Search = 'Search',
}

export type AppRoute = {
  displayName: string;
  path: string;
  params?: string[];
  icon?: React.ReactElement;
};

export const AppRoutes: Record<RouteName, AppRoute> = {
  // Site Routes
  [RouteName.Site]: {
    displayName: 'Site',
    path: '/',
  },
  [RouteName.Home]: {
    displayName: 'Home',
    path: '/home',
  },
  [RouteName.Search]: {
    displayName: 'Search',
    path: '/search',
  },
};
