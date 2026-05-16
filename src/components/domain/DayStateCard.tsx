import type { DayState } from '../../types/dayState';
import { useI18n } from '../../i18n/translations';
import { formatDate } from '../../utils/date';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

export function DayStateCard({ state }: { state:DayState }) {
  const { t, enumLabel } = useI18n();
  return <Card><h3 className="font-semibold">{t('dayState')} · {formatDate(state.date)}</h3><div className="mt-3 flex flex-wrap gap-2"><Badge tone="green">{t('health')} {enumLabel('health', state.health)}</Badge><Badge tone="blue">{t('energy')} {enumLabel('energy', state.energy)}</Badge>{state.mood && <Badge tone="amber">{t('mood')} {state.mood}/5</Badge>}</div>{state.notes && <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{state.notes}</p>}</Card>;
}
