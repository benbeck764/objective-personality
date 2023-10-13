import OpsTypedPeopleService from '@/_api-interface/services/ops-typed-people.service';
import { Suspense } from 'react';
import { AppCard } from '@benbeck764/react-components';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Await from '../Await';
import TypedPeopleSearch from './components/TypedPeopleSearch';
import TypedPeopleSearchResults from './components/TypedPeopleSearchResults';
import { ApiResponse } from '@/_api-interface/common/api-shared.models';
import { OpsTypedPersonSearchResponseDto } from '@/_models/ops-typed-people.models';
import { isString } from '@/utilities/string';

const Search = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const service = OpsTypedPeopleService.getInstance();

  const pageNumber = isString(searchParams.page)
    ? Number(searchParams.page)
    : 0;
  const pageSize = isString(searchParams.size) ? Number(searchParams.size) : 25;
  const filterText = isString(searchParams.filter)
    ? searchParams.filter?.toString()
    : '';

  const promise = service.searchOPSTypedPeople({
    filterText,
    pageSize,
    pageNumber,
  });

  return (
    <AppCard elevation={0} paperSx={{ width: '100%', px: 2, pt: 2, pb: 4 }}>
      <Typography mb={1} variant="h5">
        Search
      </Typography>
      <Divider />
      <Box mt={2} pb={4} mb={4} width="100%">
        <TypedPeopleSearch filterText={filterText} />
        <Suspense
          key={filterText}
          fallback={
            <TypedPeopleSearchResults
              data={undefined}
              loading={true}
              filterText={filterText}
            />
          }
        >
          <Await promise={promise}>
            {(res: ApiResponse<OpsTypedPersonSearchResponseDto>) => (
              <TypedPeopleSearchResults
                data={res.resultObject}
                loading={false}
                filterText={filterText}
              />
            )}
          </Await>
        </Suspense>
      </Box>
    </AppCard>
  );
};

export default Search;
