import { FormEvent, useState } from 'react';
import { useI18n } from '../../i18n/translations';
import { dayStateInputSchema } from '../../schemas/dayState.schema';
import { healthStates, type DayState, type DayStateInput } from '../../types/dayState';
import { energyLevels } from '../../types/task';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';

export function DayStateForm({ initial, onSubmit }: { initial?:DayState; onSubmit:(input:DayStateInput)=>void }) {
  const { t, enumLabel } = useI18n();
  const [v,setV]=useState<DayStateInput>({ health:initial?.health ?? 'healthy', energy:initial?.energy ?? 'medium', mood:initial?.mood ?? null, notes:initial?.notes ?? '' });
  const [error,setError]=useState('');
  const set=(k:keyof DayStateInput,val:string|number|null)=>setV(s=>({...s,[k]:val}));
  const submit=(e:FormEvent)=>{e.preventDefault(); const parsed=dayStateInputSchema.safeParse(v); if(!parsed.success){setError(parsed.error.issues[0]?.message ?? t('invalidState')); return;} setError(''); onSubmit(parsed.data);};
  return <form onSubmit={submit} className="grid gap-3"><div className="grid gap-3 md:grid-cols-3"><label className="grid gap-1 text-sm font-medium"><span>{t('health')}</span><Select value={v.health} onChange={e=>set('health',e.target.value)}>{healthStates.map(x=><option key={x} value={x}>{enumLabel('health', x)}</option>)}</Select></label><label className="grid gap-1 text-sm font-medium"><span>{t('energy')}</span><Select value={v.energy} onChange={e=>set('energy',e.target.value)}>{energyLevels.map(x=><option key={x} value={x}>{enumLabel('energy', x)}</option>)}</Select></label><label className="grid gap-1 text-sm font-medium"><span>{t('mood')}</span><Input type="number" min="1" max="5" placeholder={t('mood')} value={v.mood ?? ''} onChange={e=>set('mood',e.target.value ? Number(e.target.value) : null)} /></label></div><Textarea placeholder={t('notes')} value={v.notes ?? ''} onChange={e=>set('notes',e.target.value)} />{error && <p className="text-sm text-red-600">{error}</p>}<Button type="submit">{t('saveDayState')}</Button></form>;
}
