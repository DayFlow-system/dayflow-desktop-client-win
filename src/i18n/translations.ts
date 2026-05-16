import { useSettingsStore, type LanguagePreference } from '../store/settings.store';

const translations = {
  en: {
    today: 'Today', tasks: 'Tasks', events: 'Events', schedule: 'Schedule', dayState: 'Day State', settings: 'Settings', dayflow: 'DayFlow',
    connected: 'Connected', disconnected: 'Disconnected', loading: 'Loading', error: 'Error',
    serverUrl: 'Server URL', save: 'Save', create: 'Create', edit: 'Edit', close: 'Close', cancel: 'Cancel', confirm: 'Confirm', retry: 'Retry', archive: 'Archive', refresh: 'Refresh',
    testConnection: 'Test connection', testing: 'Testing...', connectionSuccessful: 'Connection successful', connectionFailed: 'Connection failed',
    theme: 'Theme', light: 'Light', dark: 'Dark', system: 'System', language: 'Language', english: 'English', russian: 'Russian', slovak: 'Slovak', resetSettings: 'Reset local settings', appVersion: 'App version 0.1.0',
    title: 'Title', description: 'Description', status: 'Status', type: 'Type', priority: 'Priority', deadlineOptional: 'Deadline (optional)', plannedDateOptional: 'Planned date (optional)', energyRequired: 'Energy required', healthRule: 'Health rule', saveTask: 'Save task', createTask: 'Create Task', editTask: 'Edit task', invalidTask: 'Invalid task',
    searchTitle: 'Search title', allStatuses: 'All statuses', allTypes: 'All types', noTasks: 'No tasks', archiveTaskConfirm: 'Archive this task?',
    start: 'Start', done: 'Done', skip: 'Skip', deadline: 'Deadline', planned: 'Planned', energy: 'Energy', health: 'Health', mood: 'Mood', notes: 'Notes', saveDayState: 'Save day state', invalidState: 'Invalid state',
    mandatoryEvents: 'Mandatory Events', plannedEvents: 'Planned Events', scheduleBlocks: 'Schedule', deadlineTasks: 'Deadline Tasks', plannedTasks: 'Planned Tasks', suggestedTasks: 'Suggested Tasks', noSectionItems: 'No {section}', loadingTodayDashboard: 'Loading Today dashboard...',
    createEvent: 'Create Event', editEvent: 'Edit event', saveEvent: 'Save event', noEvents: 'No events', cancelEventConfirm: 'Cancel this event?', invalidEvent: 'Invalid event', date: 'Date', startTime: 'Start time', endTime: 'End time', importance: 'Importance', location: 'Location',
    createBlock: 'Create Block', createScheduleBlock: 'Create schedule block', editScheduleBlock: 'Edit schedule block', saveBlock: 'Save block', noScheduleBlocks: 'Free', archiveScheduleBlockConfirm: 'Archive this schedule block?', invalidBlock: 'Invalid block', dayOfWeek: 'Day of week',
    unableToLoadData: 'Unable to load data', nothingHereYet: 'Nothing here yet',
    serverUnavailable: 'Server unavailable. Check the URL and connection.', requestTimedOut: 'Request timed out. Try again.', validationError: 'Please fix the highlighted validation errors.', notFound: 'This item no longer exists. Refresh and try again.', internalServerError: 'Server error. Your input was preserved for retry.', unknownError: 'Unknown error', titleRequired: 'Title is required',
    monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday',
    'status.planned': 'Planned', 'status.in_progress': 'In progress', 'status.done': 'Done', 'status.skipped': 'Skipped', 'status.archived': 'Archived', 'status.cancelled': 'Cancelled', 'status.active': 'Active', 'status.paused': 'Paused',
    'type.task': 'Task', 'type.study': 'Study', 'type.health': 'Health', 'type.routine': 'Routine', 'type.fun': 'Fun', 'type.admin': 'Admin', 'type.work': 'Work', 'type.free_time': 'Free time', 'type.other': 'Other',
    'energy.low': 'Low', 'energy.medium': 'Medium', 'energy.high': 'High',
    'health.healthy': 'Healthy', 'health.slightly_sick': 'Slightly sick', 'health.sick': 'Sick',
    'healthRule.always': 'Always', 'healthRule.skip_if_sick': 'Skip if sick', 'healthRule.only_if_healthy': 'Only if healthy',
    'importance.low': 'Low', 'importance.medium': 'Medium', 'importance.high': 'High', 'importance.mandatory': 'Mandatory',
  },
  ru: {
    today: 'Сегодня', tasks: 'Задачи', events: 'События', schedule: 'Расписание', dayState: 'Состояние дня', settings: 'Настройки', dayflow: 'DayFlow',
    connected: 'Подключено', disconnected: 'Отключено', loading: 'Загрузка', error: 'Ошибка',
    serverUrl: 'URL сервера', save: 'Сохранить', create: 'Создать', edit: 'Редактировать', close: 'Закрыть', cancel: 'Отменить', confirm: 'Подтвердить', retry: 'Повторить', archive: 'Архивировать', refresh: 'Обновить',
    testConnection: 'Проверить соединение', testing: 'Проверка...', connectionSuccessful: 'Соединение успешно', connectionFailed: 'Соединение не удалось',
    theme: 'Тема', light: 'Светлая', dark: 'Тёмная', system: 'Системная', language: 'Язык', english: 'Английский', russian: 'Русский', slovak: 'Словацкий', resetSettings: 'Сбросить локальные настройки', appVersion: 'Версия приложения 0.1.0',
    title: 'Название', description: 'Описание', status: 'Статус', type: 'Тип', priority: 'Приоритет', deadlineOptional: 'Дедлайн (необязательно)', plannedDateOptional: 'Плановая дата (необязательно)', energyRequired: 'Нужная энергия', healthRule: 'Правило здоровья', saveTask: 'Сохранить задачу', createTask: 'Создать задачу', editTask: 'Редактировать задачу', invalidTask: 'Некорректная задача',
    searchTitle: 'Поиск по названию', allStatuses: 'Все статусы', allTypes: 'Все типы', noTasks: 'Задач нет', archiveTaskConfirm: 'Архивировать эту задачу?',
    start: 'Старт', done: 'Готово', skip: 'Пропустить', deadline: 'Дедлайн', planned: 'Запланировано', energy: 'Энергия', health: 'Здоровье', mood: 'Настроение', notes: 'Заметки', saveDayState: 'Сохранить состояние дня', invalidState: 'Некорректное состояние дня',
    mandatoryEvents: 'Обязательные события', plannedEvents: 'Запланированные события', scheduleBlocks: 'Расписание', deadlineTasks: 'Задачи с дедлайном', plannedTasks: 'Запланированные задачи', suggestedTasks: 'Рекомендованные задачи', noSectionItems: 'Нет: {section}', loadingTodayDashboard: 'Загрузка панели Сегодня...',
    createEvent: 'Создать событие', editEvent: 'Редактировать событие', saveEvent: 'Сохранить событие', noEvents: 'Событий нет', cancelEventConfirm: 'Отменить это событие?', invalidEvent: 'Некорректное событие', date: 'Дата', startTime: 'Время начала', endTime: 'Время окончания', importance: 'Важность', location: 'Место',
    createBlock: 'Создать блок', createScheduleBlock: 'Создать блок расписания', editScheduleBlock: 'Редактировать блок расписания', saveBlock: 'Сохранить блок', noScheduleBlocks: 'Свободно', archiveScheduleBlockConfirm: 'Архивировать этот блок расписания?', invalidBlock: 'Некорректный блок', dayOfWeek: 'День недели',
    unableToLoadData: 'Не удалось загрузить данные', nothingHereYet: 'Пока ничего нет',
    serverUnavailable: 'Сервер недоступен. Проверь URL и соединение.', requestTimedOut: 'Время запроса истекло. Попробуй снова.', validationError: 'Исправь ошибки в форме.', notFound: 'Элемент больше не существует. Обнови данные и попробуй снова.', internalServerError: 'Ошибка сервера. Введённые данные сохранены для повтора.', unknownError: 'Неизвестная ошибка', titleRequired: 'Название обязательно',
    monday: 'Понедельник', tuesday: 'Вторник', wednesday: 'Среда', thursday: 'Четверг', friday: 'Пятница', saturday: 'Суббота', sunday: 'Воскресенье',
    'status.planned': 'Запланировано', 'status.in_progress': 'В работе', 'status.done': 'Готово', 'status.skipped': 'Пропущено', 'status.archived': 'В архиве', 'status.cancelled': 'Отменено', 'status.active': 'Активно', 'status.paused': 'На паузе',
    'type.task': 'Задача', 'type.study': 'Учёба', 'type.health': 'Здоровье', 'type.routine': 'Рутина', 'type.fun': 'Отдых', 'type.admin': 'Админ', 'type.work': 'Работа', 'type.free_time': 'Свободное время', 'type.other': 'Другое',
    'energy.low': 'Низкая', 'energy.medium': 'Средняя', 'energy.high': 'Высокая',
    'health.healthy': 'Здоров', 'health.slightly_sick': 'Слегка болен', 'health.sick': 'Болен',
    'healthRule.always': 'Всегда', 'healthRule.skip_if_sick': 'Пропустить при болезни', 'healthRule.only_if_healthy': 'Только если здоров',
    'importance.low': 'Низкая', 'importance.medium': 'Средняя', 'importance.high': 'Высокая', 'importance.mandatory': 'Обязательное',
  },
  sk: {
    today: 'Dnes', tasks: 'Úlohy', events: 'Udalosti', schedule: 'Rozvrh', dayState: 'Stav dňa', settings: 'Nastavenia', dayflow: 'DayFlow',
    connected: 'Pripojené', disconnected: 'Odpojené', loading: 'Načítava sa', error: 'Chyba',
    serverUrl: 'URL servera', save: 'Uložiť', create: 'Vytvoriť', edit: 'Upraviť', close: 'Zavrieť', cancel: 'Zrušiť', confirm: 'Potvrdiť', retry: 'Skúsiť znova', archive: 'Archivovať', refresh: 'Obnoviť',
    testConnection: 'Otestovať spojenie', testing: 'Testujem...', connectionSuccessful: 'Spojenie úspešné', connectionFailed: 'Spojenie zlyhalo',
    theme: 'Téma', light: 'Svetlá', dark: 'Tmavá', system: 'Systémová', language: 'Jazyk', english: 'Angličtina', russian: 'Ruština', slovak: 'Slovenčina', resetSettings: 'Obnoviť lokálne nastavenia', appVersion: 'Verzia aplikácie 0.1.0',
    title: 'Názov', description: 'Popis', status: 'Stav', type: 'Typ', priority: 'Priorita', deadlineOptional: 'Termín (voliteľné)', plannedDateOptional: 'Plánovaný dátum (voliteľné)', energyRequired: 'Potrebná energia', healthRule: 'Pravidlo zdravia', saveTask: 'Uložiť úlohu', createTask: 'Vytvoriť úlohu', editTask: 'Upraviť úlohu', invalidTask: 'Neplatná úloha',
    searchTitle: 'Hľadať podľa názvu', allStatuses: 'Všetky stavy', allTypes: 'Všetky typy', noTasks: 'Žiadne úlohy', archiveTaskConfirm: 'Archivovať túto úlohu?',
    start: 'Štart', done: 'Hotovo', skip: 'Preskočiť', deadline: 'Termín', planned: 'Plánované', energy: 'Energia', health: 'Zdravie', mood: 'Nálada', notes: 'Poznámky', saveDayState: 'Uložiť stav dňa', invalidState: 'Neplatný stav dňa',
    mandatoryEvents: 'Povinné udalosti', plannedEvents: 'Plánované udalosti', scheduleBlocks: 'Rozvrh', deadlineTasks: 'Úlohy s termínom', plannedTasks: 'Plánované úlohy', suggestedTasks: 'Odporúčané úlohy', noSectionItems: 'Žiadne: {section}', loadingTodayDashboard: 'Načítava sa panel Dnes...',
    createEvent: 'Vytvoriť udalosť', editEvent: 'Upraviť udalosť', saveEvent: 'Uložiť udalosť', noEvents: 'Žiadne udalosti', cancelEventConfirm: 'Zrušiť túto udalosť?', invalidEvent: 'Neplatná udalosť', date: 'Dátum', startTime: 'Začiatok', endTime: 'Koniec', importance: 'Dôležitosť', location: 'Miesto',
    createBlock: 'Vytvoriť blok', createScheduleBlock: 'Vytvoriť blok rozvrhu', editScheduleBlock: 'Upraviť blok rozvrhu', saveBlock: 'Uložiť blok', noScheduleBlocks: 'Voľno', archiveScheduleBlockConfirm: 'Archivovať tento blok rozvrhu?', invalidBlock: 'Neplatný blok', dayOfWeek: 'Deň v týždni',
    unableToLoadData: 'Nepodarilo sa načítať dáta', nothingHereYet: 'Zatiaľ tu nič nie je',
    serverUnavailable: 'Server je nedostupný. Skontroluj URL a spojenie.', requestTimedOut: 'Čas požiadavky vypršal. Skús znova.', validationError: 'Oprav chyby vo formulári.', notFound: 'Táto položka už neexistuje. Obnov dáta a skús znova.', internalServerError: 'Chyba servera. Vstup ostal zachovaný na opakovanie.', unknownError: 'Neznáma chyba', titleRequired: 'Názov je povinný',
    monday: 'Pondelok', tuesday: 'Utorok', wednesday: 'Streda', thursday: 'Štvrtok', friday: 'Piatok', saturday: 'Sobota', sunday: 'Nedeľa',
    'status.planned': 'Plánované', 'status.in_progress': 'Prebieha', 'status.done': 'Hotovo', 'status.skipped': 'Preskočené', 'status.archived': 'Archivované', 'status.cancelled': 'Zrušené', 'status.active': 'Aktívne', 'status.paused': 'Pozastavené',
    'type.task': 'Úloha', 'type.study': 'Štúdium', 'type.health': 'Zdravie', 'type.routine': 'Rutina', 'type.fun': 'Zábava', 'type.admin': 'Administratíva', 'type.work': 'Práca', 'type.free_time': 'Voľný čas', 'type.other': 'Iné',
    'energy.low': 'Nízka', 'energy.medium': 'Stredná', 'energy.high': 'Vysoká',
    'health.healthy': 'Zdravý', 'health.slightly_sick': 'Mierne chorý', 'health.sick': 'Chorý',
    'healthRule.always': 'Vždy', 'healthRule.skip_if_sick': 'Preskočiť pri chorobe', 'healthRule.only_if_healthy': 'Len ak zdravý',
    'importance.low': 'Nízka', 'importance.medium': 'Stredná', 'importance.high': 'Vysoká', 'importance.mandatory': 'Povinná',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

type InterpolationValues = Record<string, string | number>;

export const languageOptions: Array<{ value: LanguagePreference; labelKey: TranslationKey }> = [
  { value: 'en', labelKey: 'english' },
  { value: 'ru', labelKey: 'russian' },
  { value: 'sk', labelKey: 'slovak' },
];

export function translate(language: LanguagePreference, key: TranslationKey, values?: InterpolationValues): string {
  const template = String(translations[language][key] ?? translations.en[key] ?? key);
  if (!values) return template;
  return Object.entries(values).reduce<string>((text, [name, value]) => text.replaceAll(`{${name}}`, String(value)), template);
}

export function useI18n() {
  const language = useSettingsStore((state) => state.language);
  const t = (key: TranslationKey, values?: InterpolationValues) => translate(language, key, values);
  const enumLabel = (scope: 'status' | 'type' | 'energy' | 'health' | 'healthRule' | 'importance', value: string) =>
    t(`${scope}.${value}` as TranslationKey);
  return { language, t, enumLabel };
}
