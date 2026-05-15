import type { TodayDashboard } from '../types/today';
import { todaySchema } from '../schemas/today.schema';
import { apiRequest } from './client';
export const getToday = () => apiRequest<TodayDashboard>('/today', { schema: todaySchema });
