import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SettingsPage } from '../../src/pages/SettingsPage';
import { useSettingsStore } from '../../src/store/settings.store';
import { renderWithProviders } from '../testUtils';
describe('SettingsPage', () => { it('changes server URL', () => { renderWithProviders(<SettingsPage />); const input = screen.getByDisplayValue('http://localhost:3000'); fireEvent.change(input, { target:{ value:'http://remote.test' } }); fireEvent.click(screen.getByText('Save')); expect(useSettingsStore.getState().serverUrl).toBe('http://remote.test'); }); });
