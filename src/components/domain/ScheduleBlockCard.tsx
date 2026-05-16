import type { ScheduleBlock } from '../../types/schedule';
import { useI18n, type TranslationKey } from '../../i18n/translations';
import { formatTimeRange } from '../../utils/time';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const dayKeys: TranslationKey[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export function ScheduleBlockCard({ block, onEdit, onArchive }: { block:ScheduleBlock; onEdit?:()=>void; onArchive?:()=>void }) {
  const { t, enumLabel } = useI18n();
  return <Card><div className="flex items-start justify-between gap-3"><div><h3 className="font-semibold">{block.title}</h3><p className="text-sm text-slate-500">{t(dayKeys[block.dayOfWeek - 1])} · {formatTimeRange(block.startTime, block.endTime)}</p>{block.description && <p className="mt-1 text-sm text-slate-500">{block.description}</p>}<div className="mt-3 flex flex-wrap gap-2"><Badge tone="blue">{enumLabel('type', block.type)}</Badge><Badge>{enumLabel('status', block.status)}</Badge><Badge tone={block.importance === 'mandatory' ? 'red' : 'amber'}>{enumLabel('importance', block.importance)}</Badge>{block.location && <Badge tone="green">{block.location}</Badge>}</div></div><div className="flex gap-2">{onEdit && <Button variant="ghost" onClick={onEdit}>{t('edit')}</Button>}{onArchive && <Button variant="danger" onClick={onArchive}>{t('archive')}</Button>}</div></div></Card>;
}
