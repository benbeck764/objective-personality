'use client';
import { Theme, styled } from '@mui/material/styles';
import Image from 'next/image';

export const StyledPersonImage = styled(Image)(({ theme }) => ({
  borderColor: theme.palette.coolGrey[300],
  borderStyle: 'solid',
  borderWidth: 0.5,
  borderRadius: '50%',
}));
