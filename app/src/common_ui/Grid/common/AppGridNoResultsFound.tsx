import { Box, Typography, Theme, styled, SxProps } from '@mui/material';
import { ReactNode } from 'react';
import { AppGridDisplayMode } from '../AppGrid.props';

export interface AppGridNoResultsFoundProps {
  message?: ReactNode;
  displayMode: AppGridDisplayMode;
  sx?: SxProps<Theme>;
}

export const AppGridNoResultsFound = (
  props: AppGridNoResultsFoundProps
): JSX.Element => {
  const displayModeSx =
    props.displayMode === 'table' ? { mt: 2 } : { width: '100%', mt: 2 };
  return (
    <StyledBox
      sx={{
        ...displayModeSx,
        ...props.sx,
      }}
    >
      <Typography variant="paragraph">
        {props.message ? props.message : 'No items found'}
      </Typography>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  textAlign: 'center',
  [theme.breakpoints.up('xs')]: {
    height: theme.typography.mobileParagraph.lineHeight,
  },
  [theme.breakpoints.up('xl')]: {
    height: theme.typography.paragraph.lineHeight,
  },
}));
