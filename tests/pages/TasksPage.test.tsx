import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TasksPage } from '../../src/pages/TasksPage';
import { task } from '../mocks/fixtures';
import { renderWithProviders } from '../testUtils';
describe('TasksPage', () => { it('shows tasks', async () => { vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify([task]), { status:200 })); renderWithProviders(<TasksPage />); expect(await screen.findByText('Read docs')).toBeInTheDocument(); }); });
