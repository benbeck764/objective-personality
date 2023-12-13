import { Suspense } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import HomeVisual from './home/HomeVisual';
import { getHomeVisual } from './api-interface/interfaces/visuals.interface';
import Await from './Await';
import { ApiResponse } from './api-interface/common/api-shared.models';
import { HomeVisualResponseDto } from '@/_models/visuals.models';

const HomePage = async () => {
  const promise = getHomeVisual();

  return (
    <Stack>
      <Typography variant="h1" sx={{ color: { xs: 'red', xl: 'blue' } }}>
        Hello World
      </Typography>
      <Suspense fallback={'Loading...'}>
        <Await promise={promise}>
          {(res: ApiResponse<HomeVisualResponseDto>) => (
            <HomeVisual people={res.resultObject.people} />
          )}
        </Await>
      </Suspense>
    </Stack>
  );
};

export default HomePage;
