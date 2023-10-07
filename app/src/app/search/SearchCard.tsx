'use client';
import { FC } from 'react';
import { AppCard } from '@benbeck764/react-components';
import TypedPeopleGrid from './components/TypedPeopleGrid/TypedPeopleGrid';
import { OPSTypedPerson } from '@/_models/ops-typed-people.models';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

type SearchCardProps = {
  data: OPSTypedPerson[];
  loading: boolean;
};

const SearchCard: FC<SearchCardProps> = (props: SearchCardProps) => {
  const { data, loading } = props;
  return (
    <AppCard elevation={0} paperSx={{ width: '100%', px: 2, pt: 2, pb: 4 }}>
      <Typography mb={1} variant="h5">
        Search
      </Typography>
      <Divider />
      <Box mt={2} pb={4} mb={4}>
        <TypedPeopleGrid data={data} loading={loading} />
      </Box>
    </AppCard>
  );
};

export default SearchCard;
