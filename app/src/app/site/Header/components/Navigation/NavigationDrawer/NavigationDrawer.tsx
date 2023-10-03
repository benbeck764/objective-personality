'use client';
import { FC, Fragment, useState } from 'react';
import { Box, Stack, Theme, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import {
  NavMenuConfig,
  NavMenuOptions,
  NavigationOptionVariant,
} from '../Navigation.props';
import { usePathname } from 'next/navigation';
import {
  AppButton,
  AppDrawer,
  AppDropdown,
  AppMenuItem,
  useBreakpoint,
} from '@benbeck764/react-components';

interface NavigationDrawerProps {
  navigationConfig: NavMenuConfig[];
  onClickOption: ({
    navigationAction,
    navigationRoute,
  }: NavMenuOptions) => void;
}

export const NavigationDrawer: FC<NavigationDrawerProps> = (
  props: NavigationDrawerProps
) => {
  const pathname = usePathname();
  const { breakpoint } = useBreakpoint();
  const [forcedToggleState, setForcedToggleState] = useState<
    boolean | undefined
  >(undefined);

  const handleClick = (option: NavMenuOptions) => {
    if (option.disabled) return;
    setForcedToggleState(false);
    props?.onClickOption(option);
  };

  const handleButtonVariantClick = (config: NavMenuConfig) => () => {
    if (config.disabled) return;
    setForcedToggleState(false);
    props.onClickOption(config);
  };

  return (
    <AppDrawer
      mode="panel"
      forcedToggleState={forcedToggleState}
      drawerProps={{ anchor: 'left' }}
      onDrawerOpen={() => setForcedToggleState(undefined)}
      panelSx={{
        pt: 1,
        px: 0,
        width: 300,
        overflowY: 'hidden',
        height: '100%',
      }}
      buttonProps={{
        variant: 'text',
        disableRipple: true,
        disableElevation: true,
        sx: { color: (theme) => theme.palette.common.white, minWidth: 30 },
        children: <MenuIcon />,
      }}
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={{
          height: (theme: Theme) =>
            `calc(100vh - ${theme.headerHeights?.[breakpoint]}px)`,
        }}
      >
        <Box sx={{ overflowY: 'scroll' }}>
          {props.navigationConfig.map(
            (config: NavMenuConfig, index: number) => (
              <Fragment key={index}>
                {config.variant === NavigationOptionVariant.Menu ? (
                  <AppDropdown
                    variant="header"
                    hideCaret={(config.menuItems?.length ?? 0) <= 0}
                    disabled={config.disabled}
                    renderClosed={
                      pathname === '/' ||
                      !config.menuItems.some(
                        (mi: NavMenuOptions) =>
                          pathname !== null &&
                          mi.navigationRoute?.startsWith(pathname)
                      )
                    }
                    headerBoxSx={{
                      padding: '12px 8px',
                      margin: '0px',
                      ...(config.disabled
                        ? {}
                        : {
                            '&:hover': {
                              backgroundColor: (theme) =>
                                theme.palette.coolGrey[100],
                            },
                            '&:focus': {
                              backgroundColor: (theme) =>
                                theme.palette.coolGrey[100],
                              outline: 'none',
                            },
                          }),
                    }}
                    title={
                      <Stack
                        direction="row"
                        gap={1}
                        alignItems="center"
                        justifyContent="flex-start"
                      >
                        <Box
                          sx={{
                            '&.MuiSvgIcon-root': {
                              color: (theme) => theme.palette.primary.main,
                            },
                          }}
                        >
                          {config?.icon}
                        </Box>
                        <Typography
                          key={index}
                          variant="paragraphBold"
                          sx={{
                            color: (theme) =>
                              config.disabled
                                ? theme.palette.coolGrey[200]
                                : theme.palette.primary.main,
                            '&:hover': {
                              color: (theme) => theme.palette.primary.dark,
                            },
                          }}
                        >
                          {config.label}
                        </Typography>
                      </Stack>
                    }
                  >
                    <Box sx={{ width: '100%' }}>
                      {config.menuItems?.map(
                        (option: NavMenuOptions, index: number) => (
                          <AppMenuItem
                            key={index}
                            onSelect={() => handleClick(option)}
                            sx={{ pl: 4 }}
                            disabled={option.disabled}
                          >
                            <Typography
                              variant="paragraphBold"
                              sx={
                                option.disabled
                                  ? {
                                      color: (theme: Theme) =>
                                        theme.palette.coolGrey[200],
                                      ...(option.childOption && {
                                        pl: (theme: Theme) => theme.spacing(2),
                                        fontWeight: 400,
                                      }),
                                    }
                                  : {
                                      color: (theme) =>
                                        theme.palette.primary.main,
                                      '&:hover': {
                                        color: (theme) =>
                                          theme.palette.primary.dark,
                                      },
                                      ...(option.childOption && {
                                        pl: (theme: Theme) => theme.spacing(2),
                                        fontWeight: 400,
                                      }),
                                    }
                              }
                            >
                              {option.label}
                            </Typography>
                          </AppMenuItem>
                        )
                      )}
                    </Box>
                  </AppDropdown>
                ) : (
                  <Box sx={{ width: '100%' }}>
                    <AppButton
                      sx={{ pl: 2, py: 1.5, justifyContent: 'flex-start' }}
                      onClick={handleButtonVariantClick(config)}
                      fullWidth
                    >
                      <Typography variant="paragraphLarge" color="primary">
                        {config.label}
                      </Typography>
                    </AppButton>
                  </Box>
                )}
              </Fragment>
            )
          )}
        </Box>
      </Stack>
    </AppDrawer>
  );
};
