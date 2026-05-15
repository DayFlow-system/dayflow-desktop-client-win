import { ZodSchema } from 'zod';
import { getServerUrl } from '../store/settings.store';
import type { ApiError } from '../types/api';
import { DayFlowApiError } from './errors';

export type ApiRequestOptions<T> = RequestInit & { schema?: ZodSchema<T>; timeoutMs?: number };

export async function apiRequest<T>(path: string, options: ApiRequestOptions<T> = {}): Promise<T> {
  const { schema, timeoutMs = 8000, headers, ...init } = options;
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);
  const serverUrl = getServerUrl(); // Server URL is intentionally read at request time so Settings changes apply immediately.
  try {
    const response = await fetch(`${serverUrl}${path}`, { ...init, signal: controller.signal, headers: { 'Content-Type':'application/json', ...headers } });
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;
    if (!response.ok) {
      throw new DayFlowApiError((data?.error ?? { code:'UNKNOWN_ERROR', message:'Request failed', details:[] }) as ApiError, response.status);
    }
    return schema ? schema.parse(data) : (data as T);
  } catch (error) {
    if (error instanceof DayFlowApiError) throw error;
    if (error instanceof DOMException && error.name === 'AbortError') throw new DayFlowApiError({ code:'TIMEOUT', message:'Request timed out', details:[] });
    throw new DayFlowApiError({ code:'NETWORK_ERROR', message:'Server unavailable', details:[String(error)] });
  } finally { window.clearTimeout(timeout); }
}
