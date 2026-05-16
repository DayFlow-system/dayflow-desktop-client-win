import { act, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Theme } from '../../src/theme/Theme';
import { useSettingsStore } from '../../src/store/settings.store';

describe('Theme', () => {
  it('applies explicit light and dark classes', () => {
    const listeners = { addEventListener: vi.fn(), removeEventListener: vi.fn(), matches: true };
    vi.stubGlobal('matchMedia', vi.fn(() => listeners));

    act(() => useSettingsStore.getState().setTheme('light'));
    const { rerender } = render(<Theme><div>content</div></Theme>);
    expect(document.documentElement).toHaveClass('light');
    expect(document.documentElement).not.toHaveClass('dark');
    expect(document.documentElement.dataset.theme).toBe('light');

    act(() => useSettingsStore.getState().setTheme('dark'));
    rerender(<Theme><div>content</div></Theme>);
    expect(document.documentElement).toHaveClass('dark');
    expect(document.documentElement).not.toHaveClass('light');
    expect(document.documentElement.dataset.theme).toBe('dark');
  });
});
