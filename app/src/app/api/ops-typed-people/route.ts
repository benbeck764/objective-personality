import { NextResponseBuilder } from '@/_api/_services/common/response-builder';
import TypedPersonService from '@/_api/_services/typed-person.service';

export const GET = async (request: Request) => {
  try {
    const service = await TypedPersonService.getInstance();
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');

    if (!name) return NextResponseBuilder.badRequest();

    const serviceResponse = await service.getTypedPerson(name);
    return NextResponseBuilder.buildResponse(serviceResponse);
  } catch (e: any) {
    return NextResponseBuilder.internalServerError(e.message);
  }
};
