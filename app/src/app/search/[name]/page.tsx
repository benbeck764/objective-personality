import { getTypedPerson } from '@/api/services/typed-person';
import { HttpStatus } from '@/api/constants';
import { AppCard } from '@benbeck764/react-components';
import Typography from '@mui/material/Typography';
import TypedPersonResult from './components/TypedPersonResult';
import { Metadata } from 'next';

export const generateMetadata = ({ params }: { params: { name: string } }): Metadata => {
  return {
    title: `Objective Personality - ${decodeURIComponent(params.name)}`,
  };
};

const SearchedPerson = async ({ params }: { params: { name: string } }) => {
  const result = await getTypedPerson(decodeURIComponent(params.name));

  return (
    <AppCard paperSx={{ width: '100%', px: 2, pt: 2, pb: 4 }}>
      {result.status === HttpStatus.OK && result.data ? (
        <TypedPersonResult person={result.data} />
      ) : result.status === HttpStatus.NOT_FOUND ? (
        <Typography>Person not found</Typography>
      ) : (
        <Typography>Error: {result.errorMessage || 'Unknown error'}</Typography>
      )}
    </AppCard>
  );
};

export default SearchedPerson;
