## Veedu Real-Estate Platform

Veedu is a Next.js (Pages Router) application that lets users browse, buy, rent, or list homes using Chakra UI and RapidAPI’s GraphQL listings data.

### Getting Started
```bash
npm install
npm run dev
# visit http://localhost:3000
```

### Environment Variables
1. Copy `.env.example` to `.env.local`.
2. Add your `RAPID_API_KEY` and `RAPID_API_ENDPOINT` from RapidAPI.
3. Restart `npm run dev` whenever env values change.

### Documentation
- [Implementation Plan](docs/implementation-plan.md)
- (coming soon) Architectural Decision Records

### Tech Stack Highlights
- Next.js Pages Router + TypeScript
- Chakra UI for theming/layout
- RapidAPI GraphQL backend accessed through typed hooks
- ESLint, Prettier, and Vitest for quality gates
