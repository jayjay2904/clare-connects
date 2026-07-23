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

Requires Node.js 22+ and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. Production and quality commands:

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run check
```

The production site is written to `dist/`. The build also generates a small `404.html` redirect that sends direct React Router requests through the deployed root document, then restores the original clean URL before React starts. This keeps refreshed routes working on GitHub Pages without hash-based URLs.

## Editing content

Business copy and editable factual details live in `src/content/siteContent.ts`. Optional details awaiting confirmation are listed in `CONTENT_CHECKLIST.md`. Page-specific editorial copy lives in `src/pages/`.

Do not add unverified prices, savings, customer numbers, awards, income examples, provider claims or regulatory language. Keep Clare positioned as a personal contact who works with established providers and specialists.

## Replacing assets

Public assets live in `public/assets/`; see its README for dimensions. Replace photography, the social-sharing image or favicon only with approved, rights-cleared files. Use WebP or AVIF for photographs and preserve their aspect ratios.

## Enquiries

Enquiry cards open the visitor's own email application with Clare's address, a suitable subject and a few helpful prompts already prepared. The website does not collect, transmit or store enquiry data. This is a production-safe choice for static hosting and avoids presenting a form that only appears to submit.

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

The Privacy, Cookies and Terms pages describe the site's current behaviour, including direct-email enquiries and essential-only browser storage. Obtain appropriate professional review before launch, then add any confirmed business identity and complaints details listed in `CONTENT_CHECKLIST.md`. Do not add non-essential analytics until a consent approach and notice are agreed.

## Launch

Use `LAUNCH_CHECKLIST.md` for the final approval sequence. At minimum: confirm services and testimonial permissions, review legal pages, configure DNS, enforce HTTPS and run `npm run check` from a clean clone.
