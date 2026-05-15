import type { DayFlowEvent } from '../../types/event';
import { formatDate } from '../../utils/date';
import { titleize } from '../../utils/formatting';
import { formatTimeRange } from '../../utils/time';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
export function EventCard({ event, onEdit, onCancel }: { event:DayFlowEvent; onEdit?:()=>void; onCancel?:()=>void }) { const mandatory = event.importance === 'mandatory'; return <Card className={mandatory ? 'border-red-300 bg-red-50 dark:bg-red-950/20' : ''}><div className="flex items-start justify-between gap-4"><div><h3 className="font-semibold">{event.title}</h3><p className="text-sm text-slate-500">{formatDate(event.date)} · {formatTimeRange(event.startTime, event.endTime)}</p>{event.description && <p className="mt-1 text-sm text-slate-500">{event.description}</p>}<div className="mt-3 flex flex-wrap gap-2"><Badge tone={mandatory ? 'red' : 'blue'}>{titleize(event.importance)}</Badge><Badge>{titleize(event.status)}</Badge>{event.location && <Badge tone="green">{event.location}</Badge>}</div></div><div className="flex gap-2">{onEdit && <Button variant="ghost" onClick={onEdit}>Edit</Button>}{onCancel && <Button variant="danger" onClick={onCancel}>Cancel</Button>}</div></div></Card>; }
