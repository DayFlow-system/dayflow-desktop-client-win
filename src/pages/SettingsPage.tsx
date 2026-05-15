import { useState } from 'react';
import { getHealth } from '../api/health.api';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { languageOptions, useI18n } from '../i18n/translations';
import { DEFAULT_SERVER_URL, useSettingsStore, type LanguagePreference, type ThemePreference } from '../store/settings.store';

export function SettingsPage() {
  const settings=useSettingsStore();
  const { t } = useI18n();
  const [url,setUrl]=useState(settings.serverUrl);
  const [result,setResult]=useState('');
  const test=async()=>{ setResult(t('testing')); try { await getHealth(); setResult(t('connectionSuccessful')); } catch { setResult(t('connectionFailed')); } };

  return <div className="max-w-3xl space-y-4"><h1 className="text-2xl font-bold">{t('settings')}</h1><Card><div className="grid gap-3"><label className="text-sm font-medium">{t('serverUrl')}</label><Input value={url} onChange={e=>setUrl(e.target.value)} placeholder={DEFAULT_SERVER_URL} /><div className="flex gap-2"><Button onClick={()=>settings.setServerUrl(url)}>{t('save')}</Button><Button variant="secondary" onClick={test}>{t('testConnection')}</Button></div>{result && <p className="text-sm text-slate-500">{result}</p>}</div></Card><Card><label className="text-sm font-medium">{t('theme')}</label><Select value={settings.theme} onChange={e=>settings.setTheme(e.target.value as ThemePreference)}><option value="system">{t('system')}</option><option value="light">{t('light')}</option><option value="dark">{t('dark')}</option></Select></Card><Card><label className="text-sm font-medium">{t('language')}</label><Select value={settings.language} onChange={e=>settings.setLanguage(e.target.value as LanguagePreference)}>{languageOptions.map(option => <option key={option.value} value={option.value}>{t(option.labelKey)}</option>)}</Select></Card><Card><Button variant="danger" onClick={()=>{settings.resetSettings(); setUrl(DEFAULT_SERVER_URL);}}>{t('resetSettings')}</Button><p className="mt-3 text-sm text-slate-500">{t('appVersion')}</p></Card></div>;
}
