import { useI18n } from '../../i18n/translations';

export function LoadingState({ label }: { label?:string }) {
  const { t } = useI18n();
  return <div className="animate-pulse rounded-xl border border-slate-200 bg-slate-50 p-6 text-slate-500 dark:border-slate-800 dark:bg-slate-900">{label ?? `${t('loading')}...`}</div>;
}
