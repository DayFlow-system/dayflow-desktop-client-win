# API Client

`src/api/client.ts` exposes `apiRequest(path, options)`. It reads `serverUrl` from Zustand at request time so changes made in Settings apply immediately.

The wrapper:

- prefixes every path with the current server URL;
- sends JSON content type;
- aborts requests after a timeout;
- parses JSON responses;
- maps backend `{ error }` payloads into `DayFlowApiError`;
- optionally validates response data with Zod.

To add an endpoint, create or update a file in `src/api/`, add response/input types and schemas, and expose a hook in `src/hooks/` if the UI needs server state caching.
