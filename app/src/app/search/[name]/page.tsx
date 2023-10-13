import { ApiResponse } from '@/_api-interface/common/api-shared.models';
import OpsTypedPeopleService from '@/_api-interface/services/ops-typed-people.service';
import { OPSTypedPerson } from '@/_models/ops-typed-people.models';
import Await from '@/app/Await';
import { AppCard } from '@benbeck764/react-components';
import Box from '@mui/material/Box';
import { Suspense } from 'react';

// export async function generateStaticParams() {
//
// }

const SearchedPerson = async ({ params }: { params: { name: string } }) => {
  const service = OpsTypedPeopleService.getInstance();
  const promise = service.getTypedPerson(decodeURIComponent(params.name));

  return (
    <AppCard elevation={0} paperSx={{ width: '100%', px: 2, pt: 2, pb: 4 }}>
      <Box>
        <Suspense>
          <Await promise={promise}>
            {(res: ApiResponse<OPSTypedPerson>) => (
              <>{res.resultObject?.Name}</>
            )}
          </Await>
        </Suspense>
      </Box>
    </AppCard>
  );
};

export default SearchedPerson;
