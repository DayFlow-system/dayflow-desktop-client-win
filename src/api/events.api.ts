import type { DayFlowEvent, EventInput } from '../types/event';
import { eventSchema, eventsSchema } from '../schemas/event.schema';
import { apiRequest } from './client';
export const getEvents = () => apiRequest<DayFlowEvent[]>('/events', { schema: eventsSchema });
export const createEvent = (input: EventInput) => apiRequest<DayFlowEvent>('/events', { method:'POST', body:JSON.stringify(input), schema: eventSchema });
export const updateEvent = (id:string, input: Partial<EventInput>) => apiRequest<DayFlowEvent>(`/events/${id}`, { method:'PATCH', body:JSON.stringify(input), schema: eventSchema });
export const cancelEvent = (id:string) => apiRequest<void>(`/events/${id}`, { method:'DELETE' });
