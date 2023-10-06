import OpsTypedPeopleService from '@/api-interface/services/ops-typed-people.service';

const Search = async () => {
  const service = OpsTypedPeopleService.getInstance();

  const data = (await service.searchOPSTypedPeople()).resultObject;

  return (
    <>
      <h1>Search</h1>
      {data.length}
    </>
  );
};

export default Search;
