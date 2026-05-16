import type React from 'react';
import { useI18n } from '../../i18n/translations';

export function EmptyState({ title, description, action }: { title?:string; description?:string; action?: React.ReactNode }) {
  const { t } = useI18n();
  return <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-slate-500 dark:border-slate-700"><p className="font-medium text-slate-700 dark:text-slate-200">{title ?? t('nothingHereYet')}</p>{description && <p className="mt-1 text-sm">{description}</p>}{action && <div className="mt-3">{action}</div>}</div>;
}
