import OpsTypedPeopleService from '@/_api-interface/services/ops-typed-people.service';
import { Suspense } from 'react';
import { AppCard } from '@benbeck764/react-components';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Await from './Await';
import TypedPeopleSearch from './components/TypedPeopleSearch';
import TypedPeopleSearchResults from './components/TypedPeopleSearchResults';
import { ApiResponse } from '@/_api-interface/common/api-shared.models';
import { OPSTypedPerson } from '@/_models/ops-typed-people.models';

const Search = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const service = OpsTypedPeopleService.getInstance();

  const filter =
    typeof searchParams.filter === 'string' ? searchParams.filter : '';

  const promise = service.searchOPSTypedPeople({ filterText: filter });

  return (
    <AppCard elevation={0} paperSx={{ width: '100%', px: 2, pt: 2, pb: 4 }}>
      <Typography mb={1} variant="h5">
        Search
      </Typography>
      <Divider />
      <Box mt={2} pb={4} mb={4} width="100%">
        <TypedPeopleSearch filterText={filter} />
        <Suspense
          key={filter}
          fallback={
            <TypedPeopleSearchResults
              data={undefined}
              loading={true}
              filterText={filter}
            />
          }
        >
          <Await promise={promise}>
            {(res: ApiResponse<OPSTypedPerson[]>) => (
              <TypedPeopleSearchResults
                data={res.resultObject}
                loading={false}
                filterText={filter}
              />
            )}
          </Await>
        </Suspense>
      </Box>
    </AppCard>
  );
};

export default Search;
