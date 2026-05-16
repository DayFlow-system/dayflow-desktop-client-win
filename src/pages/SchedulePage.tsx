import { useState } from 'react';
import { ScheduleBlockCard } from '../components/domain/ScheduleBlockCard';
import { ScheduleForm } from '../components/forms/ScheduleForm';
import { Button } from '../components/ui/Button';
import { EmptyState } from '../components/ui/EmptyState';
import { ErrorState } from '../components/ui/ErrorState';
import { LoadingState } from '../components/ui/LoadingState';
import { Modal } from '../components/ui/Modal';
import { useSchedule, useScheduleMutations } from '../hooks/useSchedule';
import { useI18n, type TranslationKey } from '../i18n/translations';
import type { ScheduleBlock } from '../types/schedule';

const dayKeys: TranslationKey[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export function SchedulePage() {
  const q=useSchedule();
  const m=useScheduleMutations();
  const { t } = useI18n();
  const [create,setCreate]=useState(false);
  const [edit,setEdit]=useState<ScheduleBlock|null>(null);
  if(q.isLoading) return <LoadingState />;
  if(q.isError) return <ErrorState error={q.error} onRetry={() => void q.refetch()} />;
  return <div className="space-y-4"><div className="flex justify-between"><h1 className="text-2xl font-bold">{t('schedule')}</h1><Button onClick={()=>setCreate(true)}>{t('createBlock')}</Button></div><div className="grid gap-4 lg:grid-cols-7">{dayKeys.map((dayKey,index)=>{ const blocks=(q.data??[]).filter(block=>block.dayOfWeek===index+1); return <section key={dayKey} className="space-y-3 rounded-2xl bg-slate-100 p-3 dark:bg-slate-900"><h2 className="font-semibold">{t(dayKey)}</h2>{blocks.length===0 ? <EmptyState title={t('noScheduleBlocks')} /> : blocks.map(block=><ScheduleBlockCard key={block.id} block={block} onEdit={()=>setEdit(block)} onArchive={()=>{ if (window.confirm(t('archiveScheduleBlockConfirm'))) m.archive.mutate(block.id); }} />)}</section>; })}</div><Modal open={create} title={t('createScheduleBlock')} onClose={()=>setCreate(false)}><ScheduleForm onSubmit={(input)=>m.create.mutate(input,{onSuccess:()=>setCreate(false)})} submitLabel={t('create')} /></Modal><Modal open={!!edit} title={t('editScheduleBlock')} onClose={()=>setEdit(null)}>{edit && <ScheduleForm initial={edit} onSubmit={(input)=>m.update.mutate({id:edit.id,input},{onSuccess:()=>setEdit(null)})} />}</Modal></div>;
}
