import { endpoints } from '../common/endpoints';
import { ServiceResult } from '../common/api-shared.models';
import {
  OPSTypedPersonExtended,
  OpsTypedPersonSearchRequestDto,
  OpsTypedPersonSearchResponseDto,
} from '@/_models/ops-typed-people.models';
import { get, objectToQueryString } from '../common/api-service';

export const getTypedPerson = (name: string): ServiceResult<OPSTypedPersonExtended> => {
  return get(endpoints.opsTypedPeople, { name });
};

export const searchOPSTypedPeople = (
  dto: OpsTypedPersonSearchRequestDto
): ServiceResult<OpsTypedPersonSearchResponseDto> => {
  return get(endpoints.searchOpsTypedPeople, objectToQueryString(dto));
};
