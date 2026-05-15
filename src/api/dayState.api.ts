import type { DayState, DayStateInput } from '../types/dayState';
import { dayStateSchema } from '../schemas/dayState.schema';
import { apiRequest } from './client';
export const getTodayDayState = () => apiRequest<DayState>('/day-state/today', { schema: dayStateSchema });
export const updateTodayDayState = (input: DayStateInput) => apiRequest<DayState>('/day-state/today', { method:'PUT', body:JSON.stringify(input), schema: dayStateSchema });
