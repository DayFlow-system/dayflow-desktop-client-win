import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { archiveScheduleBlock, createScheduleBlock, getSchedule, getTodaySchedule, updateScheduleBlock } from '../api/schedule.api';
import { todayQueryKey } from './useToday';
export const scheduleQueryKey = ['schedule'] as const;
export const todayScheduleQueryKey = ['schedule','today'] as const;
export const useSchedule = () => useQuery({ queryKey:scheduleQueryKey, queryFn:getSchedule });
export const useTodaySchedule = () => useQuery({ queryKey:todayScheduleQueryKey, queryFn:getTodaySchedule });
export const useScheduleMutations = () => { const qc = useQueryClient(); const invalidate = () => { void qc.invalidateQueries({ queryKey:scheduleQueryKey }); void qc.invalidateQueries({ queryKey:todayScheduleQueryKey }); void qc.invalidateQueries({ queryKey:todayQueryKey }); }; return { create: useMutation({ mutationFn:createScheduleBlock, onSuccess:invalidate }), update: useMutation({ mutationFn:({ id,input }:{id:string; input:Parameters<typeof updateScheduleBlock>[1]}) => updateScheduleBlock(id,input), onSuccess:invalidate }), archive: useMutation({ mutationFn:archiveScheduleBlock, onSuccess:invalidate }) }; };
