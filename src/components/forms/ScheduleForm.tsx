import { FormEvent, useState } from 'react';
import { useI18n, type TranslationKey } from '../../i18n/translations';
import { scheduleInputSchema } from '../../schemas/schedule.schema';
import { importanceLevels } from '../../types/event';
import { scheduleStatuses, scheduleTypes, type ScheduleBlock, type ScheduleInput } from '../../types/schedule';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';

const empty: ScheduleInput = { title:'', dayOfWeek:1, startTime:'09:00', endTime:null, description:null, type:'routine', status:'active', importance:'medium', location:null };
const dayKeys: TranslationKey[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export function ScheduleForm({ initial, onSubmit, submitLabel }: { initial?:ScheduleBlock; onSubmit:(input:ScheduleInput)=>void; submitLabel?:string }) {
  const { t, enumLabel } = useI18n();
  const [v,setV]=useState<ScheduleInput>(initial ?? empty);
  const [error,setError]=useState('');
  const set=(k:keyof ScheduleInput,val:string|number|null)=>setV(s=>({...s,[k]:val}));
  const setOptionalString=(k:keyof ScheduleInput,val:string)=>set(k, val.trim() === '' ? null : val);
  const submit=(e:FormEvent)=>{e.preventDefault(); const parsed=scheduleInputSchema.safeParse(v); if(!parsed.success){setError(parsed.error.issues[0]?.message ?? t('invalidBlock')); return;} setError(''); onSubmit(parsed.data as ScheduleInput);};
  return <form onSubmit={submit} className="grid gap-3"><Input aria-label={t('title')} placeholder={t('title')} value={v.title} onChange={e=>set('title',e.target.value)} /><Textarea aria-label={t('description')} placeholder={t('description')} value={v.description ?? ''} onChange={e=>setOptionalString('description',e.target.value)} /><div className="grid gap-3 md:grid-cols-3"><label className="grid gap-1 text-sm font-medium"><span>{t('dayOfWeek')}</span><Select value={v.dayOfWeek} onChange={e=>set('dayOfWeek',Number(e.target.value))}>{dayKeys.map((key,index)=><option key={key} value={index+1}>{t(key)}</option>)}</Select></label><label className="grid gap-1 text-sm font-medium"><span>{t('startTime')}</span><Input type="time" value={v.startTime} onChange={e=>set('startTime',e.target.value)} /></label><label className="grid gap-1 text-sm font-medium"><span>{t('endTime')}</span><Input type="time" value={v.endTime ?? ''} onChange={e=>setOptionalString('endTime',e.target.value)} /></label></div><div className="grid gap-3 md:grid-cols-4"><label className="grid gap-1 text-sm font-medium"><span>{t('type')}</span><Select value={v.type} onChange={e=>set('type',e.target.value)}>{scheduleTypes.map(x=><option key={x} value={x}>{enumLabel('type', x)}</option>)}</Select></label><label className="grid gap-1 text-sm font-medium"><span>{t('status')}</span><Select value={v.status} onChange={e=>set('status',e.target.value)}>{scheduleStatuses.map(x=><option key={x} value={x}>{enumLabel('status', x)}</option>)}</Select></label><label className="grid gap-1 text-sm font-medium"><span>{t('importance')}</span><Select value={v.importance} onChange={e=>set('importance',e.target.value)}>{importanceLevels.map(x=><option key={x} value={x}>{enumLabel('importance', x)}</option>)}</Select></label><label className="grid gap-1 text-sm font-medium"><span>{t('location')}</span><Input placeholder={t('location')} value={v.location ?? ''} onChange={e=>setOptionalString('location',e.target.value)} /></label></div>{error && <p className="text-sm text-red-600">{error}</p>}<Button type="submit">{submitLabel ?? t('saveBlock')}</Button></form>;
}
