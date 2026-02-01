'use client';
import { Theme, styled } from '@mui/material/styles';
import Image, { ImageProps } from 'next/image';
import { StyledComponent } from '@emotion/styled';

export const StyledPersonImage: StyledComponent<ImageProps> = styled(Image)(
  ({ theme }: { theme: Theme }) => ({
    borderColor: theme.palette.coolGrey[300],
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: '50%',
  })
);
