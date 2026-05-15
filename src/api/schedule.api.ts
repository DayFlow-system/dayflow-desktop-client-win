import type { ScheduleBlock, ScheduleInput } from '../types/schedule';
import { scheduleBlockSchema, scheduleSchema } from '../schemas/schedule.schema';
import { apiRequest } from './client';
export const getSchedule = () => apiRequest<ScheduleBlock[]>('/schedule', { schema: scheduleSchema });
export const getTodaySchedule = () => apiRequest<ScheduleBlock[]>('/schedule/today', { schema: scheduleSchema });
export const createScheduleBlock = (input: ScheduleInput) => apiRequest<ScheduleBlock>('/schedule', { method:'POST', body:JSON.stringify(input), schema: scheduleBlockSchema });
export const updateScheduleBlock = (id:string, input: Partial<ScheduleInput>) => apiRequest<ScheduleBlock>(`/schedule/${id}`, { method:'PATCH', body:JSON.stringify(input), schema: scheduleBlockSchema });
export const archiveScheduleBlock = (id:string) => apiRequest<void>(`/schedule/${id}`, { method:'DELETE' });
