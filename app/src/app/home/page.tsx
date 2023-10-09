import { Typography } from '@mui/material';
import HomeTest from './HomeTest';
import { AppButton } from '@benbeck764/react-components';

//const HomeTest = dynamic(() => import('./HomeTest'), { ssr: false });
const Home = () => {
  return (
    <>
      <Typography variant="h1" sx={{ color: { xs: 'red', xl: 'blue' } }}>
        Hello World
      </Typography>
      <HomeTest />
      <AppButton>Hello</AppButton>
    </>
  );
};

export default Home;
