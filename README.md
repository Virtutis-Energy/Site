Project Made By Virtutis Energy Tech Sector (07/2025)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Recommended Node.js version:

```bash
22
```

If you use `nvm`, run:

```bash
nvm use
```

Create your environment file before starting the app:

```bash
cp .env.example .env.local
```

Set the backend URL in `.env.local`:

```bash
NEXT_PUBLIC_URL_BACK_END=http://localhost:8000
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

- The `dev` script already disables Node experimental Web Storage to avoid `localStorage.getItem is not a function` during `next dev` in some environments.
- The frontend requires `NEXT_PUBLIC_URL_BACK_END` to be configured. If the API URL is missing or incorrect, requests may return HTML instead of JSON.
- If port `3000` is already in use, stop old Next.js processes before starting a new one.

To stop stale dev servers:

```bash
pkill -f "next dev" || true
pkill -f "node /code/node_modules/.bin/next" || true
```

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
