export const healthStates = ['healthy','slightly_sick','sick'] as const;
export type HealthState = (typeof healthStates)[number];
export type DayState = { id:string; date:string; health:HealthState; energy:'low'|'medium'|'high'; mood:number|null; notes:string|null; createdAt:string; updatedAt:string };
export type DayStateInput = Partial<Pick<DayState,'health'|'energy'|'mood'|'notes'>>;
