export type ServiceResult<T> = Promise<ApiResponse<T>>;

export interface ApiResponse<T> {
  readonly success: boolean;
  resultObject: T;
  errorMessage?: string;
}
