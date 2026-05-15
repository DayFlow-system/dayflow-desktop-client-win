# Commands

## `npm install`
Installs dependencies. Use after cloning or changing `package.json`. If it fails with registry/proxy errors, correct npm network access and retry.

If npm fails with `ERESOLVE` and mentions packages such as `@types/react@19` or `@vitejs/plugin-react@6`, the local `node_modules` or lockfile was likely created from an older floating dependency set. Clean the stale install and retry without `--force` or `--legacy-peer-deps`:

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm install
```

## `npm run dev`
Starts Vite for browser-only React development. Use this when you want to inspect the UI in a regular browser and do not need the native Tauri window. If port 1420 is busy, stop the process using it.

You do not need to run this command manually before `npm run tauri:dev`; Tauri runs it automatically via `beforeDevCommand`.

## `npm run tauri:dev`
Starts the Windows desktop shell. This is the normal command for desktop development. It also starts Vite automatically, so run this command by itself in most cases. Requires Rust and Tauri prerequisites.

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

## Rust/Cargo version for Tauri
The repository includes `rust-toolchain.toml` and expects Rust/Cargo 1.88.0 for Tauri development. This avoids the Cargo 1.84 `edition2024` dependency parsing error that can happen when crates such as `time` are resolved by Tauri dependencies.

If `npm run tauri:dev` fails with `feature edition2024 is required`, run:

```powershell
rustup toolchain install 1.88.0
rustup default 1.88.0
```

Then retry:

```powershell
npm run tauri:dev
```


## Tauri Rust crate version mismatch
The Rust Tauri crates must use the same patch line. This project pins `tauri` and `tauri-build` to `2.9.1` so Cargo does not compile `tauri-build 2.0.0` against `tauri-utils 2.9.x`.

If Cargo reports compile errors inside `tauri-build` mentioning `tauri_utils::plugin::save_global_api_scripts_paths`, remove the stale lockfile/build output and retry:

```powershell
Remove-Item -Force src-tauri\Cargo.lock -ErrorAction SilentlyContinue
cargo clean --manifest-path src-tauri\Cargo.toml
npm run tauri:dev
```
