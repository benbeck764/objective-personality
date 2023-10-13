import { NextResponseBuilder } from '@/_api/_services/common/response-builder';
import TypedPersonService from '@/_api/_services/typed-person.service';
import { OpsTypedPersonSearchRequestDto } from '@/_models/ops-typed-people.models';

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

export const POST = async (request: Request) => {
  try {
    request.url;
    const service = await TypedPersonService.getInstance();
    const dto = (await request.json()) as OpsTypedPersonSearchRequestDto;

    if (!dto) return NextResponseBuilder.badRequest();

    const serviceResponse = await service.searchTypedPeople(dto);
    return NextResponseBuilder.buildResponse(serviceResponse);
  } catch (e: any) {
    return NextResponseBuilder.internalServerError(e.message);
  }
};
