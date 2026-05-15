import { useQuery } from '@tanstack/react-query';
import { getHealth } from '../api/health.api';
import type { ConnectionStatus } from '../types/api';
import { useSettingsStore } from '../store/settings.store';

export const useConnectionStatus = (): { status: ConnectionStatus; refetch: () => void } => {
  const serverUrl = useSettingsStore(s => s.serverUrl);
  const query = useQuery({ queryKey:['health', serverUrl], queryFn:getHealth, retry:false, refetchInterval:30000 });
  // Loading and error are normalized for the header so all pages show the same connection vocabulary.
  const status: ConnectionStatus = query.isLoading ? 'loading' : query.isSuccess ? 'connected' : query.isError ? 'error' : 'disconnected';
  return { status, refetch: () => { void query.refetch(); } };
};
