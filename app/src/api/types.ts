import { HttpStatus } from './constants';

export type ServiceResponse<T> = {
  status: HttpStatus;
  errorMessage?: string;
  data?: T;
};
