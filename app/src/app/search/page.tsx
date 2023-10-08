import OpsTypedPeopleService from '@/_api-interface/services/ops-typed-people.service';
import { Suspense } from 'react';
import { AppButton } from '@benbeck764/react-components';
import Await from './Await';
import dynamic from 'next/dynamic';
import SearchCard from './SearchCard';

const Search = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const service = OpsTypedPeopleService.getInstance();

  const filter =
    typeof searchParams.filter === 'string' ? searchParams.filter : '';

  // let loading = true;
  // const data = (
  //   await service.searchOPSTypedPeople({
  //     filterText: filter,
  //   })
  // ).resultObject;
  // loading = false;
  const promise = service.searchOPSTypedPeople({ filterText: filter });

  return (
    <Suspense fallback={<SearchCard data={undefined} loading={true} />}>
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
    //   <SearchCard data={data} loading={loading} filterText={filter} />
  );
};

export default Search;
