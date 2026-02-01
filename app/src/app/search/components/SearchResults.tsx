import { api } from '@/api/client';
import TypedPeopleSearchResults from './TypedPeopleSearchResults';

type SearchResultsProps = {
  filterText?: string;
  pageSize: number;
  pageNumber: number;
};

const SearchResults = async ({ filterText, pageSize, pageNumber }: SearchResultsProps) => {
  const data = await api.typedPeople.search({ filterText, pageSize, pageNumber });

  return <TypedPeopleSearchResults data={data} loading={false} />;
};

export default SearchResults;
