'use client';
import { FC, useEffect, useState } from 'react';
import { AppCard, useBreakpoint } from '@benbeck764/react-components';
import { Typography } from '@mui/material';

const HomeTest: FC = () => {
  const { breakpoint } = useBreakpoint();

  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => setMounted(true));
  if (!mounted) return;

  return (
    <AppCard elevation={0}>
      {breakpoint === 'xl' && <Typography>Hello XL</Typography>}
      {breakpoint === 'xs' && <Typography>Hello XS</Typography>}
    </AppCard>
  );
};

export default HomeTest;
