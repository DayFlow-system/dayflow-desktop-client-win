import type { ScheduleBlock } from '../../types/schedule';
import { dayName } from '../../utils/date';
import { titleize } from '../../utils/formatting';
import { formatTimeRange } from '../../utils/time';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
export function ScheduleBlockCard({ block, onEdit, onArchive }: { block:ScheduleBlock; onEdit?:()=>void; onArchive?:()=>void }) { return <Card><div className="flex items-start justify-between gap-3"><div><h3 className="font-semibold">{block.title}</h3><p className="text-sm text-slate-500">{dayName(block.dayOfWeek)} · {formatTimeRange(block.startTime, block.endTime)}</p>{block.description && <p className="mt-1 text-sm text-slate-500">{block.description}</p>}<div className="mt-3 flex flex-wrap gap-2"><Badge tone="blue">{titleize(block.type)}</Badge><Badge>{titleize(block.status)}</Badge><Badge tone={block.importance === 'mandatory' ? 'red' : 'amber'}>{titleize(block.importance)}</Badge>{block.location && <Badge tone="green">{block.location}</Badge>}</div></div><div className="flex gap-2">{onEdit && <Button variant="ghost" onClick={onEdit}>Edit</Button>}{onArchive && <Button variant="danger" onClick={onArchive}>Archive</Button>}</div></div></Card>; }
