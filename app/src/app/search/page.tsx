import { Suspense } from 'react';
import { AppCard } from '@benbeck764/react-components';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TypedPeopleSearch from './components/TypedPeopleSearch';
import TypedPeopleSearchResults from './components/TypedPeopleSearchResults';
import SearchResults from './components/SearchResults';
import { createSearchParamsCache, parseAsInteger, parseAsString } from 'nuqs/server';

const searchParamsCache = createSearchParamsCache({
  filter: parseAsString.withDefault(''),
  page: parseAsInteger.withDefault(0),
  size: parseAsInteger.withDefault(25),
});

const Search = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { filter, page, size } = searchParamsCache.parse(await searchParams);

  return (
    <AppCard paperSx={{ width: '100%', px: 2, pt: 2, pb: 4 }}>
      <Typography mb={1} variant="h5">
        Search
      </Typography>
      <Divider />
      <Box mt={2} pb={4} mb={4} width="100%">
        <TypedPeopleSearch />
        <Suspense
          key={`${filter}-${page}-${size}`}
          fallback={<TypedPeopleSearchResults data={undefined} loading={true} />}
        >
          <SearchResults filterText={filter} pageSize={size} pageNumber={page} />
        </Suspense>
      </Box>
    </AppCard>
  );
};

export default Search;
