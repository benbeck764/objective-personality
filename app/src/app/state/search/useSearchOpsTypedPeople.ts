import {
  OpsTypedPersonSearchRequestDto,
  OpsTypedPersonSearchResponseDto,
} from '@/_models/ops-typed-people.models';
import OpsTypedPeopleService from '@/app/api-interface/services/ops-typed-people.service';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export const searchOpsTypedPeopleKey = 'search-ops-typed-people';

export const useSearchOpsTypedPeople = (
  params: OpsTypedPersonSearchRequestDto
): UseQueryResult<OpsTypedPersonSearchResponseDto, unknown> => {
  const service = OpsTypedPeopleService.getInstance();

  return useQuery({
    queryKey: [searchOpsTypedPeopleKey, params],
    queryFn: async () => {
      const data = (await service.searchOPSTypedPeople(params)).resultObject;
      return data;
    },
    enabled: typeof params.pageNumber !== 'undefined' && typeof params.pageSize !== 'undefined',
  });
};
