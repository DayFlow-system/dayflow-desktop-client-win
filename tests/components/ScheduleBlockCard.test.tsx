import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ScheduleBlockCard } from '../../src/components/domain/ScheduleBlockCard';
import { block } from '../mocks/fixtures';
import { renderWithProviders } from '../testUtils';
describe('ScheduleBlockCard', () => { it('renders block', () => { renderWithProviders(<ScheduleBlockCard block={block} />); expect(screen.getByText('Morning study')).toBeInTheDocument(); expect(screen.getByText(/Friday/)).toBeInTheDocument(); }); });
