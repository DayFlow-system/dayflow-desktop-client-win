import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { EventCard } from '../../src/components/domain/EventCard';
import { event } from '../mocks/fixtures';
import { renderWithProviders } from '../testUtils';
describe('EventCard', () => { it('renders event', () => { renderWithProviders(<EventCard event={event} />); expect(screen.getByText('Doctor')).toBeInTheDocument(); expect(screen.getByText('Mandatory')).toBeInTheDocument(); }); });
