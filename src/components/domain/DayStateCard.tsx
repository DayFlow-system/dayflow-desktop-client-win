import type { DayState } from '../../types/dayState';
import { formatDate } from '../../utils/date';
import { titleize } from '../../utils/formatting';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
export function DayStateCard({ state }: { state:DayState }) { return <Card><h3 className="font-semibold">Day State · {formatDate(state.date)}</h3><div className="mt-3 flex flex-wrap gap-2"><Badge tone="green">Health {titleize(state.health)}</Badge><Badge tone="blue">Energy {titleize(state.energy)}</Badge>{state.mood && <Badge tone="amber">Mood {state.mood}/5</Badge>}</div>{state.notes && <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{state.notes}</p>}</Card>; }
