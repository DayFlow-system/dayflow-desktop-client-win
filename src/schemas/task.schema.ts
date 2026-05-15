import { z } from 'zod';
import { energyLevels, healthRules, taskStatuses, taskTypes } from '../types/task';

const nullableString = z.preprocess(
  value => (typeof value === 'string' && value.trim() === '' ? null : value),
  z.string().trim().nullable().optional().transform(value => value ?? null),
);

export const taskSchema = z.object({ id:z.string(), title:z.string(), description:z.string().nullable(), status:z.enum(taskStatuses), type:z.enum(taskTypes), priority:z.union([z.literal(1),z.literal(2),z.literal(3),z.literal(4),z.literal(5)]), deadline:z.string().nullable(), plannedDate:z.string().nullable(), lastDoneAt:z.string().nullable(), energyRequired:z.enum(energyLevels), healthRule:z.enum(healthRules), createdAt:z.string(), updatedAt:z.string() });
export const taskInputSchema = z.object({ title:z.string().trim().min(1,'Title is required'), description: nullableString, status:z.enum(taskStatuses).default('planned'), type:z.enum(taskTypes).default('task'), priority:z.coerce.number().int().min(1).max(5).default(3), deadline: nullableString, plannedDate: nullableString, energyRequired:z.enum(energyLevels).default('medium'), healthRule:z.enum(healthRules).default('always') });
export const tasksSchema = z.array(taskSchema);
