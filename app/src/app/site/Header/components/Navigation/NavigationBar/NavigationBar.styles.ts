'use client';
import { styled, Typography, Button } from '@mui/material';
import Link from 'next/link';

export const StyledNavigationLink = styled(Link)(() => ({
  textDecoration: 'none',
}));

export const StyledNavigationLinkTypography = styled(Typography)(
  ({ theme }) => ({
    '&.MuiTypography-root': {
      color: theme.palette.common.black,
      '&: hover': {
        backgroundColor: theme.palette.coolGrey[100],
        boxRadius: 8,
      },
    },
  })
);

export const StyledNavigationButton = styled(Button)(({ theme }) => ({
  '&.MuiButtonBase-root': {
    color: theme.palette.common.white,
    '&:focus': {
      color: theme.palette.common.black,
    },
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
}));
