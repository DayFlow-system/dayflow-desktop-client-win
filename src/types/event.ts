export const eventStatuses = ['planned','done','cancelled'] as const;
export const importanceLevels = ['low','medium','high','mandatory'] as const;
export type EventStatus = (typeof eventStatuses)[number];
export type Importance = (typeof importanceLevels)[number];
export type DayFlowEvent = { id:string; title:string; description:string|null; date:string; startTime:string|null; endTime:string|null; status:EventStatus; importance:Importance; location:string|null; createdAt:string; updatedAt:string };
export type EventInput = Partial<Omit<DayFlowEvent,'id'|'createdAt'|'updatedAt'>> & Pick<DayFlowEvent,'title'|'date'>;
