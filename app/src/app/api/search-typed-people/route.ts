import { NextResponseBuilder } from '@/_api/_services/common/response-builder';
import TypedPersonService from '@/_api/_services/typed-person.service';

export const POST = async (_request: Request) => {
  try {
    const service = await TypedPersonService.getInstance();
    const serviceResponse = await service.searchTypedPeople();
    return NextResponseBuilder.buildResponse(serviceResponse);
  } catch (e) {
    return NextResponseBuilder.internalServerError();
  }
};
