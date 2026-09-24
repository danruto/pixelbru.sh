# pixelbru.sh

The personal site for [Pixel Brush](https://pixelbru.sh), deployed as a static export to Cloudflare.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, `output: "export"`) and React 19
- [Tailwind CSS v4](https://tailwindcss.com) with a CSS-first theme in `app/globals.css`
- [shadcn/ui](https://ui.shadcn.com) components (`components/ui`, configured by `components.json`) on top of [Radix UI](https://www.radix-ui.com)
- [simple-icons](https://simpleicons.org) for brand logos and [lucide](https://lucide.dev) for UI icons
- [oxlint](https://oxc.rs/docs/guide/usage/linter) and [oxfmt](https://oxc.rs/docs/guide/usage/formatter) for linting and formatting
- A Cloudflare Pages Function (`functions/api/contact.ts`) forwards the contact form to Discord

## Development

```bash
bun install
bun dev          # http://localhost:3000
bun run lint
bun run fmt
bun run build    # static site in ./out
bun run preview  # serve ./out with wrangler, including the contact function
```

Add a new shadcn component with `bunx shadcn@latest add <component>`.
