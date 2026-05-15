import { describe, expect, it } from 'vitest';
import { formatTimeRange, isEndAfterStart, isTime } from '../../src/utils/time';
describe('time utils', () => { it('validates HH:mm', () => { expect(isTime('09:30')).toBe(true); expect(isTime('25:00')).toBe(false); }); it('checks ranges', () => { expect(isEndAfterStart('09:00','10:00')).toBe(true); expect(isEndAfterStart('10:00','09:00')).toBe(false); }); it('formats ranges', () => { expect(formatTimeRange('09:00','10:00')).toBe('09:00–10:00'); }); });
