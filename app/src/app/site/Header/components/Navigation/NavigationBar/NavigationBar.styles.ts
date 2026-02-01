'use client';
import Button, { ButtonProps } from '@mui/material/Button';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { StyledComponent } from '@emotion/styled';

// Type assertion needed due to complex Next.js Link typing with MUI styled
export const StyledNavigationLink = styled(Link)(() => ({
  textDecoration: 'none',
})) as any;

export const StyledNavigationLinkTypography: StyledComponent<TypographyProps> = styled(Typography)(
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

export const StyledNavigationButton: StyledComponent<ButtonProps> = styled(Button)(({ theme }) => ({
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
