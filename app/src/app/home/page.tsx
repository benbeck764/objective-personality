import { AppCard } from '@benbeck764/react-components';
import { Typography } from '@mui/material';
//import HomeTest from './HomeTest';

//const HomeTest = dynamic(() => import('./HomeTest'), { ssr: false });
export default function Page() {
  return (
    <AppCard>
      <Typography variant="h1">Test</Typography>
    </AppCard>
  );
}
