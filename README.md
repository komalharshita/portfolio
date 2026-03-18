# Komal Harshita — Portfolio

A data analyst portfolio built with an Excel workbook aesthetic. Features an interactive SQL playground, GitHub analytics, skill charts, project showcase, and certifications — all in a spreadsheet-themed UI.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** — build tool & dev server
- **Tailwind CSS** + **shadcn/ui** — styling & component library
- **Framer Motion** — animations
- **Recharts** — data visualizations
- **sql.js** — in-browser SQLite playground
- **React Router** — routing
- **Vitest** — unit testing

## Getting started

\`\`\`bash
# Install dependencies
npm install

# Start development server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## Running tests

\`\`\`bash
npm test
\`\`\`

## Deployment

This project is configured for **Vercel**. Push to your connected repository and Vercel will automatically run \`npm run build\` and deploy the \`dist/\` output.

Build command: \`npm run build\`
Output directory: \`dist\`
Install command: \`npm install\`

## Project structure

\`\`\`
src/
├── assets/          # Images
├── components/
│   ├── tabs/        # Tab panel content (About, Skills, Projects, etc.)
│   ├── ui/          # shadcn/ui primitives
│   └── *.tsx        # Shared components
├── hooks/           # Custom React hooks
├── lib/             # Utilities (cn helper)
├── test/            # Vitest setup & example tests
├── App.tsx          # Root component & router
├── main.tsx         # Entry point
└── index.css        # Global styles & Tailwind layers
public/
├── robots.txt
└── sql-wasm.wasm    # WebAssembly binary for sql.js
\`\`\`
