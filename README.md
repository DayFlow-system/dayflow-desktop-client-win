# DayFlow Desktop Client for Windows

DayFlow Desktop is a Tauri + React + TypeScript client for the DayFlow Server. It never opens SQLite directly: every task, event, schedule block, day-state update, and Today dashboard refresh goes through the HTTP API.

## Requirements

- Node.js 20+
- Rust toolchain for Tauri builds
- A running DayFlow Server, defaulting to `http://localhost:3000`

## Install

```bash
npm install
```

If your environment blocks npm registry access, fix the registry/proxy policy first and rerun the command.

## Development

You do **not** need to run both development commands at the same time.

For the normal desktop workflow, run only:

```bash
npm run tauri:dev
```

Tauri starts Vite automatically through `beforeDevCommand`, so a separate `npm run dev` terminal is not required.

Use the web-only Vite workflow only when you want to debug the React UI in a browser without opening the desktop shell:

```bash
npm run dev
```

Open Settings to change the server URL for a local server, LAN server, or future Cloudflare Tunnel URL.

## Build Windows app

```bash
npm run build
npm run tauri:build
```

## Tests and checks

```bash
npm run test
npm run typecheck
npm run lint
npm run format
```

## Implemented screens

- Today dashboard at `/`
- Tasks at `/tasks`
- Events at `/events`
- Schedule at `/schedule`
- Day State at `/day-state`
- Settings at `/settings`
