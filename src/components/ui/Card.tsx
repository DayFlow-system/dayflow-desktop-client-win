import type { PropsWithChildren } from 'react';
export function Card({ children, className='' }: PropsWithChildren<{ className?: string }>) { return <section className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>{children}</section>; }
