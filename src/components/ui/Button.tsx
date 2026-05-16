import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary'|'secondary'|'danger'|'ghost' }>;

export function Button({ children, className='', variant='primary', type='button', ...props }: Props) {
  const styles = {
    primary:'bg-blue-600 text-white hover:bg-blue-700',
    secondary:'bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600',
    danger:'bg-red-600 text-white hover:bg-red-700',
    ghost:'bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800',
  };
  return <button type={type} className={`rounded-lg px-3 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${className}`} {...props}>{children}</button>;
}
