'use client';
import { FC, useEffect, useState } from 'react';
import { OpsTypedPersonSearchResponseDto } from '@/_models/ops-typed-people.models';
import { AppGridDataRequest } from '@benbeck764/react-components-grid';
import { useRouter } from 'next/navigation';
import { useDebounce } from '@/utilities/hooks/useDebounce';
import TypedPeopleGrid from './TypedPeopleGrid/TypedPeopleGrid';

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

  const [dataRequest, setDataRequest] = useState<AppGridDataRequest>({
    pageNumber: 0,
    pageSize: 250,
    filterText: filterText,
  });
  const debouncedDataRequest = useDebounce(dataRequest, 300);

  const handleOnDataRequest = (
    appGridDataRequest: AppGridDataRequest
  ): void => {
    setDataRequest(appGridDataRequest);
  };

  useEffect(() => {
    if (dataRequest.filterText) {
      router.push(`/search?filter=${dataRequest.filterText}`);
    } else {
      router.push('/search');
    }
  }, [debouncedDataRequest]);

  return (
    <TypedPeopleGrid
      data={data}
      loading={loading}
      onDataRequested={handleOnDataRequest}
    />
  );
};

export default TypedPeopleSearchResults;
