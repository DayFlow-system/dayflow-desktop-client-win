import { z } from 'zod';
import { energyLevels } from '../types/task';
import { healthStates } from '../types/dayState';
export const dayStateSchema = z.object({ id:z.string(), date:z.string(), health:z.enum(healthStates), energy:z.enum(energyLevels), mood:z.number().nullable(), notes:z.string().nullable(), createdAt:z.string(), updatedAt:z.string() });
export const dayStateInputSchema = z.object({ health:z.enum(healthStates), energy:z.enum(energyLevels), mood:z.coerce.number().min(1).max(5).nullable().optional(), notes:z.string().optional().transform(v => v ? v : null) });
