This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.



## Folder Structure
```
hotel-dashboard-nextjs/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── Navbar/
│   │   |   └── Navbar.tsx
│   │   ├── Header/
│   │   |   └── Header.tsx
│   │   ├── About/
│   │   |   └── About.tsx
│   │   ├── Amenities/
│   │   |   └── Amenities.tsx
│   │   ├── BookingCard/
│   │   |   └── BookingCard.tsx
│   │   ├── Gallery/
│   │   |   └── Gallery.tsx
│   │   ├── Location/
│   │   |   └── Location.tsx
│   │   ├── Question/
│   │   |   └── Question.tsx
│   │   ├── Rooms/
│   │   |   └── Rooms.tsx
│   │   ├── Rules/
│   │   |   └── Rules.tsx
│   │   ├── Spaces/
│   │   |   └── Spaces.tsx
│   │   ├── Tabs/
│   │   |   └── Tabs.tsx
│   │   ├── Footer/
│   │   |   └── Footer.tsx
│   ├── pages/
│   │   ├── 404.tsx
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   |   └── hotel/
│   |       └── [hotelId].tsx
|   styles/
│   └── globals.css
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

