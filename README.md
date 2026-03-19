# Cameron Bell Portfolio

This repository powers Cameron Bell's personal portfolio site: a Next.js App Router application for presenting AI engineering work, flagship case studies, supporting project archives, career narrative, education, and contact details.

## Tech Stack

- Next.js 14 with the App Router
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI primitives and shadcn-style UI components
- `pnpm` for package management
- Vercel Analytics

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Create a production build:

```bash
pnpm build
```

Run the production server locally:

```bash
pnpm start
```

Run linting:

```bash
pnpm lint
```

## Deploy Target

The site is built for deployment on Vercel and is currently intended to ship from this repo to the `cameron-bell.vercel.app` deployment.

## Where Portfolio Content Lives

Most portfolio content is maintained directly in code:

- Featured projects, archive projects, project metadata, and case-study content live in `lib/projects-data.ts`.
- The homepage composition lives in `app/page.tsx`.
- Hero copy, headline, CTA text, and social links live in `components/hero.tsx`.
- Career journey content lives in `components/experience.tsx`.
- Education content lives in `components/education.tsx`.
- Contact section copy and form UI live in `components/contact.tsx`.
- Project archive and detail routes live in `app/projects/page.tsx` and `app/projects/[slug]/page.tsx`.
- Static assets such as project images, diagrams, and resume files live under `public/`.

## Notes

- This is a content-in-code portfolio rather than a CMS-backed site.
- If you are updating the portfolio itself, start with `lib/projects-data.ts` for project entries and the section components for profile or narrative changes.
