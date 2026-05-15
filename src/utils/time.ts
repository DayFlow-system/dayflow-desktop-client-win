export const isTime = (value: string) => /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
export const minutesFromTime = (value: string) => { const [h,m] = value.split(':').map(Number); return h * 60 + m; };
export const isEndAfterStart = (start?: string | null, end?: string | null) => !start || !end || minutesFromTime(end) > minutesFromTime(start);
export const formatTimeRange = (start?: string | null, end?: string | null) => start ? `${start}${end ? `–${end}` : ''}` : 'No time';
