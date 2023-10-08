'use client';
import { FC, useEffect, useState } from 'react';
import { AppCard } from '@benbeck764/react-components';
//import TypedPeopleGrid from './components/TypedPeopleGrid/TypedPeopleGrid';
import { OPSTypedPerson } from '@/_models/ops-typed-people.models';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { AppGridDataRequest } from '@benbeck764/react-components-grid';
import { useRouter } from 'next/navigation';
import { useDebounce } from '@/utilities/hooks/useDebounce';
import TypedPeopleGrid from './components/TypedPeopleGrid/TypedPeopleGrid';

type SearchCardProps = {
  data: OPSTypedPerson[] | undefined;
  loading: boolean;
  filterText?: string;
};

const SearchCard: FC<SearchCardProps> = (props: SearchCardProps) => {
  const { data, loading, filterText } = props;
  const router = useRouter();

  const [dataRequest, setDataRequest] = useState<AppGridDataRequest>({
    pageNumber: 0,
    pageSize: 250,
    filterText: filterText,
  });
  const debouncedDataRequest = useDebounce(dataRequest, 300);

  const handleOnDataRequest = (
    appGridDataRequest: AppGridDataRequest
  ): void => {
    setDataRequest(appGridDataRequest);
  };

  useEffect(() => {
    if (dataRequest.filterText) {
      router.push(`/search?filter=${dataRequest.filterText}`);
    } else {
      router.push('/search');
    }
  }, [debouncedDataRequest]);

  return (
    <AppCard elevation={0} paperSx={{ width: '100%', px: 2, pt: 2, pb: 4 }}>
      <Typography mb={1} variant="h5">
        Search
      </Typography>
      <Divider />
      <Box mt={2} pb={4} mb={4}>
        <TypedPeopleGrid
          data={data}
          loading={loading}
          filterable
          filterText={dataRequest.filterText}
          onDataRequested={handleOnDataRequest}
        />
      </Box>
    </AppCard>
  );
};

export default SearchCard;
