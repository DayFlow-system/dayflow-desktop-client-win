import { describe, expect, it } from 'vitest';
import { dayName } from '../../src/utils/date';
describe('date utils', () => { it('maps day of week', () => { expect(dayName(1)).toBe('Monday'); }); });
