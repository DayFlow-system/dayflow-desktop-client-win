import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { cancelEvent, createEvent, getEvents, updateEvent } from '../api/events.api';
import { todayQueryKey } from './useToday';
export const eventsQueryKey = ['events'] as const;
export const useEvents = () => useQuery({ queryKey: eventsQueryKey, queryFn:getEvents });
export const useEventMutations = () => { const qc = useQueryClient(); const invalidate = () => { void qc.invalidateQueries({ queryKey:eventsQueryKey }); void qc.invalidateQueries({ queryKey:todayQueryKey }); }; return { create: useMutation({ mutationFn:createEvent, onSuccess:invalidate }), update: useMutation({ mutationFn:({ id,input }:{id:string; input:Parameters<typeof updateEvent>[1]}) => updateEvent(id,input), onSuccess:invalidate }), cancel: useMutation({ mutationFn:cancelEvent, onSuccess:invalidate }) }; };
