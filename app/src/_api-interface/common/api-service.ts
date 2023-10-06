import { ApiResponse } from './api-shared.models';

abstract class ApiService {
  protected readonly baseUrl: string;

  protected constructor() {
    this.baseUrl = process.env.API_BASE_URL || '/api';
  }

  protected async get<T>(
    url: string,
    params?: string | string[][] | Record<string, string> | URLSearchParams
  ): Promise<ApiResponse<T>> {
    const response = await fetch(`${url}?${new URLSearchParams(params)}`, {
      method: 'GET',
    });

    return response.json() as Promise<ApiResponse<T>>;
  }

  protected async post<T>(url: string, body?: any): Promise<ApiResponse<T>> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...(body && {
        body: JSON.stringify(body),
      }),
    });

    return response.json() as Promise<ApiResponse<T>>;
  }

  protected async put<T>(url: string, body?: unknown): Promise<ApiResponse<T>> {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return response.json() as Promise<ApiResponse<T>>;
  }

  protected async delete<T>(
    url: string,
    body?: unknown
  ): Promise<ApiResponse<T>> {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return response.json() as Promise<ApiResponse<T>>;
  }
}

export default ApiService;
