import Typography from '@mui/material/Typography';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

const HomePage = async () => {
  const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ['posts'],
  //   queryFn: getPosts,
  // })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Typography variant="h1" sx={{ color: { xs: 'red', xl: 'blue' } }}>
        Hello World
      </Typography>
    </HydrationBoundary>
  );
};

export default HomePage;
