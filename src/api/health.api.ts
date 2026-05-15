import { z } from 'zod';
import { apiRequest } from './client';
export const healthSchema = z.object({ status:z.literal('ok') });
export const getHealth = () => apiRequest('/health', { schema: healthSchema });
