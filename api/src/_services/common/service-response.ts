import { HttpStatus } from './http-status';

export type ServiceResponse<T> = {
  status: HttpStatus;
  errorMessage?: string;
  data?: T;
};
