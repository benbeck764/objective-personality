'use client';
import { FC } from 'react';
import { OpsTypedPersonSearchResponseDto } from '@/_models/ops-typed-people.models';
import { AppGridDataRequest } from '@benbeck764/react-components-grid';
import { useRouter } from 'next/navigation';
import TypedPeopleGrid from './TypedPeopleGrid/TypedPeopleGrid';
import { getSearchUrl } from '@/routing/common/url';

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

  const handleOnDataRequest = (request: AppGridDataRequest): void => {
    const url = getSearchUrl({
      filter: filterText,
      pageNumber: request.pageNumber,
      pageSize: request.pageSize,
    });
    router.push(url);
  };

  return (
    <TypedPeopleGrid
      data={data}
      loading={loading}
      onDataRequested={handleOnDataRequest}
    />
  );
};

export default TypedPeopleSearchResults;
