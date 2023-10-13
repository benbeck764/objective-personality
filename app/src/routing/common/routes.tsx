export enum RouteName {
  // Site Routes
  Site = 'Site',
  Search = 'Search',
}

export type AppRoute = {
  displayName: string;
  path: string;
};

export const AppRoutes: Record<RouteName, AppRoute> = {
  // Site Routes
  [RouteName.Site]: {
    displayName: 'Site',
    path: '/',
  },
  [RouteName.Search]: {
    displayName: 'Search',
    path: '/search',
  },
};
