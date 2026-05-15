import { z } from 'zod';
import { importanceLevels } from '../types/event';
import { scheduleStatuses, scheduleTypes } from '../types/schedule';
import { isEndAfterStart, isTime } from '../utils/time';
const nullableString = z.string().trim().optional().transform(v => v ? v : null);
export const scheduleBlockSchema = z.object({ id:z.string(), title:z.string(), description:z.string().nullable(), dayOfWeek:z.union([z.literal(1),z.literal(2),z.literal(3),z.literal(4),z.literal(5),z.literal(6),z.literal(7)]), startTime:z.string(), endTime:z.string().nullable(), type:z.enum(scheduleTypes), status:z.enum(scheduleStatuses), importance:z.enum(importanceLevels), location:z.string().nullable(), createdAt:z.string(), updatedAt:z.string() });
export const scheduleInputSchema = z.object({ title:z.string().trim().min(1,'Title is required'), description: nullableString, dayOfWeek:z.coerce.number().int().min(1).max(7), startTime:z.string().refine(isTime,'Use HH:mm time format'), endTime: nullableString, type:z.enum(scheduleTypes).default('routine'), status:z.enum(scheduleStatuses).default('active'), importance:z.enum(importanceLevels).default('medium'), location: nullableString }).refine(v => isEndAfterStart(v.startTime, v.endTime), { message:'End time must be later than start time', path:['endTime'] });
export const scheduleSchema = z.array(scheduleBlockSchema);
