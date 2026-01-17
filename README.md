# OPMandira Project Documentation

This document provides step-by-step instructions on how to set up, run, build, and deploy the OPMandira restaurant landing page.

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm (installed by default with Node.js)

### Installation
1.  **Clone or Download** the repository to your local machine.
2.  **Install dependencies**:
    ```bash
    npm install
    ```

## 💻 Development

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Key Commands
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production (Static Export).
- `npm run lint`: Checks for code quality issues.
- `npm run type-check`: Validates TypeScript types.

---

## 🏗️ Build Process

This project is configured for **Static Site Generation (SSG)**.

1.  **Run Build**:
    ```bash
    npm run build
    ```
2.  **Output**:
    The production-ready files will be generated in the `out/` directory. These are pure HTML/CSS/JS files that can be hosted anywhere.

---

## 🌐 Deployment (GitHub Pages)

The project is pre-configured to be hosted on GitHub Pages under the `/OPMandira` path.

### Configuration
If you change the repository name, you **must** update the `basePath` in `next.config.mjs`:
```javascript
// next.config.mjs
const nextConfig = {
  output: 'export',
  basePath: '/YOUR_NEW_REPO_NAME', // Update this
  // ...
};
```

### Steps to Deploy
1.  Ensure your code is pushed to a GitHub repository named `OPMandira`.
2.  In GitHub: **Settings > Pages**.
3.  Set **Build and deployment > Source** to **GitHub Actions**.
4.  The site will automatically build and deploy whenever you push to the `main` branch.

---

## 🛠️ Tech Stack Analysis
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend (Optional)**: Supabase (Pre-configured client available in `lib/supabase`)
- **Analytics**: PostHog
