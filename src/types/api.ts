export type ApiErrorCode = 'VALIDATION_ERROR' | 'NOT_FOUND' | 'BAD_REQUEST' | 'CONFLICT' | 'INTERNAL_SERVER_ERROR' | 'NETWORK_ERROR' | 'TIMEOUT' | 'UNKNOWN_ERROR';
export type ApiError = { code: ApiErrorCode; message: string; details: unknown[] };
export type ConnectionStatus = 'loading' | 'connected' | 'disconnected' | 'error';
