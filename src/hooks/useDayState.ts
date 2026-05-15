import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getTodayDayState, updateTodayDayState } from '../api/dayState.api';
import { todayQueryKey } from './useToday';
export const dayStateQueryKey = ['day-state','today'] as const;
export const useDayState = () => useQuery({ queryKey:dayStateQueryKey, queryFn:getTodayDayState });
export const useDayStateMutation = () => { const qc = useQueryClient(); return useMutation({ mutationFn:updateTodayDayState, onSuccess:() => { void qc.invalidateQueries({ queryKey:dayStateQueryKey }); void qc.invalidateQueries({ queryKey:todayQueryKey }); } }); };
