# Architecture

DayFlow Desktop follows a strict HTTP-only architecture: Tauri/React UI talks to DayFlow Server, and the server owns SQLite.

## Structure

- `src/api/` centralizes fetch, error mapping, and endpoint functions.
- `src/types/` contains client-safe domain types.
- `src/schemas/` contains Zod validation for responses and form input.
- `src/hooks/` wraps TanStack Query queries and mutations.
- `src/store/` stores local settings, language, theme, and UI preferences with Zustand.
- `src/components/ui/` contains reusable visual primitives.
- `src/components/domain/` renders DayFlow-specific cards and sections.
- `src/components/forms/` contains reusable create/edit forms.
- `src/pages/` composes screens for each route.
- `src-tauri/` contains native Tauri configuration.

## Internationalization and theme

`src/i18n/translations.ts` contains English, Russian, and Slovak labels plus the `useI18n` helper. `src/theme/Theme.tsx` applies light/dark/system theme behavior and updates `document.documentElement.lang`.
