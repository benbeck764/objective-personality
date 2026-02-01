'use client';
import { FC } from 'react';
import {
  OPSTypedPersonExtended,
  OpsTypedPersonSearchResponseDto,
} from '@/models/ops-typed-people.models';
import { AppGridDataRequest } from '@benbeck764/react-components-grid';
import { useRouter } from 'next/navigation';
import TypedPeopleGrid from './TypedPeopleGrid/TypedPeopleGrid';
import { AppRoutes, RouteName } from '@/routing';
import { useSearchPage, useSearchPageSize } from '../hooks/useSearchParams';

type TypedPeopleSearchResultsProps = {
  data: OpsTypedPersonSearchResponseDto | undefined;
  loading: boolean;
};

const TypedPeopleSearchResults: FC<TypedPeopleSearchResultsProps> = (
  props: TypedPeopleSearchResultsProps
) => {
  const { data, loading } = props;
  const router = useRouter();
  const [, setPage] = useSearchPage();
  const [, setPageSize] = useSearchPageSize();

  const handleDataRequest = (request: AppGridDataRequest): void => {
    setPage(request.pageNumber);
    setPageSize(request.pageSize);
  };

  const handlePersonSelected = (person: OPSTypedPersonExtended): void => {
    router.push(`${AppRoutes[RouteName.Search].path}/${encodeURIComponent(person.Name)}`);
  };

  return (
    <TypedPeopleGrid
      data={data}
      loading={loading}
      onDataRequested={handleDataRequest}
      onPersonSelected={handlePersonSelected}
    />
  );
};

export default TypedPeopleSearchResults;
