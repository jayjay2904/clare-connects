# Clare Connects

A bespoke, premium website for Clare Connects: one trusted point of contact for household utilities, business essentials, valuable introductions and a relationship-led opportunity.

This is an independent project. It has its own repository, content, deployment and domain configuration.

## Technology

- React, TypeScript, Vite and React Router
- Global design tokens and responsive CSS, with no UI framework
- Lucide icons
- Vitest and React Testing Library
- ESLint and Prettier
- GitHub Actions and GitHub Pages

## Local development

Requires Node.js 22+ and pnpm 10+.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:5173`. Production and quality commands:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm check
```

The production site is written to `dist/`. The build also copies `index.html` to `404.html`, allowing direct React Router links to recover correctly on GitHub Pages.

## Editing content

Business copy and editable factual details live in `src/content/siteContent.ts`. Values requiring confirmation have a `CONTENT_TODO` comment and are repeated in `CONTENT_TODO.md`. Page-specific editorial copy lives in `src/pages/`.

Do not add unverified prices, savings, customer numbers, awards, income examples, provider claims or regulatory language. Keep Clare positioned as a personal contact who works with established providers and specialists.

## Replacing assets

Public assets live in `public/assets/`; see its README for dimensions. Replace the portrait placeholder, social-sharing image and favicon only with approved, rights-cleared files. Use WebP or AVIF for photographs and preserve their aspect ratios.

## Contact form

The form uses the `ContactFormService` interface in `src/services/contact.ts`.

- Without `VITE_CONTACT_ENDPOINT`, a development implementation demonstrates validation, loading and success states. It does not send data. The success message sends users to the email fallback.
- With `VITE_CONTACT_ENDPOINT`, the browser sends a JSON POST to a secure HTTPS endpoint.
- The frontend includes a honeypot, accessible error summary, consent control and status announcements. Server-side validation, rate limiting, spam protection, logging and retention rules must be implemented at the endpoint.

Copy `.env.example` to `.env.local` and set:

```text
VITE_CONTACT_ENDPOINT=https://your-secure-endpoint.example/contact
```

Suitable options include an Azure Function or Cloudflare Worker for maximum control, a Netlify Function if hosting changes, or Formspree for quicker setup. Formspree is easier but introduces a third-party processor and paid-plan limits. Never put an API key or mail credential in a `VITE_` variable; all such values are public in browser code.

Recommended next step: deploy a small Cloudflare Worker or Azure Function with strict origin checks, schema validation, rate limiting and a server-side email provider. Then update the Privacy page with the processor and retention details.

## Assistant

The floating assistant uses `ChatService` in `src/services/chat.ts`. The default scripted implementation responds only from approved local topics and clearly identifies itself as automated. It never quotes prices or guarantees savings.

To add genuine AI, provide `VITE_CHAT_ENDPOINT` for a secure backend. The backend should use an approved Clare Connects knowledge source, restrict answers to that content, reject sensitive-data collection, apply rate limits and keep every model credential server-side. Do not call an AI provider directly from this site.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` runs all checks, builds the site and deploys `dist/` after a push to `main`.

1. Create a new, independent GitHub repository and push this project to `main`.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. Run the `Deploy Clare Connects` workflow or push to `main`.
4. In **Settings → Pages → Custom domain**, enter `clareconnects.com`.
5. Wait for the DNS check to complete, then enable **Enforce HTTPS**.

`public/CNAME` already contains `clareconnects.com`, and Vite uses `/` because the site is served from a custom root domain.

## Domain configuration

At the DNS provider for `clareconnects.com`, the domain owner should add GitHub’s documented apex records:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<github-user>.github.io` |

Remove conflicting apex A/AAAA records first. GitHub also supports four IPv6 AAAA records; consult current GitHub Pages documentation before adding them. Verify the custom domain on the GitHub account to reduce takeover risk. DNS and TLS changes can take up to 24 hours to settle.

## SEO, privacy and accessibility

Each route updates its title, description, canonical URL and social metadata. The project includes structured service data, `robots.txt`, `sitemap.xml`, semantic landmarks, keyboard support, reduced-motion styling, visible focus treatment, labelled forms, status announcements and a privacy-first cookie notice.

The Privacy and Terms pages are explicitly starter copy. Before launch, complete the business identity, address, retention, lawful basis, processor and jurisdiction details, then obtain appropriate professional review. Do not add non-essential analytics until a consent approach and notice are agreed.

## Launch

Use `LAUNCH_CHECKLIST.md` for the final approval sequence. At minimum: replace assets, confirm services, publish consented testimonials, connect the form endpoint, review legal pages, configure DNS, enforce HTTPS and run `pnpm check` from a clean clone.
