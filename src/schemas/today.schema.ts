import { z } from 'zod';
import { dayStateSchema } from './dayState.schema';
import { eventSchema } from './event.schema';
import { scheduleBlockSchema } from './schedule.schema';
import { taskSchema } from './task.schema';
export const todaySchema = z.object({ date:z.string(), dayState:dayStateSchema, mandatoryEvents:z.array(eventSchema), plannedEvents:z.array(eventSchema), scheduleBlocks:z.array(scheduleBlockSchema), deadlineTasks:z.array(taskSchema), plannedTasks:z.array(taskSchema), suggestedTasks:z.array(taskSchema) });
