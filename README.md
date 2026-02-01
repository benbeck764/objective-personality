# Objective Personality Database

A PNPM monorepo for browsing and managing the Objective Personality System (OPS) typed people database. The application includes a Next.js web interface and an Azure Functions ETL pipeline for data synchronization.

## 📦 Monorepo Structure

This project is organized as a PNPM workspace with three packages:

```
objective-personality/
├── app/                    # Next.js 14 web application
├── etl-function/          # Azure Functions ETL pipeline
├── data/                  # Shared Prisma data layer
└── pnpm-workspace.yaml    # Workspace configuration
```

### Packages

- **`app`** - Next.js 14 application with App Router for browsing OPS typed people
  - Framework: Next.js 14, React 18
  - UI: Material-UI (MUI), Emotion styling
  - Data: Prisma client via workspace dependency
  - Deployment: Azure Static Web Apps

- **`etl-function`** - Azure Functions ETL pipeline for data synchronization
  - Scrapes OPS typed people data from Airtable
  - Transforms and loads data into Azure SQL Database
  - Technologies: Puppeteer, Cheerio, Axios
  - Deployment: Azure Functions

- **`data`** - Shared Prisma data layer
  - Consolidated Prisma schema (single source of truth)
  - Dual ESM/CommonJS build output
  - Consumed by both app and etl-function

## 🚀 Getting Started

### Prerequisites

- **Node.js**: >= 18.17.0 < 20
- **PNPM**: >= 8.0.0
- **Database**: Azure SQL Database connection string
- **GitHub Packages Access**: For `@benbeck764` private packages

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/benbeck764/objective-personality.git
   cd objective-personality
   ```

2. **Configure authentication for GitHub Packages**

   Create a `.npmrc` file in the root (already in `.gitignore`):
   ```bash
   cp .npmrc.example .npmrc
   ```

   Edit `.npmrc` and replace `${NPM_TOKEN}` with your GitHub Personal Access Token:
   ```ini
   @benbeck764:registry=https://npm.pkg.github.com/
   //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN_HERE
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

4. **Set up environment variables**

   Create `.env` files in the appropriate packages:

   **`data/.env`** (Prisma connection):
   ```env
   DATABASE_URL="sqlserver://..."
   SHADOW_DATABASE_URL="sqlserver://..."
   ```

   **`app/.env.local`** (Next.js):
   ```env
   DATABASE_URL="sqlserver://..."
   NEXT_PUBLIC_API_BASE_URL="http://localhost:3000"
   ```

   **`etl-function/local.settings.json`** (Azure Functions):
   ```json
   {
     "IsEncrypted": false,
     "Values": {
       "AzureWebJobsStorage": "",
       "FUNCTIONS_WORKER_RUNTIME": "node",
       "DATABASE_URL": "sqlserver://...",
       "Environment": "local",
       "REPLACE_DATA": "true"
     }
   }
   ```

5. **Generate Prisma client and build data package**
   ```bash
   pnpm --filter objective-personality-data generate
   pnpm --filter objective-personality-data build
   ```

## 💻 Development

### Run the Next.js app locally
```bash
pnpm dev:app
```
Visit [http://localhost:3000](http://localhost:3000)

### Run the ETL function locally
```bash
pnpm dev:function
```

### Build all packages
```bash
pnpm build
```

### Build individual packages
```bash
pnpm build:app       # Build app and data packages
pnpm build:function  # Build function and data packages
pnpm build:data      # Build data package only
```

### Other useful commands
```bash
pnpm clean           # Clean node_modules in all packages
pnpm lint            # Lint all packages
pnpm format          # Format code with Prettier
```

## 🗄️ Database

### Run Prisma migrations
```bash
cd data
pnpm migrate         # Run migrations in development
pnpm migrate:deploy  # Deploy migrations to production
```

### Regenerate Prisma client
```bash
pnpm --filter objective-personality-data generate
```

## 🚢 Deployment

### GitHub Actions Workflows

The project uses GitHub Actions for CI/CD:

1. **Build & Deploy Next SWA** (`.github/workflows/build-and-deploy-next-swa.yml`)
   - Triggers on push/PR to `main`
   - Builds data package and Next.js app
   - Deploys to Azure Static Web Apps

2. **Build & Deploy ETL Function** (`.github/workflows/build-and-deploy-etl-function.yml`)
   - Triggers on push/PR to `main`
   - Builds data package and Azure Function
   - Deploys to Azure Functions

### Required GitHub Secrets

- `NPM_TOKEN` - GitHub Personal Access Token for private packages
- `AZURE_STATIC_WEB_APPS_API_TOKEN_KIND_MOSS_00FB06810` - Azure SWA deployment token
- `AZURE_FUNCTION_PUBLISH_PROFILE` - Azure Functions publish profile

### Required GitHub Variables

- `AZURE_FUNCTION_NAME` - Name of your Azure Function App
- `API_BASE_URL` - Base URL for the API

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, Material-UI, Emotion
- **Backend**: Azure Functions v4, Node.js
- **Database**: Azure SQL Database, Prisma ORM
- **Package Manager**: PNPM (workspace)
- **Language**: TypeScript 5.2.2
- **Deployment**: Azure Static Web Apps, Azure Functions
- **CI/CD**: GitHub Actions

## 📝 Project Scripts

### Root-level scripts
| Command | Description |
|---------|-------------|
| `pnpm dev:app` | Start Next.js dev server |
| `pnpm dev:function` | Start Azure Functions locally |
| `pnpm build` | Build all packages |
| `pnpm build:app` | Build app (includes data) |
| `pnpm build:function` | Build function (includes data) |
| `pnpm build:data` | Build data package only |
| `pnpm clean` | Clean node_modules in all packages |
| `pnpm lint` | Lint all packages |
| `pnpm format` | Format code with Prettier |
| `pnpm generate` | Generate Prisma client |

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `pnpm format` to format code
4. Run `pnpm lint` to check for issues
5. Commit using conventional commits
6. Open a pull request

## 📄 License

ISC License - see LICENSE file for details

## 👤 Author

Ben Beck - [@benbeck764](https://github.com/benbeck764)