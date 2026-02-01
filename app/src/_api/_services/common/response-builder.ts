import { NextResponse } from 'next/server';
import { HttpStatus } from './http-status';

export class NextResponseBuilder {
  public static buildResponse(params: {
    status: HttpStatus;
    errorMessage?: string;
    data?: any;
  }) {
    if (params.status >= 200 && params.status < 300) {
      return NextResponseBuilder.success(params.status, params.data);
    } else {
      return NextResponseBuilder.error(
        params.status,
        params.errorMessage,
        params.data
      );
    }
  }

  public static ok(data?: any): NextResponse {
    return NextResponseBuilder.success(HttpStatus.OK, data);
  }

  public static notModified(data?: any): NextResponse {
    return NextResponseBuilder.success(HttpStatus.NOT_MODIFIED, data);
  }

  public static created(data?: any): NextResponse {
    return NextResponseBuilder.success(HttpStatus.CREATED, data);
  }

  public static internalServerError(
    message?: string,
    data?: any
  ): NextResponse {
    return NextResponseBuilder.error(
      HttpStatus.INTERNAL_SERVER_ERROR,
      message,
      data
    );
  }

  public static badRequest(message?: string, data?: any): NextResponse {
    return NextResponseBuilder.error(HttpStatus.BAD_REQUEST, message, data);
  }

  public static forbidden(message?: string, data?: any): NextResponse {
    return NextResponseBuilder.error(HttpStatus.FORBIDDEN, message, data);
  }

  public static notFound(message?: string, data?: any): NextResponse {
    return NextResponseBuilder.error(HttpStatus.NOT_FOUND, message, data);
  }

  public static unauthorized(message?: string, data?: any): NextResponse {
    return NextResponseBuilder.error(HttpStatus.UNAUTHORIZED, message, data);
  }

  public static conflict(message?: string, data?: any): NextResponse {
    return NextResponseBuilder.error(HttpStatus.CONFLICT, message, data);
  }

  private static success(status: HttpStatus, data?: any): NextResponse {
    return NextResponse.json(
      {
        success: true,
        resultObject: data,
      },
      { status, headers: { 'Content-Type': 'application/json' } }
    );
  }

  private static error(
    status: HttpStatus,
    message?: string,
    data?: any
  ): NextResponse {
    return NextResponse.json(
      {
        success: false,
        resultObject: data,
        errorMessage: message || '<No error message supplied>',
      },
      { status, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
