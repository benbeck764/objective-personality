import { api } from '@/api/client';
import { AppCard } from '@benbeck764/react-components';
import Typography from '@mui/material/Typography';
import TypedPersonResult from './components/TypedPersonResult';
import { Metadata } from 'next';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> => {
  const resolvedParams = await params;
  const name = decodeURIComponent(resolvedParams.name);
  const person = await api.typedPeople.get(name);

  if (person) {
    return {
      title: `${person.Name} - ${person.Type} - Objective Personality`,
      description: `${person.Name} is typed as ${person.Type} (${person.MBTIType}) in the Objective Personality System.`,
    };
  }

  return {
    title: `${name} - Objective Personality`,
    description: 'Search for personality types in the Objective Personality System.',
  };
};

const SearchedPerson = async ({ params }: { params: Promise<{ name: string }> }) => {
  const resolvedParams = await params;
  const name = decodeURIComponent(resolvedParams.name);
  const person = await api.typedPeople.get(name);

  return (
    <AppCard paperSx={{ width: '100%', px: 2, pt: 2, pb: 4 }}>
      {person ? (
        <TypedPersonResult person={person} />
      ) : (
        <Typography>Person not found</Typography>
      )}
    </AppCard>
  );
};

export default SearchedPerson;
