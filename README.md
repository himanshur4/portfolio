# Portfolio

A minimal, responsive portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Includes light/dark mode and a fixed bottom icon dock on mobile.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where to edit content

Everything text-based lives in **`data/resume-data.ts`** — you shouldn't need to touch any component file to update copy, links, or add projects.

- `personal` — name, role, email, phone, social links, resume file path
- `education` — your degree line
- `experience` — internships/jobs, as a list
- `projects` — **only 2 projects are filled in right now.** Add your other 3–4 by copying the object shape shown in the comment above the array.
- `skills` — grouped skill tags
- `achievements` — DSA/competitive programming stats and links

## Before deploying

1. Replace the placeholder email, phone, LinkedIn, and GitHub URLs in `personal`.
2. Add your real project links (`live` / `source`) — dummy ones from the resume template are still in there.
3. Drop your resume PDF into `public/resume.pdf` (or update `personal.resumeUrl` to point elsewhere).
4. Add 3–4 more entries to the `projects` array so all 5–6 of your projects show up.
5. Optionally add a favicon at `app/favicon.ico`.

## Deploy

The fastest path is [Vercel](https://vercel.com/new) — push this folder to a GitHub repo and import it, or run `npx vercel` from this directory.

## Structure

```
app/            # routes, layout, global styles
components/     # navbar, mobile dock, hero, section components
data/           # resume-data.ts — all editable content
lib/            # small utilities
```
