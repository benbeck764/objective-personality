import { FC } from 'react';
import { BreadcrumbsProps, Typography, SxProps, Theme } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { StyledBreadcrumbs, StyledLink } from './AppBreadcrumbs.styles';
import { isString } from '@/utilities';
import { BreakpointDevice, useBreakpoint } from '@/theme/useBreakpoint';
import { useRouter } from 'next/router';
import {
  AppRoutes,
  RouteName,
  getQueryParamsString,
  replaceParams,
} from '@/routing';

export type BreadcrumbItem = {
  displayName: React.ReactNode;
  routeName: RouteName;
  params?: string[];
  queryParams?: string | Record<string, string> | string[][];
  icon?: React.ReactElement;
};

export interface AppBreadcrumbsProps extends BreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
  sx?: SxProps<Theme>;
  allowLinkableFirst?: boolean;
  homeSettings?: {
    include?: boolean;
    mobile?: boolean;
    route?: RouteName;
  };
}

export const AppBreadcrumbs: FC<AppBreadcrumbsProps> = (
  props: AppBreadcrumbsProps
) => {
  const { breadcrumbs, sx, allowLinkableFirst, homeSettings } = props;
  const { device } = useBreakpoint();
  const router = useRouter();

  const handleLinkClick = (breadcrumb: BreadcrumbItem): void => {
    let path = AppRoutes[breadcrumb.routeName].path;
    if (breadcrumb.params && breadcrumb.params.length > 0) {
      path = replaceParams(breadcrumb.routeName, breadcrumb.params);
    }
    if (breadcrumb.queryParams) {
      path += getQueryParamsString(breadcrumb.queryParams);
    }

    router.push(path);
  };

  return (
    <StyledBreadcrumbs
      separator={
        <ChevronRightIcon
          fontSize="small"
          color="inherit"
          sx={{ alignSelf: 'center' }}
        />
      }
      aria-label="breadcrumb"
      sx={sx}
    >
      {homeSettings?.include === true &&
        ((homeSettings?.mobile && device !== BreakpointDevice.Desktop) ||
          device === BreakpointDevice.Desktop) &&
        !allowLinkableFirst && (
          <Typography variant="paragraphBold">
            {AppRoutes[homeSettings?.route ?? RouteName.Home]?.displayName}
          </Typography>
        )}
      {homeSettings?.include === true &&
        ((homeSettings?.mobile && device !== BreakpointDevice.Desktop) ||
          device === BreakpointDevice.Desktop) &&
        allowLinkableFirst && (
          <StyledLink
            variant="paragraph"
            onClick={() =>
              handleLinkClick({
                displayName:
                  AppRoutes[homeSettings?.route ?? RouteName.Home]?.displayName,
                routeName: homeSettings?.route ?? RouteName.Home,
              })
            }
          >
            {AppRoutes[homeSettings?.route ?? RouteName.Home]?.displayName}
          </StyledLink>
        )}
      {breadcrumbs.map((breadcrumb: BreadcrumbItem, index: number) => {
        const isLast = index === breadcrumbs.length - 1;
        const key = isString(breadcrumb.displayName)
          ? (breadcrumb.displayName as string)
          : index;
        return isLast ? (
          <Typography key={key} variant="paragraphBold">
            {breadcrumb.displayName}
          </Typography>
        ) : (
          <StyledLink
            key={key}
            variant="paragraph"
            onClick={() => handleLinkClick(breadcrumb)}
          >
            {breadcrumb.displayName}
          </StyledLink>
        );
      })}
    </StyledBreadcrumbs>
  );
};
