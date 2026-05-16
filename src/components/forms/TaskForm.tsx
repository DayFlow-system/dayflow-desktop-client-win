import { FormEvent, useState } from 'react';
import { useI18n } from '../../i18n/translations';
import { taskInputSchema } from '../../schemas/task.schema';
import { energyLevels, healthRules, taskStatuses, taskTypes, type Task, type TaskInput } from '../../types/task';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';

const empty: TaskInput = { title:'', description:null, status:'planned', type:'task', priority:3, deadline:null, plannedDate:null, energyRequired:'medium', healthRule:'always' };

export function TaskForm({ initial, onSubmit, submitLabel }: { initial?:Task; onSubmit:(input:TaskInput)=>void; submitLabel?:string }) {
  const { t, enumLabel } = useI18n();
  const [v,setV]=useState<TaskInput>(initial ?? empty);
  const [error,setError]=useState('');
  const set=(k:keyof TaskInput,val:string|number|null)=>setV(s=>({...s,[k]:val}));
  const setOptionalString=(k:keyof TaskInput,val:string)=>set(k, val.trim() === '' ? null : val);
  const submit=(e:FormEvent)=>{e.preventDefault(); const parsed=taskInputSchema.safeParse(v); if(!parsed.success){setError(parsed.error.issues[0]?.message === 'Title is required' ? t('titleRequired') : t('invalidTask')); return;} setError(''); onSubmit(parsed.data as TaskInput);};

  return <form onSubmit={submit} className="grid gap-3"><Input aria-label={t('title')} placeholder={t('title')} value={v.title} onChange={e=>set('title',e.target.value)} /><Textarea aria-label={t('description')} placeholder={t('description')} value={v.description ?? ''} onChange={e=>setOptionalString('description',e.target.value)} /><div className="grid gap-3 md:grid-cols-3"><label className="grid gap-1 text-sm font-medium"><span>{t('status')}</span><Select value={v.status} onChange={e=>set('status',e.target.value)}>{taskStatuses.map(x=><option key={x} value={x}>{enumLabel('status', x)}</option>)}</Select></label><label className="grid gap-1 text-sm font-medium"><span>{t('type')}</span><Select value={v.type} onChange={e=>set('type',e.target.value)}>{taskTypes.map(x=><option key={x} value={x}>{enumLabel('type', x)}</option>)}</Select></label><label className="grid gap-1 text-sm font-medium"><span>{t('priority')}</span><Input type="number" min="1" max="5" value={v.priority} onChange={e=>set('priority',Number(e.target.value))} /></label></div><div className="grid gap-3 md:grid-cols-2"><label className="grid gap-1 text-sm font-medium"><span>{t('deadlineOptional')}</span><Input type="date" value={v.deadline ?? ''} onChange={e=>setOptionalString('deadline',e.target.value)} /></label><label className="grid gap-1 text-sm font-medium"><span>{t('plannedDateOptional')}</span><Input type="date" value={v.plannedDate ?? ''} onChange={e=>setOptionalString('plannedDate',e.target.value)} /></label></div><div className="grid gap-3 md:grid-cols-2"><label className="grid gap-1 text-sm font-medium"><span>{t('energyRequired')}</span><Select value={v.energyRequired} onChange={e=>set('energyRequired',e.target.value)}>{energyLevels.map(x=><option key={x} value={x}>{enumLabel('energy', x)}</option>)}</Select></label><label className="grid gap-1 text-sm font-medium"><span>{t('healthRule')}</span><Select value={v.healthRule} onChange={e=>set('healthRule',e.target.value)}>{healthRules.map(x=><option key={x} value={x}>{enumLabel('healthRule', x)}</option>)}</Select></label></div>{error && <p className="text-sm text-red-600">{error}</p>}<Button type="submit">{submitLabel ?? t('saveTask')}</Button></form>;
}
