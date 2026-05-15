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
export function TodayPage() { const q = useToday(); const taskMutations = useTaskMutations(); if(q.isLoading) return <LoadingState label="Loading Today dashboard..." />; if(q.isError) return <ErrorState error={q.error} onRetry={() => void q.refetch()} />; const d = q.data!; return <div className="space-y-6"><div className="flex items-center justify-between"><h1 className="text-2xl font-bold">Today · {d.date}</h1><Button onClick={() => void q.refetch()}>Refresh</Button></div><TodaySection title="Day State" count={1}><DayStateCard state={d.dayState} /></TodaySection><TodaySection title="Mandatory Events" count={d.mandatoryEvents.length}>{d.mandatoryEvents.map(e=><EventCard key={e.id} event={e} />)}</TodaySection><TodaySection title="Planned Events" count={d.plannedEvents.length}>{d.plannedEvents.map(e=><EventCard key={e.id} event={e} />)}</TodaySection><TodaySection title="Schedule" count={d.scheduleBlocks.length}>{d.scheduleBlocks.map(b=><ScheduleBlockCard key={b.id} block={b} />)}</TodaySection>{(['Deadline Tasks','Planned Tasks','Suggested Tasks'] as const).map((title) => { const items = title === 'Deadline Tasks' ? d.deadlineTasks : title === 'Planned Tasks' ? d.plannedTasks : d.suggestedTasks; return <TodaySection key={title} title={title} count={items.length}>{items.map(t=><TaskCard key={t.id} task={t} onStatus={(status)=>taskMutations.update.mutate({ id:t.id, input:{ status } })} />)}</TodaySection>; })}</div>; }
