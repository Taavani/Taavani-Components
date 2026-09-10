# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Taavani-Components is a Vue 3 component library for the Taavani flight-booking product. It is consumed by other apps as an npm package (`dist/taavani-components.{esm,cjs}.js`), and developed/previewed in isolation via Storybook.

## Commands

```bash
npm run storybook         # Storybook dev server on :6006 — primary way to develop/preview components
npm run build-storybook   # Static Storybook build
npm run build              # Build the distributable library (vite build)
npm run apps:help          # Serve apps/help via Vite (separate helper app, not part of the library build)
```

There is no lint or test script configured. `cypress` is a devDependency but there are no Cypress config files or spec files in the repo yet.

There is no single-story test runner — verify a component by running `npm run storybook` and viewing its story.

### Build pipeline

`vite.config.js` is the single build config, used both for the published library (`npm run build`, Vite lib mode) and for Storybook/`apps:help` (Vite dev server). It builds `dist/taavani-components.{esm,cjs}.js` (the `module`/`main` entry points) plus one shared `dist/taavani-components.css`.

Only `vue`, `vue-i18n`, and `pinia` (the `peerDependencies`) are externalized — everything else a component imports (e.g. `@headlessui/vue`, `@heroicons/vue`, `@vuelidate/*`, `vue-tel-input`, `tinyduration`, `dayjs`, `@easepick/*`) gets bundled into `dist/`. If you add a new dependency that components import directly, add it to `dependencies` in `package.json` (not `peerDependencies`) unless it's something every consuming app is expected to already provide, like Vue itself.

CSS is handled by Vite's built-in PostCSS support (`cssCodeSplit: false` merges everything into one file) using Tailwind + `postcss.config.cjs`. Each component imports its own `.css` file directly in its `<script>` block (e.g. `import './T-Gender-Input.css'`) rather than relying on global styles.

## Architecture

### `src/components/` vs `src/stages/`

- **`src/components/T-*/`** — individual, reusable UI components (inputs, buttons, lists, selectors). Each folder holds the `.vue` component, its `.css`, and sometimes a versioned variant (e.g. `T-Gender-Input.v2.vue` alongside `T-Gender-Input.vue` — both are kept and exported separately, not swapped in place).
- **`src/stages/T-*/`** — larger composite views representing a step in the booking flow (e.g. `T-Select-Trip`, `T-Booking-Options`, `T-Passengers`, `T-Order`, `T-Approve`). These compose multiple `components/` together into a full screen/stage.

### Public API surface

`src/index.js` is the package entry point and explicitly re-exports the components/stages/utilities that are part of the public API. **A component existing under `src/components/` does not make it public** — it must be added to `src/index.js` to be exported from the built package. Check this file when adding a new component that should be consumable by downstream apps.

### Component conventions

- `<script setup>` with `defineProps`/`defineEmits`; props typically use `update:propName` emits for v-model-style two-way binding.
- Translations via `vue-i18n`'s `useI18n({ useScope: 'global' })` and `t('namespace.key')` — translation strings live in `.storybook/translations.json` for Storybook/dev purposes; consuming apps supply their own i18n messages at runtime (`vue-i18n` is a peer dependency, not bundled).
- `pinia` and `vue-i18n` are peer dependencies (along with `vue`) — components assume the host app provides these, they are never bundled into the library output.
- Headless UI (`@headlessui/vue`) + Heroicons are the primary UI primitives; Tailwind utility classes plus a component-scoped `.css` file for custom styling.

### Storybook setup

`.storybook/preview.js` installs `vue-i18n` globally for all stories (loading `en` messages from `.storybook/translations.json`) and imports the global stylesheet `src/css/main.css`. Story files live under `src/stories/`, one `.stories.js` file per component/stage, separate from the component's own folder.
