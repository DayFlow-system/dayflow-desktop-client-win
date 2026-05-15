import type { Importance } from './event';
export const scheduleTypes = ['study','work','health','routine','admin','free_time','other'] as const;
export const scheduleStatuses = ['active','paused','archived'] as const;
export type ScheduleType = (typeof scheduleTypes)[number];
export type ScheduleStatus = (typeof scheduleStatuses)[number];
export type DayOfWeek = 1|2|3|4|5|6|7;
export type ScheduleBlock = { id:string; title:string; description:string|null; dayOfWeek:DayOfWeek; startTime:string; endTime:string|null; type:ScheduleType; status:ScheduleStatus; importance:Importance; location:string|null; createdAt:string; updatedAt:string };
export type ScheduleInput = Partial<Omit<ScheduleBlock,'id'|'createdAt'|'updatedAt'>> & Pick<ScheduleBlock,'title'|'dayOfWeek'|'startTime'>;
