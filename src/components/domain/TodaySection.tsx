import type { PropsWithChildren } from 'react';
import { EmptyState } from '../ui/EmptyState';
export function TodaySection({ title, count, children }: PropsWithChildren<{ title:string; count:number }>) { return <section className="space-y-3"><div className="flex items-center justify-between"><h2 className="text-lg font-semibold">{title}</h2><span className="text-sm text-slate-500">{count}</span></div>{count === 0 ? <EmptyState title={`No ${title.toLowerCase()}`} /> : children}</section>; }
