import { HomeVisualResponseDto } from '@/_models/visuals.models';
import Stack from '@mui/material/Stack';
import { Suspense } from 'react';
import Await from './Await';
import { ApiResponse } from './api-interface/common/api-shared.models';
import { getHomeVisual } from './api-interface/interfaces/visuals.interface';
import HomeVisual from './home/HomeVisual';

const HomePage = async () => {
  const promise = getHomeVisual();

  return (
    <Stack>
      <Suspense fallback={'Loading...'}>
        <Await promise={promise}>
          {(res: ApiResponse<HomeVisualResponseDto>) => <HomeVisual data={res.resultObject.data} />}
        </Await>
      </Suspense>
    </Stack>
  );
};

export default HomePage;
