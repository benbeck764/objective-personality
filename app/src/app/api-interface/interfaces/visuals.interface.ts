import { endpoints } from '../common/endpoints';
import { ServiceResult } from '../common/api-shared.models';
import { get } from '../common/api-service';
import { HomeVisualResponseDto } from '@/_models/visuals.models';

export const getHomeVisual = (): ServiceResult<HomeVisualResponseDto> => {
  return get(endpoints.visuals.home);
};
