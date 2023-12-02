import TestService from '@/_api-interface/services/test.service';
import { Typography } from '@mui/material';

const Home = async () => {
  const service = TestService.getInstance();
  const data = await service.test();
  console.log(data);

  return (
    <>
      <Typography variant="h1" sx={{ color: { xs: 'red', xl: 'blue' } }}>
        Hello World
      </Typography>
      <Typography variant="paragraph">{data.resultObject.test1}</Typography>
    </>
  );
};

export default Home;
