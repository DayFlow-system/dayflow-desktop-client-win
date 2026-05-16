import type { DayFlowEvent } from '../../types/event';
import { useI18n } from '../../i18n/translations';
import { formatDate } from '../../utils/date';
import { formatTimeRange } from '../../utils/time';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function EventCard({ event, onEdit, onCancel }: { event:DayFlowEvent; onEdit?:()=>void; onCancel?:()=>void }) {
  const { t, enumLabel } = useI18n();
  const mandatory = event.importance === 'mandatory';
  return <Card className={mandatory ? 'border-red-300 bg-red-50 dark:bg-red-950/20' : ''}><div className="flex items-start justify-between gap-4"><div><h3 className="font-semibold">{event.title}</h3><p className="text-sm text-slate-500">{formatDate(event.date)} · {formatTimeRange(event.startTime, event.endTime)}</p>{event.description && <p className="mt-1 text-sm text-slate-500">{event.description}</p>}<div className="mt-3 flex flex-wrap gap-2"><Badge tone={mandatory ? 'red' : 'blue'}>{enumLabel('importance', event.importance)}</Badge><Badge>{enumLabel('status', event.status)}</Badge>{event.location && <Badge tone="green">{event.location}</Badge>}</div></div><div className="flex gap-2">{onEdit && <Button variant="ghost" onClick={onEdit}>{t('edit')}</Button>}{onCancel && <Button variant="danger" onClick={onCancel}>{t('cancel')}</Button>}</div></div></Card>;
}
