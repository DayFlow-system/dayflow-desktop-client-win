import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DayStateCard } from '../../src/components/domain/DayStateCard';
import { dayState } from '../mocks/fixtures';
import { renderWithProviders } from '../testUtils';
describe('DayStateCard', () => { it('renders state', () => { renderWithProviders(<DayStateCard state={dayState} />); expect(screen.getByText(/Health Healthy/)).toBeInTheDocument(); expect(screen.getByText('Good day')).toBeInTheDocument(); }); });
