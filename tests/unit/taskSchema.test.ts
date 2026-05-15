import { describe, expect, it } from 'vitest';
import { taskInputSchema } from '../../src/schemas/task.schema';

describe('task input schema', () => {
  it('allows empty optional date fields', () => {
    const parsed = taskInputSchema.parse({
      title: 'Create DayFlow task',
      description: null,
      deadline: null,
      plannedDate: '',
      status: 'planned',
      type: 'task',
      priority: 3,
      energyRequired: 'medium',
      healthRule: 'always',
    });

    expect(parsed.deadline).toBeNull();
    expect(parsed.plannedDate).toBeNull();
  });
});
