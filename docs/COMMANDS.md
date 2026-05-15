# Commands

## `npm install`
Installs dependencies. Use after cloning or changing `package.json`. If it fails with registry/proxy errors, correct npm network access and retry.

## `npm run dev`
Starts Vite for browser development. Use while building UI. If port 1420 is busy, stop the process using it.

## `npm run tauri:dev`
Starts the Windows desktop shell with the Vite dev server. Requires Rust and Tauri prerequisites.

## `npm run build`
Runs TypeScript build checks and produces the web bundle in `dist`.

## `npm run tauri:build`
Builds the native desktop package. Requires Rust toolchain and Windows build prerequisites.

## `npm run test`
Runs Vitest once with React Testing Library tests.

## `npm run test:watch`
Runs Vitest in watch mode during development.

## `npm run lint`
Runs ESLint across the project.

## `npm run format`
Formats files with Prettier.

## `npm run typecheck`
Runs TypeScript without emitting files.
