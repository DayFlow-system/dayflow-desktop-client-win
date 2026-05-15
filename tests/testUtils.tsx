import type React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
export const renderWithProviders = (ui: React.ReactElement, path = '/') => { const client = new QueryClient({ defaultOptions:{ queries:{ retry:false }, mutations:{ retry:false } } }); return render(<QueryClientProvider client={client}><MemoryRouter initialEntries={[path]}>{ui}</MemoryRouter></QueryClientProvider>); };
