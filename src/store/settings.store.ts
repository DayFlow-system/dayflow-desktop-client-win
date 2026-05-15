import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export type ThemePreference = 'light'|'dark'|'system';
export type LanguagePreference = 'en'|'ru'|'sk';
type SettingsState = { serverUrl:string; theme:ThemePreference; language:LanguagePreference; setServerUrl:(url:string)=>void; setTheme:(theme:ThemePreference)=>void; setLanguage:(language:LanguagePreference)=>void; resetSettings:()=>void };
export const DEFAULT_SERVER_URL = 'http://localhost:3000';
export const useSettingsStore = create<SettingsState>()(persist((set) => ({ serverUrl: DEFAULT_SERVER_URL, theme:'system', language:'en', setServerUrl:(serverUrl) => set({ serverUrl: serverUrl.replace(/\/$/,'') || DEFAULT_SERVER_URL }), setTheme:(theme) => set({ theme }), setLanguage:(language) => set({ language }), resetSettings:() => set({ serverUrl: DEFAULT_SERVER_URL, theme:'system', language:'en' }) }), { name:'dayflow-settings' }));
export const getServerUrl = () => useSettingsStore.getState().serverUrl;
