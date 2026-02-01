'use client';
import Box from '@mui/material/Box';
import Grid, { GridProps } from '@mui/material/Grid';
import { BoxProps } from '@mui/material/Box';
import { Theme, styled } from '@mui/material/styles';
import { StyledComponent } from '@emotion/styled';

export const StyledPageContainer: StyledComponent<GridProps> = styled(Grid)(
  ({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.background.default,
    width: '100vw',
    [theme.breakpoints.up('xl')]: {
      maxWidth: '100%',
    },
  })
);

export const StyledPageContent: StyledComponent<BoxProps> = styled(Box)(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: 'calc(100% - 24px)',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: theme.pageWidths['xl'],
    width: theme.contentWidths?.['xl'],
  },
  marginTop: theme.pageContentMargin,
  marginBottom: theme.pageContentMargin,
}));

export const StyledStickyHeaderContainer: StyledComponent<BoxProps> = styled(Box)(
  ({ theme }: { theme: Theme }) => ({
    top: 0,
    position: 'sticky',
    zIndex: theme.zIndex.appBar,
  })
);
