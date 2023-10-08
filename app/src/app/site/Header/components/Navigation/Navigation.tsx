import { FC } from 'react';
import {
  NavMenuOptions,
  NavMenuConfig,
  NavigationOptionVariant,
  NavigationProps,
} from './Navigation.props';
import { NavigationBar } from './NavigationBar/NavigationBar';
import { NavigationDrawer } from './NavigationDrawer/NavigationDrawer';
import { AppRoutes, RouteName } from '@/routing';
import { usePathname, useRouter } from 'next/navigation';

export const Navigation: FC<NavigationProps> = (props: NavigationProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClickOption = ({
    navigationAction,
    navigationRoute,
  }: NavMenuOptions) => {
    if (pathname !== navigationRoute) {
      if (navigationRoute) router.push(navigationRoute);
      else {
        if (navigationAction) navigationAction();
      }
    }
  };

  let navigationConfiguration: NavMenuConfig[] = [];

  navigationConfiguration = [
    {
      label: 'Home',
      variant: NavigationOptionVariant.Button,
      navigationRoute: AppRoutes[RouteName.Home].path,
    },
    {
      label: 'Search',
      variant: NavigationOptionVariant.Button,
      navigationRoute: AppRoutes[RouteName.Search].path,
    },
  ];

  if (props.variant === 'bar') {
    return (
      <NavigationBar
        navigationConfig={navigationConfiguration}
        onClickOption={handleClickOption}
      />
    );
  } else {
    return (
      <NavigationDrawer
        navigationConfig={navigationConfiguration}
        onClickOption={handleClickOption}
      />
    );
  }
};
