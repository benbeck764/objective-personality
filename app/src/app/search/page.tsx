import OpsTypedPeopleService from '@/_api-interface/services/ops-typed-people.service';
import { Suspense } from 'react';
import Await from './Await';
import SearchCard from './SearchCard';

const Search = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const service = OpsTypedPeopleService.getInstance();

  const filter =
    typeof searchParams.filter === 'string' ? searchParams.filter : '';

  const promise = service.searchOPSTypedPeople({ filterText: filter });

  return (
    <Suspense key={filter} fallback={'Loading...'}>
      <Await promise={promise}>
        {(res) => (
          <SearchCard
            data={res.resultObject}
            loading={false}
            filterText={filter}
          />
        )}
      </Await>
    </Suspense>
  );
};

export default Search;
