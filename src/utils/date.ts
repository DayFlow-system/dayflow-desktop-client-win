export const dayNames = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'] as const;
export const formatDate = (value: string | Date) => new Intl.DateTimeFormat(undefined, { dateStyle:'medium' }).format(typeof value === 'string' ? new Date(`${value}T00:00:00`) : value);
export const todayIsoDate = () => new Date().toISOString().slice(0,10);
export const dayName = (dayOfWeek: number) => dayNames[dayOfWeek - 1] ?? 'Unknown';
