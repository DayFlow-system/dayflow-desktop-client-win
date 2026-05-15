import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TodayPage } from '../../src/pages/TodayPage';
import { today } from '../mocks/fixtures';
import { renderWithProviders } from '../testUtils';
describe('TodayPage', () => { it('renders dashboard sections', async () => { vi.spyOn(globalThis, 'fetch').mockImplementation(async (input) => { const url = String(input); if (url.endsWith('/today')) return new Response(JSON.stringify(today), { status:200 }); if (url.endsWith('/health')) return new Response(JSON.stringify({ status:'ok' }), { status:200 }); return new Response('{}', { status:200 }); }); renderWithProviders(<TodayPage />); expect(await screen.findByText(/Today/)).toBeInTheDocument(); expect(screen.getByText('Mandatory Events')).toBeInTheDocument(); expect(screen.getByText('Deadline Tasks')).toBeInTheDocument(); }); });
