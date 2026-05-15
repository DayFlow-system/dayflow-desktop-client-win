import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { DayStatePage } from './pages/DayStatePage';
import { EventsPage } from './pages/EventsPage';
import { SchedulePage } from './pages/SchedulePage';
import { SettingsPage } from './pages/SettingsPage';
import { TasksPage } from './pages/TasksPage';
import { TodayPage } from './pages/TodayPage';
export function App() { return <Routes><Route element={<AppLayout />}><Route path="/" element={<TodayPage />} /><Route path="/tasks" element={<TasksPage />} /><Route path="/events" element={<EventsPage />} /><Route path="/schedule" element={<SchedulePage />} /><Route path="/day-state" element={<DayStatePage />} /><Route path="/settings" element={<SettingsPage />} /></Route></Routes>; }
