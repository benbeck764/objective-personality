import { NextResponseBuilder } from '@/_api/_services/common/response-builder';
import TestApiService from '@/_api/_services/test.api-service';

export const GET = async () => {
  try {
    const service = await TestApiService.getInstance();
    const serviceResponse = await service.test();
    return NextResponseBuilder.buildResponse(serviceResponse);
  } catch (e: any) {
    return NextResponseBuilder.internalServerError(e.message);
  }
};
