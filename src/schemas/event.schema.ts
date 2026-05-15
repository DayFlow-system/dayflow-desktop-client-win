import { z } from 'zod';
import { eventStatuses, importanceLevels } from '../types/event';
import { isEndAfterStart, isTime } from '../utils/time';
const nullableString = z.string().trim().optional().transform(v => v ? v : null);
export const eventSchema = z.object({ id:z.string(), title:z.string(), description:z.string().nullable(), date:z.string(), startTime:z.string().nullable(), endTime:z.string().nullable(), status:z.enum(eventStatuses), importance:z.enum(importanceLevels), location:z.string().nullable(), createdAt:z.string(), updatedAt:z.string() });
export const eventInputSchema = z.object({ title:z.string().trim().min(1,'Title is required'), description: nullableString, date:z.string().trim().min(1,'Date is required'), startTime: nullableString, endTime: nullableString, status:z.enum(eventStatuses).default('planned'), importance:z.enum(importanceLevels).default('medium'), location: nullableString }).refine(v => (!v.startTime || isTime(v.startTime)) && (!v.endTime || isTime(v.endTime)), { message:'Use HH:mm time format' }).refine(v => isEndAfterStart(v.startTime, v.endTime), { message:'End time must be later than start time', path:['endTime'] });
export const eventsSchema = z.array(eventSchema);
