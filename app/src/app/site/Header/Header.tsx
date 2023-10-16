'use client';
import { FC } from 'react';
import { Typography, Stack, Toolbar, Grid, AppBar, Box } from '@mui/material';
import { StyledHeaderContainer } from './Header.styles';
import { AppRoutes, RouteName } from '../../../routing/common/routes';
import { Navigation } from './components/Navigation/Navigation';
import { useRouter, usePathname } from 'next/navigation';
import { AppButton } from '@benbeck764/react-components';

export const Header: FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <StyledHeaderContainer>
        <AppBar color="primary" elevation={0}>
          <Toolbar
            variant="dense"
            sx={{
              px: { xs: '8px !important', xl: 3 },
            }}
          >
            <Grid container>
              <Grid
                item
                xs={8}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Stack direction="row" alignItems="center" gap={2}>
                  <Box sx={{ display: { xs: 'block', xl: 'none' } }}>
                    <Navigation variant="drawer" />
                  </Box>

                  <AppButton>
                    <Typography
                      align="center"
                      variant="h5"
                      whiteSpace="nowrap"
                      sx={{ color: (theme) => theme.palette.common.white }}
                      onClick={() => {
                        if (pathname !== AppRoutes[RouteName.Site].path) {
                          router.push(AppRoutes[RouteName.Site].path);
                        }
                      }}
                    >
                      Objective Personality
                    </Typography>
                  </AppButton>

                  <Box ml={4} sx={{ display: { xs: 'none', xl: 'block' } }}>
                    <Navigation variant="bar" />
                  </Box>
                </Stack>
              </Grid>
              <Grid
                item
                xs={4}
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              ></Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </StyledHeaderContainer>
    </>
  );
};
