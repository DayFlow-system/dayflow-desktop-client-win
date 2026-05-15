import { useSettingsStore, type LanguagePreference } from '../store/settings.store';

const translations = {
  en: {
    today: 'Today', tasks: 'Tasks', events: 'Events', schedule: 'Schedule', dayState: 'Day State', settings: 'Settings',
    connected: 'connected', disconnected: 'disconnected', loading: 'loading', error: 'error',
    serverUrl: 'Server URL', save: 'Save', testConnection: 'Test connection', testing: 'Testing...', connectionSuccessful: 'Connection successful', connectionFailed: 'Connection failed',
    theme: 'Theme', light: 'Light', dark: 'Dark', system: 'System', language: 'Language', english: 'English', russian: 'Russian', slovak: 'Slovak', resetSettings: 'Reset local settings', appVersion: 'App version 0.1.0',
    title: 'Title', description: 'Description', status: 'Status', type: 'Type', priority: 'Priority', deadlineOptional: 'Deadline (optional)', plannedDateOptional: 'Planned date (optional)', energyRequired: 'Energy required', healthRule: 'Health rule', saveTask: 'Save task', titleRequired: 'Title is required', invalidTask: 'Invalid task',
  },
  ru: {
    today: 'Сегодня', tasks: 'Задачи', events: 'События', schedule: 'Расписание', dayState: 'Состояние дня', settings: 'Настройки',
    connected: 'подключено', disconnected: 'отключено', loading: 'загрузка', error: 'ошибка',
    serverUrl: 'URL сервера', save: 'Сохранить', testConnection: 'Проверить соединение', testing: 'Проверка...', connectionSuccessful: 'Соединение успешно', connectionFailed: 'Соединение не удалось',
    theme: 'Тема', light: 'Светлая', dark: 'Тёмная', system: 'Системная', language: 'Язык', english: 'Английский', russian: 'Русский', slovak: 'Словацкий', resetSettings: 'Сбросить локальные настройки', appVersion: 'Версия приложения 0.1.0',
    title: 'Название', description: 'Описание', status: 'Статус', type: 'Тип', priority: 'Приоритет', deadlineOptional: 'Дедлайн (необязательно)', plannedDateOptional: 'Плановая дата (необязательно)', energyRequired: 'Нужная энергия', healthRule: 'Правило здоровья', saveTask: 'Сохранить задачу', titleRequired: 'Название обязательно', invalidTask: 'Некорректная задача',
  },
  sk: {
    today: 'Dnes', tasks: 'Úlohy', events: 'Udalosti', schedule: 'Rozvrh', dayState: 'Stav dňa', settings: 'Nastavenia',
    connected: 'pripojené', disconnected: 'odpojené', loading: 'načítava sa', error: 'chyba',
    serverUrl: 'URL servera', save: 'Uložiť', testConnection: 'Otestovať spojenie', testing: 'Testujem...', connectionSuccessful: 'Spojenie úspešné', connectionFailed: 'Spojenie zlyhalo',
    theme: 'Téma', light: 'Svetlá', dark: 'Tmavá', system: 'Systémová', language: 'Jazyk', english: 'Angličtina', russian: 'Ruština', slovak: 'Slovenčina', resetSettings: 'Obnoviť lokálne nastavenia', appVersion: 'Verzia aplikácie 0.1.0',
    title: 'Názov', description: 'Popis', status: 'Stav', type: 'Typ', priority: 'Priorita', deadlineOptional: 'Termín (voliteľné)', plannedDateOptional: 'Plánovaný dátum (voliteľné)', energyRequired: 'Potrebná energia', healthRule: 'Pravidlo zdravia', saveTask: 'Uložiť úlohu', titleRequired: 'Názov je povinný', invalidTask: 'Neplatná úloha',
  },
} as const;

type TranslationKey = keyof typeof translations.en;

export const languageOptions: Array<{ value: LanguagePreference; labelKey: TranslationKey }> = [
  { value: 'en', labelKey: 'english' },
  { value: 'ru', labelKey: 'russian' },
  { value: 'sk', labelKey: 'slovak' },
];

export function translate(language: LanguagePreference, key: TranslationKey) {
  return translations[language][key] ?? translations.en[key];
}

export function useI18n() {
  const language = useSettingsStore((state) => state.language);
  return { language, t: (key: TranslationKey) => translate(language, key) };
}
