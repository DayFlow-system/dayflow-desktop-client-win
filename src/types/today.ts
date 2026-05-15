import type { DayState } from './dayState';
import type { DayFlowEvent } from './event';
import type { ScheduleBlock } from './schedule';
import type { Task } from './task';
export type TodayDashboard = { date:string; dayState:DayState; mandatoryEvents:DayFlowEvent[]; plannedEvents:DayFlowEvent[]; scheduleBlocks:ScheduleBlock[]; deadlineTasks:Task[]; plannedTasks:Task[]; suggestedTasks:Task[] };
