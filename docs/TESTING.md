# Testing

Tests live under `tests/` and are grouped as unit, API, components, pages, and regression.

- Unit tests cover date, time, and formatting utilities.
- API tests mock `fetch` and verify success, timeout, server errors, validation errors, and server URL usage.
- Component tests render domain cards and verify visible fields/actions.
- Page tests render major screens through React Query and Router providers.
- Regression tests should be added under `tests/regression/` for every future bug fix.

Run all tests with `npm run test`. Run a single test with `npx vitest run tests/path/file.test.tsx`.

The setup file currently allows focused per-test fetch mocks, and reusable MSW handlers live in `tests/mocks/handlers.ts` for broader endpoint scenarios. Both approaches avoid contacting a real server and keep tests deterministic.
