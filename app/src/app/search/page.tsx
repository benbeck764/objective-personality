import OpsTypedPeopleService from '@/_api-interface/services/ops-typed-people.service';
import Box from '@mui/material/Box';
import TypedPeopleGrid from './components/TypedPeopleGrid/TypedPeopleGrid';
import { AppGridDataRequest } from '@benbeck764/react-components-grid';

const Search = async () => {
  const service = OpsTypedPeopleService.getInstance();

  let loading = true;
  const data = (await service.searchOPSTypedPeople()).resultObject;
  loading = false;

  const handleOnDataRequest = (
    _appGridDataRequest: AppGridDataRequest
  ): void => {
    //setDataRequest(appGridDataRequest)
  };

  return (
    <>
      <h1>Search</h1>
      <Box mt={2}>
        <TypedPeopleGrid data={data} loading={loading} />
      </Box>
    </>
  );
};

export default Search;
