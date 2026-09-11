# Web Dev Roadmap

An interactive learning roadmap for Bangladeshi school students. Track your progress from beginner to full-stack developer across 8 phases of curated Bengali and English resources.

## Features

- **8 progressive phases** from computational thinking to portfolio polish
- **Gamified levels**: Noob, Beginner, Apprentice, Intermediate, Advanced, Expert, Master, Legend
- **Progress tracking** with IndexedDB (localStorage fallback)
- **Bilingual content** with Bangla titles and resource links
- **SMART goals** for each phase with measurable milestones
- **Mascot characters** (Pandi, Otter, Piglet) guiding learners through their journey
- **Badge collection** rewarding phase completion

## Tech Stack

- [Astro](https://astro.build) — static site generation
- [React](https://react.dev) — interactive UI components
- [Tailwind CSS v4](https://tailwindcss.com) — styling with Duolingo-inspired design tokens
- [idb](https://github.com/nicedoc/idb) — IndexedDB wrapper for progress storage

## Project Structure

```text
/
├── public/
│   └── mascots/          # SVG mascot characters
├── src/
│   ├── components/
│   │   ├── content/      # PhaseCard, PhaseDetail, TopicRow, etc.
│   │   ├── feedback/     # ErrorBoundary, StorageWarning
│   │   ├── layout/       # Navbar, Footer, HeroSection, ProgressDashboard
│   │   └── ui/           # Badge, Button, ProgressBar, LoadingSpinner
│   ├── constants/        # Mascot configuration
│   ├── data/             # Curriculum data (9 phases, 40+ topics)
│   ├── layouts/          # Root layout with progress provider
│   ├── lib/              # Progress tracking store and storage layer
│   ├── pages/            # Route pages (home, progress, phase detail)
│   ├── styles/           # Global CSS with Tailwind theme
│   └── types/            # TypeScript interfaces
└── package.json
```

## Commands

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview build locally |

## Getting Started

```sh
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) to view the roadmap.

## How It Works

1. **Browse phases** on the home page — each phase covers a specific skill area
2. **Click into a phase** to see topics with links to Bengali and English video courses
3. **Check off topics** as you complete them — progress saves automatically
4. **Track your journey** on the progress page with an SVG chart and badge collection

## License

MIT
