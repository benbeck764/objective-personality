import { Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import HomeTest from './HomeTest';

//const HomeTest = dynamic(() => import('./HomeTest'), { ssr: false });
const Home = () => {
  return (
    <>
      <Typography variant="h1" sx={{ color: { xs: 'red', xl: 'blue' } }}>
        Hello World
      </Typography>
      <HomeTest />
    </>
  );
};

export default Home;
