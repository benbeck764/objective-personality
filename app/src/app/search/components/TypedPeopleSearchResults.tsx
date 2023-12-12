'use client';
import { FC } from 'react';
import {
  OPSTypedPersonExtended,
  OpsTypedPersonSearchResponseDto,
} from '@/_models/ops-typed-people.models';
import { AppGridDataRequest } from '@benbeck764/react-components-grid';
import { useRouter } from 'next/navigation';
import TypedPeopleGrid from './TypedPeopleGrid/TypedPeopleGrid';
import { getSearchUrl } from '@/routing/common/url';
import { AppRoutes, RouteName } from '@/routing';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type TypedPeopleSearchResultsProps = {
  data: OpsTypedPersonSearchResponseDto | undefined;
  loading: boolean;
  filterText?: string;
};

const TypedPeopleSearchResults: FC<TypedPeopleSearchResultsProps> = (
  props: TypedPeopleSearchResultsProps
) => {
  const { data, loading, filterText } = props;
  const router = useRouter();

  const handleDataRequest = (request: AppGridDataRequest): void => {
    const url = getSearchUrl({
      filter: filterText,
      pageNumber: request.pageNumber,
      pageSize: request.pageSize,
    });
    router.push(url);
  };

  const handlePersonSelected = (person: OPSTypedPersonExtended): void => {
    router.push(`${AppRoutes[RouteName.Search].path}/${encodeURIComponent(person.Name)}`);
  };

  return (
    <Stack gap={1} my={1}>
      {!loading && (
        <Typography>
          Found {data?.totalItems} {data?.totalItems === 1 ? 'result' : 'results'}.
        </Typography>
      )}
      <TypedPeopleGrid
        data={data}
        loading={loading}
        onDataRequested={handleDataRequest}
        onPersonSelected={handlePersonSelected}
      />
    </Stack>
  );
};

export default TypedPeopleSearchResults;
