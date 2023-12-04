import { ApiResponse, ServiceResult } from './api-shared.models';

export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

export const get = async <T>(
  url: string,
  params?: string | string[][] | Record<string, string> | URLSearchParams
): Promise<ApiResponse<T>> => {
  const response = await fetch(`${baseUrl}/${url}?${new URLSearchParams(params)}`, {
    method: 'GET',
  });

  return response.json() as ServiceResult<T>;
};

export const post = async <T>(url: string, body?: any): Promise<ApiResponse<T>> => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(body && {
      body: JSON.stringify(body),
    }),
  });

  return response.json() as ServiceResult<T>;
};

export const put = async <T>(url: string, body?: unknown): Promise<ApiResponse<T>> => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return response.json() as ServiceResult<T>;
};

export const del = async <T>(url: string, body?: unknown): Promise<ApiResponse<T>> => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return response.json() as ServiceResult<T>;
};

//#region Helpers

export const objectToQueryString = (obj: Record<string, any>): string => {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(obj)) {
    params.append(key, value.toString());
  }

  return params.toString();
};

//#endregion
