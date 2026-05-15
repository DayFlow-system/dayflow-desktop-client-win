import type { ApiError } from '../types/api';
export class DayFlowApiError extends Error { code: ApiError['code']; details: unknown[]; status?: number; constructor(error: ApiError, status?: number){ super(error.message); this.name='DayFlowApiError'; this.code=error.code; this.details=error.details; this.status=status; } }
export const toApiError = (value: unknown, fallback = 'Unknown error'): ApiError => {
  if (value instanceof DayFlowApiError) return { code:value.code, message:value.message, details:value.details };
  if (typeof value === 'object' && value && 'code' in value && 'message' in value) { const e = value as { code: ApiError['code']; message: string; details?: unknown[] }; return { code:e.code, message:e.message, details:e.details ?? [] }; }
  return { code:'UNKNOWN_ERROR', message:fallback, details:[] };
};
export const friendlyErrorMessage = (error: unknown) => { const apiError = toApiError(error); const map: Record<string,string> = { NETWORK_ERROR:'Server unavailable. Check the URL and connection.', TIMEOUT:'Request timed out. Try again.', VALIDATION_ERROR:'Please fix the highlighted validation errors.', NOT_FOUND:'This item no longer exists. Refresh and try again.', INTERNAL_SERVER_ERROR:'Server error. Your input was preserved for retry.' }; return map[apiError.code] ?? apiError.message; };
