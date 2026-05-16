import { DayStateCard } from '../components/domain/DayStateCard';
import { EventCard } from '../components/domain/EventCard';
import { ScheduleBlockCard } from '../components/domain/ScheduleBlockCard';
import { TaskCard } from '../components/domain/TaskCard';
import { TodaySection } from '../components/domain/TodaySection';
import { Button } from '../components/ui/Button';
import { ErrorState } from '../components/ui/ErrorState';
import { LoadingState } from '../components/ui/LoadingState';
import { useTaskMutations } from '../hooks/useTasks';
import { useToday } from '../hooks/useToday';
import { useI18n } from '../i18n/translations';

export function TodayPage() {
  const q = useToday();
  const taskMutations = useTaskMutations();
  const { t } = useI18n();
  if(q.isLoading) return <LoadingState label={t('loadingTodayDashboard')} />;
  if(q.isError) return <ErrorState error={q.error} onRetry={() => void q.refetch()} />;
  const d = q.data!;
  const taskSections = [
    { title: t('deadlineTasks'), items: d.deadlineTasks },
    { title: t('plannedTasks'), items: d.plannedTasks },
    { title: t('suggestedTasks'), items: d.suggestedTasks },
  ];

  return <div className="space-y-6"><div className="flex items-center justify-between"><h1 className="text-2xl font-bold">{t('today')} · {d.date}</h1><Button onClick={() => void q.refetch()}>{t('refresh')}</Button></div><TodaySection title={t('dayState')} count={1}><DayStateCard state={d.dayState} /></TodaySection><TodaySection title={t('mandatoryEvents')} count={d.mandatoryEvents.length}>{d.mandatoryEvents.map(e=><EventCard key={e.id} event={e} />)}</TodaySection><TodaySection title={t('plannedEvents')} count={d.plannedEvents.length}>{d.plannedEvents.map(e=><EventCard key={e.id} event={e} />)}</TodaySection><TodaySection title={t('scheduleBlocks')} count={d.scheduleBlocks.length}>{d.scheduleBlocks.map(b=><ScheduleBlockCard key={b.id} block={b} />)}</TodaySection>{taskSections.map(({ title, items }) => <TodaySection key={title} title={title} count={items.length}>{items.map(task=><TaskCard key={task.id} task={task} statusPending={taskMutations.update.isPending} onStatus={(status)=>taskMutations.update.mutate({ id:task.id, input:{ status } })} />)}</TodaySection>)}</div>;
}
