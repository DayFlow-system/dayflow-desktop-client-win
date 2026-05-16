import { FormEvent, useState } from 'react';
import { useI18n } from '../../i18n/translations';
import { eventInputSchema } from '../../schemas/event.schema';
import { eventStatuses, importanceLevels, type DayFlowEvent, type EventInput } from '../../types/event';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';

const empty: EventInput = { title:'', date:new Date().toISOString().slice(0,10), description:null, startTime:null, endTime:null, status:'planned', importance:'medium', location:null };

export function EventForm({ initial, onSubmit, submitLabel }: { initial?:DayFlowEvent; onSubmit:(input:EventInput)=>void; submitLabel?:string }) {
  const { t, enumLabel } = useI18n();
  const [v,setV]=useState<EventInput>(initial ?? empty);
  const [error,setError]=useState('');
  const set=(k:keyof EventInput,val:string|null)=>setV(s=>({...s,[k]:val}));
  const setOptionalString=(k:keyof EventInput,val:string)=>set(k, val.trim() === '' ? null : val);
  const submit=(e:FormEvent)=>{e.preventDefault(); const parsed=eventInputSchema.safeParse(v); if(!parsed.success){setError(parsed.error.issues[0]?.message ?? t('invalidEvent')); return;} setError(''); onSubmit(parsed.data as EventInput);};
  return <form onSubmit={submit} className="grid gap-3"><Input aria-label={t('title')} placeholder={t('title')} value={v.title} onChange={e=>set('title',e.target.value)} /><Textarea aria-label={t('description')} placeholder={t('description')} value={v.description ?? ''} onChange={e=>setOptionalString('description',e.target.value)} /><div className="grid gap-3 md:grid-cols-3"><label className="grid gap-1 text-sm font-medium"><span>{t('date')}</span><Input type="date" value={v.date} onChange={e=>set('date',e.target.value)} /></label><label className="grid gap-1 text-sm font-medium"><span>{t('startTime')}</span><Input type="time" value={v.startTime ?? ''} onChange={e=>setOptionalString('startTime',e.target.value)} /></label><label className="grid gap-1 text-sm font-medium"><span>{t('endTime')}</span><Input type="time" value={v.endTime ?? ''} onChange={e=>setOptionalString('endTime',e.target.value)} /></label></div><div className="grid gap-3 md:grid-cols-3"><label className="grid gap-1 text-sm font-medium"><span>{t('status')}</span><Select value={v.status} onChange={e=>set('status',e.target.value)}>{eventStatuses.map(x=><option key={x} value={x}>{enumLabel('status', x)}</option>)}</Select></label><label className="grid gap-1 text-sm font-medium"><span>{t('importance')}</span><Select value={v.importance} onChange={e=>set('importance',e.target.value)}>{importanceLevels.map(x=><option key={x} value={x}>{enumLabel('importance', x)}</option>)}</Select></label><label className="grid gap-1 text-sm font-medium"><span>{t('location')}</span><Input placeholder={t('location')} value={v.location ?? ''} onChange={e=>setOptionalString('location',e.target.value)} /></label></div>{error && <p className="text-sm text-red-600">{error}</p>}<Button type="submit">{submitLabel ?? t('saveEvent')}</Button></form>;
}
