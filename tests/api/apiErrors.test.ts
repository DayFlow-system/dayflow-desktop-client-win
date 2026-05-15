import { describe, expect, it } from 'vitest';
import { DayFlowApiError, friendlyErrorMessage, toApiError } from '../../src/api/errors';
describe('api errors', () => { it('maps error class', () => { const error = new DayFlowApiError({ code:'VALIDATION_ERROR', message:'Bad', details:[] }); expect(toApiError(error).code).toBe('VALIDATION_ERROR'); expect(friendlyErrorMessage(error)).toContain('validation'); }); });
