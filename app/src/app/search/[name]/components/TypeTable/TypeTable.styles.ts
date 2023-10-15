'use client';
import { Theme, styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';

export const StyledTypeTableCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== 'highlight',
})<{ highlight?: boolean }>(
  ({ theme, highlight }: { theme: Theme; highlight?: boolean }) => ({
    border: `2px solid ${theme.palette.coolGrey[300]}`,
    textAlign: 'center',
    padding: '8px 8px 8px 8px',
    ...(highlight && {
      backgroundColor: theme.palette.coolGrey[100],
    }),
  })
);

export const StyledTypeTableHeaderCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== 'highlight',
})<{
  highlight?: boolean;
}>(({ theme, highlight }: { theme: Theme; highlight?: boolean }) => ({
  border: `2px solid ${theme.palette.coolGrey[300]}`,
  textAlign: 'center',
  padding: '2px 8px 2px 8px',
  ...(highlight && {
    backgroundColor: theme.palette.coolGrey[100],
  }),
}));
