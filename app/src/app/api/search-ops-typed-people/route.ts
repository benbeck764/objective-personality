import { NextResponseBuilder } from '@/_api/_services/common/response-builder';
import TypedPersonService from '@/_api/_services/typed-person.service';
import { OpsTypedPersonSearchRequestDto } from '@/_models/ops-typed-people.models';
import { nameof } from '@/utilities/type';

export const GET = async (request: Request) => {
  try {
    const service = await TypedPersonService.getInstance();
    const { searchParams } = new URL(request.url);

    const pageNumber = searchParams.get(nameof<OpsTypedPersonSearchRequestDto>('pageNumber'));
    const pageSize = searchParams.get(nameof<OpsTypedPersonSearchRequestDto>('pageSize'));
    const filterText = searchParams.get(nameof<OpsTypedPersonSearchRequestDto>('filterText'));

    if (pageNumber === null || pageSize === null) return NextResponseBuilder.badRequest();

    const serviceResponse = await service.searchTypedPeople({
      pageNumber: parseInt(pageNumber),
      pageSize: parseInt(pageSize),
      filterText: filterText ?? '',
    });
    return NextResponseBuilder.buildResponse(serviceResponse);
  } catch (e: any) {
    return NextResponseBuilder.internalServerError(e.message);
  }
};
