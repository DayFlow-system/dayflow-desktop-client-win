import type { TextareaHTMLAttributes } from 'react';
export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) { return <textarea {...props} className={`w-full rounded-lg border-slate-300 bg-white text-sm shadow-sm dark:border-slate-700 dark:bg-slate-900 ${props.className ?? ''}`} />; }
