import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { archiveTask, createTask, getTasks, updateTask } from '../api/tasks.api';
import { todayQueryKey } from './useToday';
export const tasksQueryKey = ['tasks'] as const;
export const useTasks = () => useQuery({ queryKey: tasksQueryKey, queryFn: getTasks });
export const useTaskMutations = () => { const qc = useQueryClient(); const invalidate = () => { void qc.invalidateQueries({ queryKey: tasksQueryKey }); void qc.invalidateQueries({ queryKey: todayQueryKey }); }; return { create: useMutation({ mutationFn:createTask, onSuccess:invalidate }), update: useMutation({ mutationFn:({ id,input }:{id:string; input:Parameters<typeof updateTask>[1]}) => updateTask(id,input), onSuccess:invalidate }), archive: useMutation({ mutationFn:archiveTask, onSuccess:invalidate }) }; };
