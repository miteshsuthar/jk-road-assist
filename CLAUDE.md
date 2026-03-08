# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server (localhost:3000)
npm run build      # Production build
npm test           # Run tests (Jest + React Testing Library)
npm test -- --watchAll=false   # Run tests once without watch mode
```

## Architecture

React 19 SPA (Create React App) with React Router v7 and Tailwind CSS 3. No backend — purely frontend. Contact form uses EmailJS (config via env vars `REACT_APP_EMAILJS_*`).

**Routing:** All routes defined in `src/routes/routes.js`. Service detail pages use dynamic route `/services/:serviceName`.

**Styling approach:** Tailwind utilities mixed with per-component custom CSS files in `src/styles/`. Not CSS modules — plain CSS imports. Tailwind config defines custom color scales: `primary` (blue), `accent` (amber), `emergency` (red).

**Constants-driven:** Service data, pricing, image paths, and route configs live in `src/constants/`. Pages render from these data files rather than hardcoding content.

**Custom hooks** (`src/hooks/`):
- `useScrollReveal` — IntersectionObserver-based scroll animations
- `useCounter` — Animated number counting for stats

**Layout:** `App.js` wraps all routes with Header, Sidebar (mobile nav), Footer, PageTitle (dynamic document.title), and a floating call button.

## Tailwind Custom Tokens

Colors: `primary-50..950`, `accent-400..600`, `emergency-500..700`
Font: Inter via `font-sans` / `font-display`
Animations: `fade-in`, `fade-in-up`, `fade-in-down`, `fade-in-left`, `fade-in-right`, `scale-in`, `slide-up`, `pulse-slow`, `float`, `shimmer`
