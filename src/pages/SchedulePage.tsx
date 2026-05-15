import { useState } from 'react';
import { ScheduleBlockCard } from '../components/domain/ScheduleBlockCard';
import { ScheduleForm } from '../components/forms/ScheduleForm';
import { Button } from '../components/ui/Button';
import { EmptyState } from '../components/ui/EmptyState';
import { ErrorState } from '../components/ui/ErrorState';
import { LoadingState } from '../components/ui/LoadingState';
import { Modal } from '../components/ui/Modal';
import { useSchedule, useScheduleMutations } from '../hooks/useSchedule';
import type { ScheduleBlock } from '../types/schedule';
import { dayNames } from '../utils/date';
export function SchedulePage() { const q=useSchedule(); const m=useScheduleMutations(); const [create,setCreate]=useState(false); const [edit,setEdit]=useState<ScheduleBlock|null>(null); if(q.isLoading) return <LoadingState />; if(q.isError) return <ErrorState error={q.error} onRetry={() => void q.refetch()} />; return <div className="space-y-4"><div className="flex justify-between"><h1 className="text-2xl font-bold">Schedule</h1><Button onClick={()=>setCreate(true)}>Create Block</Button></div><div className="grid gap-4 lg:grid-cols-7">{dayNames.map((day,i)=>{ const blocks=(q.data??[]).filter(b=>b.dayOfWeek===i+1); return <section key={day} className="space-y-3 rounded-2xl bg-slate-100 p-3 dark:bg-slate-900"><h2 className="font-semibold">{day}</h2>{blocks.length===0 ? <EmptyState title="Free" /> : blocks.map(b=><ScheduleBlockCard key={b.id} block={b} onEdit={()=>setEdit(b)} onArchive={()=>{ if (window.confirm('Archive this schedule block?')) m.archive.mutate(b.id); }} />)}</section>; })}</div><Modal open={create} title="Create schedule block" onClose={()=>setCreate(false)}><ScheduleForm onSubmit={(input)=>m.create.mutate(input,{onSuccess:()=>setCreate(false)})} submitLabel="Create" /></Modal><Modal open={!!edit} title="Edit schedule block" onClose={()=>setEdit(null)}>{edit && <ScheduleForm initial={edit} onSubmit={(input)=>m.update.mutate({id:edit.id,input},{onSuccess:()=>setEdit(null)})} />}</Modal></div>; }
