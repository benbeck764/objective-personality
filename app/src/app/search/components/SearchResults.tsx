import { searchTypedPeople } from '@/api/services/typed-person';
import { HttpStatus } from '@/api/constants';
import TypedPeopleSearchResults from './TypedPeopleSearchResults';

type SearchResultsProps = {
  filterText?: string;
  pageSize: number;
  pageNumber: number;
};

const SearchResults = async ({
  filterText,
  pageSize,
  pageNumber,
}: SearchResultsProps) => {
  const result = await searchTypedPeople({
    filterText,
    pageSize,
    pageNumber,
  });

  return (
    <TypedPeopleSearchResults
      data={result.status === HttpStatus.OK ? result.data : undefined}
      loading={false}
      filterText={filterText}
    />
  );
};

export default SearchResults;
