import { useQuery } from '@tanstack/react-query';
import { getToday } from '../api/today.api';
export const todayQueryKey = ['today'] as const;
export const useToday = () => useQuery({ queryKey: todayQueryKey, queryFn: getToday });
