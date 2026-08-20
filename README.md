<div align="center">
  <h1>✨ GKP Artistry & Makeovers</h1>
  <p><strong>Luxury Bridal Makeup & Professional Makeup Academy Platform</strong></p>
  
  <p>
    A high-performance, SEO-optimized, Server-Side Rendered (SSR) web application built with modern React 19, TanStack Start, and Tailwind CSS v4.
  </p>

  <div>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/TanStack_Start-SSR-FF4154?style=flat-square" alt="TanStack Start" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
  </div>
</div>

<br />

Welcome to the **GKP Artistry & Makeovers** repository. This project is a bespoke digital experience designed for a luxury bridal studio and makeup academy based in Mumbai. It leverages the latest features in the React ecosystem to deliver lightning-fast load times, complex animations, and an accessible user interface.

---

## 🌟 Key Features

- **⚡ Blazing Fast SSR**: Powered by **TanStack Start** and **Vite** for optimized Server-Side Rendering and instantaneous page loads (LCP < 2.0s).
- **🛣️ File-based Routing**: Type-safe routing generated automatically via **TanStack React Router** (`src/routes`).
- **💅 Luxury Design System**: Fully integrated design tokens (Ivory, Ink, Wine, Gold, Taupe, Sand) using Playfair Display & Inter, built on **Tailwind CSS v4**.
- **🧩 Accessible UI Primitives**: Built on top of **Radix UI** to ensure full ARIA compliance, screen-reader support, and keyboard navigation.
- **✨ Rich Animations**: Smooth, high-performance interactions driven by **Framer Motion**, **GSAP**, and **OGL** (WebGL).
- **📝 Robust Forms**: Seamless inquiry and booking flows managed by **React Hook Form** and validated via **Zod**.
- **🔍 SEO & Discoverability**: Implemented detailed structured data (Course, FAQ, Review schema), `robots.txt`, `llms.txt`, and LCP image `fetchpriority`.

---

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Frameworks** | React 19, Vite, TanStack Start |
| **Routing** | TanStack React Router |
| **Styling** | Tailwind CSS v4, `clsx`, `tailwind-merge`, `cva` |
| **UI Components** | Radix UI, Lucide React (Icons) |
| **Animations** | Framer Motion, GSAP, OGL |
| **Forms & State** | React Hook Form, Zod, TanStack Query |
| **Quality Control** | ESLint, Prettier, TypeScript |

---

## 🚀 Getting Started

Follow these steps to set up the project locally. 

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/) installed.

### 1. Clone the repository
```bash
git clone https://github.com/your-org/gurleen-s-bridal-studio.git
cd gurleen-s-bridal-studio
```

### 2. Install Dependencies
You can use `npm` or `bun` (recommended for speed, as `bun.lock` is included).
```bash
# Using npm
npm install

# Using bun
bun install
```

### 3. Start the Development Server
```bash
# Using npm
npm run dev

# Using bun
bun run dev
```
The application will be available at `http://localhost:5173` (or the port specified in your console).

---

## 📂 Project Structure

```text
gurleen-s-bridal-studio/
├── src/
│   ├── components/
│   │   └── ui/           # Reusable Radix/Tailwind components (Dialog, Sheet, etc.)
│   ├── routes/           # TanStack file-based routes (e.g., academy/, about.tsx)
│   ├── lib/              # Core utilities (e.g., cn() for class merging)
│   ├── router.tsx        # TanStack Router initialization
│   └── server.ts         # SSR entry point and server configuration
├── public/               # Static assets (images, fonts, robots.txt)
├── graphify-out/         # Architecture knowledge graph (Graphify)
├── vite.config.ts        # Vite build & plugin configuration
└── package.json          # Project dependencies & scripts
```

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles and bundles the application for production deployment.
- `npm run build:dev`: Builds the application in development mode for debugging output.
- `npm run preview`: Bootstraps a local web server to preview the production build.
- `npm run lint`: Runs ESLint to find and fix problems in the codebase.
- `npm run format`: Runs Prettier to auto-format the codebase.

---

## 🏗️ Architecture & Best Practices

For a deeper dive into the system's architecture, please refer to the **[Architecture Guide (ARCHITECTURE.md)](./ARCHITECTURE.md)**. 

### Key Development Guidelines:
1. **Routing**: Do not manually configure routes. Add files to `src/routes/` and let the `@tanstack/router-plugin` auto-generate `FileRoutesByPath`.
2. **Styling**: Always use the `cn()` utility from `src/lib/utils` when conditionally merging Tailwind classes. Stick to the defined luxury color tokens.
3. **Animations**: Use **Framer Motion** for standard layout and entrance animations (e.g., `<Reveal />`). Reserve **GSAP** and **OGL** strictly for complex scroll-hijacking or WebGL canvas effects.
4. **Hydration**: Because the app is Server-Side Rendered (SSR), avoid using `window` or `document` objects directly in the body of functional components. Ensure browser-only code runs inside `useEffect` or checks for `typeof window !== "undefined"`.

---

## 🤝 Knowledge Graph (Graphify)
This repository uses [Graphify](https://github.com/your-graphify-link) to maintain a live, navigable knowledge graph of component relationships.
- View the latest report in `graphify-out/GRAPH_REPORT.md`.
- After making significant structural changes, regenerate the graph locally by running: `graphify update .`

---

## 🚀 Deployment

The project is configured for seamless deployment on platforms like **Vercel**, **Netlify**, or **Cloudflare Pages**.
Currently, the project is at **100% development progress** and pending Custom Domain Binding on Vercel.

To verify a production build locally before deployment:
```bash
npm run build && npm run preview
```

---

<div align="center">
  <p>Built with ❤️ for GKP Artistry & Makeovers</p>
</div>
