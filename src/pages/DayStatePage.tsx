import { DayStateCard } from '../components/domain/DayStateCard';
import { DayStateForm } from '../components/forms/DayStateForm';
import { Card } from '../components/ui/Card';
import { ErrorState } from '../components/ui/ErrorState';
import { LoadingState } from '../components/ui/LoadingState';
import { useDayState, useDayStateMutation } from '../hooks/useDayState';
import { useI18n } from '../i18n/translations';

export function DayStatePage() {
  const q=useDayState();
  const m=useDayStateMutation();
  const { t } = useI18n();
  if(q.isLoading) return <LoadingState />;
  if(q.isError) return <ErrorState error={q.error} onRetry={() => void q.refetch()} />;
  return <div className="space-y-4"><h1 className="text-2xl font-bold">{t('dayState')}</h1><DayStateCard state={q.data!} /><Card><DayStateForm initial={q.data} onSubmit={(input)=>m.mutate(input)} /></Card></div>;
}
