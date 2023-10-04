import { HttpResponseInit } from '@azure/functions';
import { HttpStatus } from './http-status';

export class HttpResponseBuilder {
  public static buildResponse(params: {
    status: HttpStatus;
    errorMessage?: string;
    data?: any;
  }) {
    if (params.status >= 200 && params.status < 300) {
      return HttpResponseBuilder.success(params.status, params.data);
    } else {
      return HttpResponseBuilder.error(
        params.status,
        params.errorMessage,
        params.data
      );
    }
  }

  public static ok(data?: any): HttpResponseInit {
    return HttpResponseBuilder.success(HttpStatus.OK, data);
  }

  public static notModified(data?: any): HttpResponseInit {
    return HttpResponseBuilder.success(HttpStatus.NOT_MODIFIED, data);
  }

  public static created(data?: any): HttpResponseInit {
    return HttpResponseBuilder.success(HttpStatus.CREATED, data);
  }

  public static internalServerError(
    message?: string,
    data?: any
  ): HttpResponseInit {
    return HttpResponseBuilder.error(
      HttpStatus.INTERNAL_SERVER_ERROR,
      message,
      data
    );
  }

  public static badRequest(message?: string, data?: any): HttpResponseInit {
    return HttpResponseBuilder.error(HttpStatus.BAD_REQUEST, message, data);
  }

  public static forbidden(message?: string, data?: any): HttpResponseInit {
    return HttpResponseBuilder.error(HttpStatus.FORBIDDEN, message, data);
  }

  public static notFound(message?: string, data?: any): HttpResponseInit {
    return HttpResponseBuilder.error(HttpStatus.NOT_FOUND, message, data);
  }

  public static unauthorized(message?: string, data?: any): HttpResponseInit {
    return HttpResponseBuilder.error(HttpStatus.UNAUTHORIZED, message, data);
  }

  public static conflict(message?: string, data?: any): HttpResponseInit {
    return HttpResponseBuilder.error(HttpStatus.CONFLICT, message, data);
  }

  private static success(status: HttpStatus, data?: any): HttpResponseInit {
    return {
      headers: { 'Content-Type': 'application/json' },
      status: status,
      jsonBody: {
        success: true,
        resultObject: data,
      },
    };
  }

  private static error(
    status: HttpStatus,
    message?: string,
    data?: any
  ): HttpResponseInit {
    return {
      headers: { 'Content-Type': 'application/json' },
      status: status,
      jsonBody: {
        success: false,
        resultObject: data,
        errorMessage: message || '<No error message supplied>',
      },
    };
  }
}
