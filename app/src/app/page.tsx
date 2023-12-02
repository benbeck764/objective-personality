import Typography from '@mui/material/Typography';

const Home = async () => {
  const data = process.env;
  console.log(data);

  return (
    <>
      <Typography variant="h1" sx={{ color: { xs: 'red', xl: 'blue' } }}>
        Hello World
      </Typography>
      <Typography variant="paragraph">{JSON.stringify(data)}</Typography>
    </>
  );
};

export default Home;
