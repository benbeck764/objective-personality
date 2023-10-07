import OpsTypedPeopleService from '@/_api-interface/services/ops-typed-people.service';
import SearchCard from './SearchCard';

const Search = async () => {
  const service = OpsTypedPeopleService.getInstance();

  let loading = true;
  const data = (await service.searchOPSTypedPeople()).resultObject;
  loading = false;

  return <SearchCard data={data} loading={loading} />;
};

export default Search;
