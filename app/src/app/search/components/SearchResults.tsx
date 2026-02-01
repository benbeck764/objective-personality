import OpsTypedPeopleService from '@/_api-interface/services/ops-typed-people.service';
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
  const service = OpsTypedPeopleService.getInstance();
  const res = await service.searchOPSTypedPeople({
    filterText,
    pageSize,
    pageNumber,
  });

  return (
    <TypedPeopleSearchResults
      data={res.resultObject}
      loading={false}
      filterText={filterText}
    />
  );
};

export default SearchResults;
