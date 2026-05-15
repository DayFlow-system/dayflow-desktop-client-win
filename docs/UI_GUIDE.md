# UI Guide

The UI uses Tailwind CSS. Reusable primitives are in `src/components/ui`:

- `Button` for actions with primary, secondary, danger, and ghost variants.
- `Input`, `Select`, and `Textarea` for forms.
- `Card` for grouped content.
- `Badge` for enum/status labels.
- `Modal` for create/edit dialogs.
- `EmptyState`, `ErrorState`, and `LoadingState` for page states.
- `ConfirmDialog` for future destructive confirmations.

Domain components wrap these primitives for tasks, events, schedule blocks, day state, and Today sections.
