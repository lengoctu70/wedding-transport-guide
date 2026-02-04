# Wedding Transport Guide

Mobile-first wedding transport guide web app for guests traveling to Phú Túc, Gia Lai.

## Quick Start

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`

## Wedding Details

- **Date:** March 21-22, 2025
- **Location:** Phú Túc, Gia Lai
- **Transport Options:** 7 options from 3 cities (TP.HCM, Da Nang, Hue)

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19.2.4 |
| Language | TypeScript 5.8 |
| Build Tool | Vite 6.2.0 |
| Styling | Tailwind CSS (CDN) |
| Icons | Lucide React 0.563.0 |

## Project Structure

```
wedding-transport-guide/
├── components/           # React components
│   ├── TransportCard.tsx
│   ├── GeneralInfo.tsx
│   └── RecommendationSection.tsx
├── docs/                 # Documentation
├── App.tsx               # Main application
├── constants.tsx         # Transport data & constants
├── types.ts              # TypeScript interfaces
├── index.tsx             # Entry point
└── vite.config.ts        # Vite configuration
```

## Features

- Filter transport options by departure city (TP.HCM, Da Nang, Hue)
- Display schedules, pricing, and booking links for 7 transport options
- Three recommendation categories: Wallet (budget), Clock (fast), Star (experience)
- Mobile-optimized responsive design
- Smooth scroll navigation with sticky filter tabs

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Documentation

- [Project Overview & PDR](./docs/project-overview-pdr.md)
- [Codebase Summary](./docs/codebase-summary.md)
- [Code Standards](./docs/code-standards.md)
- [System Architecture](./docs/system-architecture.md)
- [Project Roadmap](./docs/project-roadmap.md)
