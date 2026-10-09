# Wi Sabi Web

Corporate site for Wi Sabi — Sierra Leone's business directory and call centre platform, built by KNS.

## Stack

- Next.js 15 (App Router) + React + TypeScript
- Tailwind CSS, shadcn/ui components
- React Hook Form + Zod for the contact form
- Neon Postgres via Drizzle ORM (only the `business` table right now — schema for a future directory listing feature, not wired to any page yet)
- Brevo for transactional email
- Upstash Redis for rate limiting (optional — the app runs fine without it, rate limiting just gets skipped)

## Setup

```bash
npm install
cp .env.example .env
```

Fill in `.env` with your Brevo credentials at minimum. Neon and Upstash aren't required to run the site — nothing currently reads from the database or Redis on any live page, they're there for the directory feature that's still coming.

If you do want the schema pushed to a database:

```bash
npm run db:generate
npm run db:migrate
```

Note: `npm run db:push` also works but drops into an interactive prompt if it finds enum types left over from another project in the same database (happened to us on a shared Neon instance) — `generate` + `migrate` sidesteps that since it diffs against migration history instead of the live DB.

Then:

```bash
npm run dev
```

## Routes

- `/` — home
- `/about`
- `/services`
- `/contact`

## API

- `POST /api/contact` — contact form submission, sends via Brevo

## Deploying to Render

`render.yaml` is already set up for this. Connect the repo, then set the env vars it references manually in the Render dashboard (`DATABASE_URL`, `BREVO_API_KEY`, `BREVO_SENDER_EMAIL`, `BREVO_SENDER_NAME`, `UPSTASH_REDIS_REST_URL`/`TOKEN`, `NEXT_PUBLIC_SITE_URL`) — they're marked `sync: false` so Render won't pull them from anywhere else.

## Brand colors

| | Hex |
|---|---|
| Primary orange | `#FE6102` |
| Deep orange | `#E94F00` |
| Black | `#050505` |
| White | `#FFFFFF`
