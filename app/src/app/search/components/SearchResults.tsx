import { api } from '@/api/client';
import { HttpStatus } from '@/api/constants';
import TypedPeopleSearchResults from './TypedPeopleSearchResults';

type SearchResultsProps = {
  filterText?: string;
  pageSize: number;
  pageNumber: number;
};

const SearchResults = async ({ filterText, pageSize, pageNumber }: SearchResultsProps) => {
  const result = await api.typedPeople.search({ filterText, pageSize, pageNumber });

  return (
    <TypedPeopleSearchResults
      data={result.status === HttpStatus.OK ? result.data : undefined}
      loading={false}
      filterText={filterText}
    />
  );
};

export default SearchResults;
