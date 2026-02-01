import { Suspense } from 'react';
import { AppCard } from '@benbeck764/react-components';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TypedPeopleSearch from './components/TypedPeopleSearch';
import TypedPeopleSearchResults from './components/TypedPeopleSearchResults';
import SearchResults from './components/SearchResults';
import { isString } from '@/utilities/string';

const Search = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;

  const pageNumber = isString(params.page) ? Number(params.page) : 0;
  const pageSize = isString(params.size) ? Number(params.size) : 25;
  const filterText = isString(params.filter)
    ? params.filter?.toString()
    : '';

  return (
    <AppCard paperSx={{ width: '100%', px: 2, pt: 2, pb: 4 }}>
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
          <SearchResults
            filterText={filterText}
            pageSize={pageSize}
            pageNumber={pageNumber}
          />
        </Suspense>
      </Box>
    </AppCard>
  );
};

export default Search;
