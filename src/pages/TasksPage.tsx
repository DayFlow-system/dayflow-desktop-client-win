import { useMemo, useState } from 'react';
import { TaskCard } from '../components/domain/TaskCard';
import { TaskForm } from '../components/forms/TaskForm';
import { Button } from '../components/ui/Button';
import { EmptyState } from '../components/ui/EmptyState';
import { ErrorState } from '../components/ui/ErrorState';
import { Input } from '../components/ui/Input';
import { LoadingState } from '../components/ui/LoadingState';
import { Modal } from '../components/ui/Modal';
import { Select } from '../components/ui/Select';
import { useTaskMutations, useTasks } from '../hooks/useTasks';
import { useI18n } from '../i18n/translations';
import { taskStatuses, taskTypes, type Task } from '../types/task';

export function TasksPage() {
  const q=useTasks();
  const m=useTaskMutations();
  const { t, enumLabel } = useI18n();
  const [search,setSearch]=useState('');
  const [status,setStatus]=useState('all');
  const [type,setType]=useState('all');
  const [edit,setEdit]=useState<Task|null>(null);
  const [create,setCreate]=useState(false);
  const tasks=useMemo(()=> (q.data ?? []).filter(task => (status==='all'||task.status===status) && (type==='all'||task.type===type) && task.title.toLowerCase().includes(search.toLowerCase())),[q.data,search,status,type]);
  if(q.isLoading) return <LoadingState />;
  if(q.isError) return <ErrorState error={q.error} onRetry={() => void q.refetch()} />;
  return <div className="space-y-4"><div className="flex items-center justify-between"><h1 className="text-2xl font-bold">{t('tasks')}</h1><Button onClick={()=>setCreate(true)}>{t('createTask')}</Button></div><div className="grid gap-3 md:grid-cols-3"><Input placeholder={t('searchTitle')} value={search} onChange={e=>setSearch(e.target.value)} /><Select value={status} onChange={e=>setStatus(e.target.value)}><option value="all">{t('allStatuses')}</option>{taskStatuses.map(x=><option key={x} value={x}>{enumLabel('status', x)}</option>)}</Select><Select value={type} onChange={e=>setType(e.target.value)}><option value="all">{t('allTypes')}</option>{taskTypes.map(x=><option key={x} value={x}>{enumLabel('type', x)}</option>)}</Select></div>{tasks.length===0 ? <EmptyState title={t('noTasks')} /> : <div className="grid gap-3">{tasks.map(task=><TaskCard key={task.id} task={task} statusPending={m.update.isPending} onEdit={()=>setEdit(task)} onArchive={()=>{ if (window.confirm(t('archiveTaskConfirm'))) m.archive.mutate(task.id); }} onStatus={(nextStatus)=>m.update.mutate({id:task.id,input:{status:nextStatus}})} />)}</div>}<Modal open={create} title={t('createTask')} onClose={()=>setCreate(false)}><TaskForm onSubmit={(input)=>m.create.mutate(input,{onSuccess:()=>setCreate(false)})} submitLabel={t('create')} /></Modal><Modal open={!!edit} title={t('editTask')} onClose={()=>setEdit(null)}>{edit && <TaskForm initial={edit} onSubmit={(input)=>m.update.mutate({id:edit.id,input},{onSuccess:()=>setEdit(null)})} />}</Modal></div>;
}
