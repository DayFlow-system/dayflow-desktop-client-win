import { useConnectionStatus } from '../../hooks/useConnectionStatus';
import { useI18n } from '../../i18n/translations';
import { formatDate } from '../../utils/date';
import { Badge } from '../ui/Badge';

export function Header() {
  const { status } = useConnectionStatus();
  const { t } = useI18n();
  const tone: 'green' | 'amber' | 'red' = status === 'connected' ? 'green' : status === 'loading' ? 'amber' : 'red';

  return <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-950"><div><h1 className="text-lg font-semibold">DayFlow</h1><p className="text-sm text-slate-500">{formatDate(new Date())}</p></div><Badge tone={tone}>{t(status)}</Badge></header>;
}
