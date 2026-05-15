import { NavLink } from 'react-router-dom';
import { useI18n } from '../../i18n/translations';

const links = [
  ['/', 'today'],
  ['/tasks', 'tasks'],
  ['/events', 'events'],
  ['/schedule', 'schedule'],
  ['/day-state', 'dayState'],
  ['/settings', 'settings'],
] as const;

export function Sidebar() {
  const { t } = useI18n();

  return <aside className="w-60 border-r border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950"><div className="mb-6 text-xl font-bold text-blue-600">DayFlow</div><nav className="grid gap-1">{links.map(([to,labelKey])=><NavLink key={to} to={to} className={({isActive})=>`rounded-lg px-3 py-2 text-sm font-medium ${isActive ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`}>{t(labelKey)}</NavLink>)}</nav></aside>;
}
