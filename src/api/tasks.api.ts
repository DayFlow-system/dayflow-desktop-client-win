import type { Task, TaskInput } from '../types/task';
import { taskSchema, tasksSchema } from '../schemas/task.schema';
import { apiRequest } from './client';
export const getTasks = () => apiRequest<Task[]>('/tasks', { schema: tasksSchema });
export const createTask = (input: TaskInput) => apiRequest<Task>('/tasks', { method:'POST', body:JSON.stringify(input), schema: taskSchema });
export const updateTask = (id:string, input: Partial<TaskInput>) => apiRequest<Task>(`/tasks/${id}`, { method:'PATCH', body:JSON.stringify(input), schema: taskSchema });
export const archiveTask = (id:string) => apiRequest<void>(`/tasks/${id}`, { method:'DELETE' });
