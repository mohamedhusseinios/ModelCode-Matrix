# ModelCode-Matrix

🚀 **Live Demo:** [https://mohamedhusseinios.github.io/ModelCode-Matrix/](https://mohamedhusseinios.github.io/ModelCode-Matrix/)

## How to Run

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** (npm comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ModelCode-Matrix
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reloading |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

### Running the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Building for Production

```bash
npm run build
```

The optimized production files will be generated in the `dist` folder.

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
