# Change Guide

## Add a Task field
Update `src/types/task.ts`, `src/schemas/task.schema.ts`, `TaskForm`, `TaskCard`, and relevant tests.

## Add a screen
Create a page in `src/pages/`, add a route in `src/App.tsx`, add a sidebar link, then add page tests.

## Add a form
Create a reusable form in `src/components/forms/`, validate with Zod, and keep create/edit mode controlled by props.

## Add an API method
Add a typed function in `src/api/`, a query/mutation hook in `src/hooks/`, and API tests for success and failure.

## Add a test
Place unit tests under `tests/unit`, component tests under `tests/components`, page tests under `tests/pages`, and bug-specific tests under `tests/regression`.
