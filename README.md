# XBesh Affiliate Hackathon 2025 Landing Page

A high-impact, conversion-focused landing page for the XBesh Affiliate Hackathon 2025 event.

## Features

- Responsive, mobile-first design
- Interactive timeline with countdown timers
- Prize showcase with judging criteria
- FAQ section with accordion functionality
- Add-to-calendar integration for key events
- Floating CTA for improved conversion

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Headless UI for accessible components
- React Countdown for timers
- Add-to-Calendar Button for calendar integration

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v7 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/xbesh/hackathon-landing.git
cd hackathon-landing
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

4. Build for production
```bash
pnpm build
```

5. Preview production build
```bash
pnpm preview
```

## Project Structure

- `/public` - Static assets including favicon and OG image
- `/src` - Source code
  - `/components` - React components organized by section
  - `App.tsx` - Main application component
  - `main.tsx` - Application entry point
  - `index.css` - Global styles and Tailwind utilities

## Customization

- Update event dates in the Timeline component
- Modify prizes and judging criteria in the Prizes component
- Add or remove FAQ items in the FAQ component
- Change colors in the tailwind.config.js file

## Brand Assets

The project includes:
- SVG Logo (in Logo.tsx component)
- Favicon (32x32 PNG)
- Open Graph image (1200x630 JPG)

## License

Copyright © 2025 XBesh Labs, LLC. All rights reserved.
