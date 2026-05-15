import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
export function AppLayout() { return <div className="flex min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50"><Sidebar /><div className="flex min-w-0 flex-1 flex-col"><Header /><main className="flex-1 overflow-auto p-6"><Outlet /></main></div></div>; }
