# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 14 App Router portfolio built with TypeScript, Tailwind CSS, and pnpm. Route files live in `app/`, with the main landing page in `app/page.tsx` and supporting routes such as `app/projects/page.tsx`. Reusable UI and section components live in `components/`; shared primitives are under `components/ui/`, and icons live in `components/icons/`. Utility code and project data live in `lib/`, especially `lib/projects-data.ts` and `lib/email.ts`. Static files belong in `public/`, including images, diagrams, and resume PDFs.

## Build, Test, and Development Commands
Use `pnpm` for local work.

- `pnpm dev`: start the local Next.js dev server.
- `pnpm build`: create a production build and catch type or route issues.
- `pnpm start`: run the production build locally after `pnpm build`.
- `pnpm lint`: run the Next.js lint workflow.

There is no dedicated test script in `package.json` yet, so `pnpm lint` and `pnpm build` are the current required validation steps before opening a PR.

## Coding Style & Naming Conventions
Follow the existing code style: TypeScript, functional React components, and 2-space indentation. Use PascalCase for component files and exported components, for example `components/Navigation.tsx` style naming at the symbol level, while filenames in this repo are typically lowercase kebab-case such as `components/navigation.tsx`. Keep utility modules in `lib/` small and focused. Prefer the `@/` import alias from `tsconfig.json` over long relative paths. Tailwind classes are the default styling approach; keep custom globals in `app/globals.css` or `styles/globals.css`.

## Testing Guidelines
No automated test framework is configured currently. When changing behavior, verify the affected page in `pnpm dev`, then run `pnpm lint` and `pnpm build`. If you add tests later, place them next to the feature or in a dedicated `__tests__/` directory and match the feature name, for example `navigation.test.tsx`.

## Commit & Pull Request Guidelines
Recent commits use short, direct summaries such as `formatting changes` and `new hero design`. Keep commit messages imperative and specific to the visible change. PRs should include a brief description, the affected route or component paths, and screenshots or short recordings for UI changes. Link any related issue, and note any environment or content updates such as changes to `.env.local` usage or EmailJS setup.

## Configuration & Secrets
Keep secrets in `.env.local` only. EmailJS configuration is documented in `EMAIL_SETUP.md`; never commit service IDs, template IDs, or other sensitive values outside local environment files.
