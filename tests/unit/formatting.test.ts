import { describe, expect, it } from 'vitest';
import { priorityLabel, titleize } from '../../src/utils/formatting';
describe('formatting', () => { it('titleizes enum values', () => { expect(titleize('in_progress')).toBe('In Progress'); }); it('formats priority', () => { expect(priorityLabel(3)).toBe('Priority 3'); }); });
