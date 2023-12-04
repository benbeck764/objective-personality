'use client';
import { FC } from 'react';
import { AppCard } from '@benbeck764/react-components';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TypedPeopleSearch from './components/TypedPeopleSearch';
import { useSearchOpsTypedPeople } from '../state/search/useSearchOpsTypedPeople';
import { OPSTypedPersonExtended } from '@/_models/ops-typed-people.models';
import { getSearchUrl, AppRoutes, RouteName } from '@/routing';
import { AppGridDataRequest } from '@benbeck764/react-components-grid/Grid';
import { useRouter } from 'next/navigation';
import TypedPeopleGrid from './components/TypedPeopleGrid/TypedPeopleGrid';

type SearchProps = {
  pageNumber?: number;
  pageSize?: number;
  filterText?: string;
};

const Search: FC<SearchProps> = (props: SearchProps) => {
  const { pageNumber, pageSize, filterText } = props;

  const router = useRouter();
  const { data, isFetching } = useSearchOpsTypedPeople({ pageNumber, pageSize, filterText });

  //   const handleDataRequest = (request: AppGridDataRequest): void => {
  //     const url = getSearchUrl({
  //       filter: filterText,
  //       pageNumber: request.pageNumber,
  //       pageSize: request.pageSize,
  //     });
  //     router.push(url);
  //   };

  const handlePersonSelected = (person: OPSTypedPersonExtended): void => {
    router.push(`${AppRoutes[RouteName.Search].path}/${encodeURIComponent(person.Name)}`);
  };

  return (
    <AppCard paperSx={{ width: '100%', px: 2, pt: 2, pb: 4 }}>
      <Typography mb={1} variant="h5">
        Search
      </Typography>
      <Divider />
      <Box mt={2} pb={4} mb={4} width="100%">
        <TypedPeopleSearch filterText={filterText} />
        <TypedPeopleGrid
          data={data}
          loading={isFetching}
          //onDataRequested={handleDataRequest}
          onPersonSelected={handlePersonSelected}
        />
      </Box>
    </AppCard>
  );
};

export default Search;
