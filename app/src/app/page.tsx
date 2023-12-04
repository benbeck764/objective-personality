import Typography from '@mui/material/Typography';

const HomePage = async () => {
  return (
    <Typography variant="h1" sx={{ color: { xs: 'red', xl: 'blue' } }}>
      Hello World
    </Typography>
  );
};

export default HomePage;
