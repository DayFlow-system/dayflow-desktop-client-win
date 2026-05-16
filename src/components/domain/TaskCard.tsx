import type { Task, TaskStatus } from '../../types/task';
import { useI18n } from '../../i18n/translations';
import { formatDate } from '../../utils/date';
import { priorityLabel } from '../../utils/formatting';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function TaskCard({ task, onStatus, onEdit, onArchive, statusPending=false }: { task:Task; onStatus?:(status:TaskStatus)=>void; onEdit?:()=>void; onArchive?:()=>void; statusPending?:boolean }) {
  const { t, enumLabel } = useI18n();
  return <Card><div className="flex items-start justify-between gap-4"><div><h3 className="font-semibold">{task.title}</h3>{task.description && <p className="mt-1 text-sm text-slate-500">{task.description}</p>}<div className="mt-3 flex flex-wrap gap-2"><Badge tone="purple">{priorityLabel(task.priority)}</Badge><Badge>{enumLabel('status', task.status)}</Badge><Badge tone="blue">{enumLabel('type', task.type)}</Badge><Badge tone="green">{t('energy')} {enumLabel('energy', task.energyRequired)}</Badge><Badge>{enumLabel('healthRule', task.healthRule)}</Badge>{task.deadline && <Badge tone="red">{t('deadline')} {formatDate(task.deadline)}</Badge>}{task.plannedDate && <Badge tone="amber">{t('planned')} {formatDate(task.plannedDate)}</Badge>}</div></div><div className="flex flex-wrap justify-end gap-2"><Button variant="secondary" disabled={statusPending} onClick={() => onStatus?.('in_progress')}>{t('start')}</Button><Button variant="secondary" disabled={statusPending} onClick={() => onStatus?.('done')}>{t('done')}</Button><Button variant="secondary" disabled={statusPending} onClick={() => onStatus?.('skipped')}>{t('skip')}</Button>{onEdit && <Button variant="ghost" onClick={onEdit}>{t('edit')}</Button>}{onArchive && <Button variant="danger" onClick={onArchive}>{t('archive')}</Button>}</div></div></Card>;
}
