import { NextResponseBuilder } from '@/_api/_services/common/response-builder';
import VisualsService from '@/_api/_services/visuals.service';

export const GET = async () => {
  try {
    const service = await VisualsService.getInstance();
    const serviceResponse = await service.getHomeVisual();
    return NextResponseBuilder.buildResponse(serviceResponse);
  } catch (e: any) {
    return NextResponseBuilder.internalServerError(e.message);
  }
};
