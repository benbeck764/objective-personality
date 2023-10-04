import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from '@azure/functions';
import TypedPersonService from '../_services/typed-person.service';
import { HttpStatus } from '../_services/common/http-status';
import { HttpResponseBuilder } from '../_services/common/http-response';

export async function searchTypedPeople(
  _request: HttpRequest,
  _context: InvocationContext
): Promise<HttpResponseInit> {
  try {
    const service = await TypedPersonService.getInstance();
    const serviceResponse = await service.searchTypedPeople();
    return HttpResponseBuilder.buildResponse(serviceResponse);
  } catch (e) {
    return { status: HttpStatus.INTERNAL_SERVER_ERROR };
  }
}

app.http('search-typed-people', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: searchTypedPeople,
});
