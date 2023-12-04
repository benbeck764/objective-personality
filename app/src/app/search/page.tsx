import { isString } from '@/utilities/string';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { searchOpsTypedPeopleKey } from '../state/search/useSearchOpsTypedPeople';
import Search from './Search';

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const queryClient = new QueryClient();

  const pageNumber = isString(searchParams.page) ? Number(searchParams.page) : undefined;
  const pageSize = isString(searchParams.size) ? Number(searchParams.size) : undefined;
  const filterText = isString(searchParams.filter) ? searchParams.filter?.toString() : '';

  await queryClient.prefetchQuery({
    queryKey: [searchOpsTypedPeopleKey, { filterText, pageSize, pageNumber }],
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Search pageNumber={pageNumber} pageSize={pageSize} filterText={filterText} />
    </HydrationBoundary>
  );
};

export default SearchPage;
