import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TaskCard } from '../../src/components/domain/TaskCard';
import { task } from '../mocks/fixtures';
import { renderWithProviders } from '../testUtils';
describe('TaskCard', () => { it('renders task and calls actions', () => { const onStatus=vi.fn(); renderWithProviders(<TaskCard task={task} onStatus={onStatus} />); expect(screen.getByText('Read docs')).toBeInTheDocument(); fireEvent.click(screen.getByText('Done')); expect(onStatus).toHaveBeenCalledWith('done'); }); });
