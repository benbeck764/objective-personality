import Box from '@mui/material/Box';
import { Theme, styled } from '@mui/material/styles';
import Image from 'next/image';

export const StyledCardImage = styled(Image, {
  shouldForwardProp: (prop) => prop !== 'hovered',
})<{ hovered: boolean }>(({ theme, hovered }) => ({
  borderColor: theme.palette.coolGrey[300],
  borderStyle: 'solid',
  borderWidth: 0.5,
  borderRadius: '50%',
  ...(hovered === true && {
    transition: 'all .25s ease-in-out',
    transform: 'scale(1.05)',
  }),
}));

export const StyledCard = styled(Box)(({ theme }: { theme: Theme }) => ({
  borderColor: theme.palette.coolGrey[300],
  borderStyle: 'solid',
  borderWidth: 1,
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 12px 12px rgba(0,0,0,0.12)',
  padding: 16,
  '&:hover': {
    backgroundColor: theme.palette.coolGrey[100],
    borderColor: theme.palette.coolGrey[300],
    borderStyle: 'solid',
    borderWidth: 1,
  },
}));
