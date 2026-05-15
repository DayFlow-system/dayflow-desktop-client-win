import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export type ThemePreference = 'light'|'dark'|'system';
type SettingsState = { serverUrl:string; theme:ThemePreference; setServerUrl:(url:string)=>void; setTheme:(theme:ThemePreference)=>void; resetSettings:()=>void };
export const DEFAULT_SERVER_URL = 'http://localhost:3000';
export const useSettingsStore = create<SettingsState>()(persist((set) => ({ serverUrl: DEFAULT_SERVER_URL, theme:'system', setServerUrl:(serverUrl) => set({ serverUrl: serverUrl.replace(/\/$/,'') || DEFAULT_SERVER_URL }), setTheme:(theme) => set({ theme }), resetSettings:() => set({ serverUrl: DEFAULT_SERVER_URL, theme:'system' }) }), { name:'dayflow-settings' }));
export const getServerUrl = () => useSettingsStore.getState().serverUrl;
