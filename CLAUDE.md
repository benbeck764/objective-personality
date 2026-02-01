# Objective Personality System - Project Guide

## 📋 Project Overview

This is a Next.js application for exploring and searching the **Objective Personality System (OPS)** - a personality typology system created by Dave and Shannon Powers that extends the 16 Myers-Briggs Type Indicator (MBTI) types into 512 distinct personality types.

### What is OPS?

The Objective Personality System is based on:
- **Expansion of MBTI**: Extends 16 MBTI types to 512 distinct types
- **Binary Selections ("Coins")**: Types are determined through 10 binary selections
- **Consistent Typing Method**: Independent operators match on all coin selections with 90%+ consistency
- **Social Types**: As of March 2023, includes four social behavior patterns for each personality
- **Functions & Animals**: Uses cognitive functions (Ti, Te, Fi, Fe, Ni, Ne, Si, Se) and animal types (Blast, Consume, Play, Sleep)

**Learn More:**
- [OPS Wiki](https://wiki.personality-database.com/books/objective-personality)
- [What is OPS? - Subjective Personality](https://subjectivepersonality.wordpress.com/2020/08/19/what-is-ops/)
- [OPS History and Method](https://wiki.personality-database.com/books/objective-personality/page/history-and-method)

## 🏗️ Architecture

### Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript 5.2
- **Database**: Azure SQL Server via Prisma ORM
- **Storage**: Azure Blob Storage
- **Styling**: Material-UI (MUI) + Emotion
- **Package Manager**: pnpm (monorepo)

### Project Structure

```
objective-personality/
├── app/                    # Next.js application
│   ├── src/
│   │   ├── api/           # Backend services (functional)
│   │   │   ├── lib/       # Shared utilities (Prisma, blob storage)
│   │   │   ├── services/  # Business logic (typed-person.ts)
│   │   │   ├── types.ts   # Type definitions
│   │   │   └── constants.ts # Constants (HttpStatus)
│   │   ├── app/           # Next.js App Router pages
│   │   ├── models/        # Data models and DTOs
│   │   ├── routing/       # Route definitions
│   │   └── theme/         # MUI theme configuration
├── data/                  # Prisma schema and data layer
│   └── src/
│       ├── prisma/        # Prisma schema
│       └── generated/     # Generated Prisma client
└── etl-function/          # Azure Functions for ETL

```

### Architecture Principles

**Modern Functional Approach:**
- Server Components call backend services directly (no HTTP layer)
- Functions instead of classes
- Pure functions for business logic
- Module-level singletons for clients (Prisma, Blob Storage)

**Data Flow:**
```
Server Component → Service Function → Prisma Client → Database
```

**No Unnecessary Layers:**
- ❌ No API routes for server-side data (eliminated HTTP overhead)
- ❌ No class-based services (functional programming)
- ❌ No service wrappers (direct service access)

## 💻 Coding Standards

### TypeScript Path Aliases

Use path aliases for clean imports:
```typescript
// ✅ Good
import { getTypedPerson } from '@/api/services/typed-person';
import { OPSTypedPersonExtended } from '@/models/ops-typed-people.models';

// ❌ Bad
import { getTypedPerson } from '../../../api/services/typed-person';
```

**Available Aliases:**
- `@/*` - src root
- `@/api/*` - Backend services
- `@/models/*` - Data models
- `@/routes/*` - Routing
- `@/theme/*` - Theme
- `@/utilities/*` - Utilities

### Function Style

**ALWAYS use function expressions (arrow functions), NEVER function declarations:**

```typescript
// ✅ Correct - Function Expression (Arrow Function)
export const getTypedPerson = async (name: string): Promise<ServiceResponse<...>> => {
  // ...
};

const helperFunction = (data: string) => {
  // ...
};

// ❌ Wrong - Function Declaration
export async function getTypedPerson(name: string): Promise<ServiceResponse<...>> {
  // ...
}

function helperFunction(data: string) {
  // ...
}

// ✅ Exception - Function Overloading (rare case)
export function overloadedFunction(x: number): string;
export function overloadedFunction(x: string): number;
export function overloadedFunction(x: number | string): string | number {
  // Implementation
}
```

**ESLint Rules Enforced:**
- `prefer-arrow-callback`: Requires arrow functions for callbacks
- `func-style`: Enforces function expressions over declarations

### Conditional Statements

**One-line if statements should NOT use curly braces:**

```typescript
// ✅ Correct - One-line without braces
if (!person) return { status: HttpStatus.NOT_FOUND };
if (isValid) doSomething();

// ❌ Wrong - Unnecessary braces for one-liners
if (!person) {
  return { status: HttpStatus.NOT_FOUND };
}

// ✅ Correct - Multi-line requires braces
if (condition) {
  doSomething();
  doSomethingElse();
}

// ✅ Correct - Complex condition with braces
if (person.status === HttpStatus.OK && result.data) {
  processData(result.data);
  logSuccess();
}
```

**ESLint Rule Enforced:**
- `curly: ["error", "multi-line", "consistent"]` - Enforces no braces for single-line, requires braces for multi-line

### Code Style

**General Guidelines:**
- Use `const` by default, `let` only when reassignment is needed
- Use template literals over string concatenation
- Prefer optional chaining (`?.`) and nullish coalescing (`??`)
- Use early returns to reduce nesting
- Keep functions small and focused (single responsibility)

**Prettier Configuration:**
- Single quotes
- 2-space indentation
- 100 character line width
- Semicolons enabled
- Trailing commas (ES5)

### Error Handling

**Use ServiceResponse pattern for backend services:**

```typescript
export const getTypedPerson = async (name: string): Promise<ServiceResponse<OPSTypedPersonExtended>> => {
  try {
    const prisma = getPrismaClient();
    const person = await prisma.oPSTypedPerson.findFirst({
      where: { Name: name },
      include: { Links: true },
    });

    if (!person) return { status: HttpStatus.NOT_FOUND };

    const dto = mapOpsTypedPersonToOpsTypedPersonExtended(person);
    return { status: HttpStatus.OK, data: dto };
  } catch (err: any) {
    console.log(err);
    return {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      errorMessage: err.message,
    };
  }
};
```

**Components handle status codes explicitly:**

```typescript
const SearchedPerson = async ({ params }: { params: { name: string } }) => {
  const result = await getTypedPerson(decodeURIComponent(params.name));

  return (
    <AppCard paperSx={{ width: '100%', px: 2, pt: 2, pb: 4 }}>
      {result.status === HttpStatus.OK && result.data ? (
        <TypedPersonResult person={result.data} />
      ) : result.status === HttpStatus.NOT_FOUND ? (
        <Typography>Person not found</Typography>
      ) : (
        <Typography>Error: {result.errorMessage || 'Unknown error'}</Typography>
      )}
    </AppCard>
  );
};
```

### Naming Conventions

**Files:**
- Components: PascalCase (`TypedPersonResult.tsx`)
- Services: kebab-case (`typed-person.ts`)
- Utilities: kebab-case (`string-utils.ts`)
- Types: kebab-case (`ops-typed-people.models.ts`)

**Code:**
- Components: PascalCase (`TypedPersonResult`)
- Functions: camelCase (`getTypedPerson`)
- Constants: UPPER_SNAKE_CASE (`HTTP_STATUS_OK`)
- Types/Interfaces: PascalCase (`OPSTypedPersonExtended`)
- Enums: PascalCase (`HttpStatus`)

## 🔧 Development

### Setup

```bash
# Install dependencies (from root)
pnpm install

# Generate Prisma client
cd data
pnpm generate

# Build data package
pnpm build

# Start dev server
cd ../app
pnpm dev
```

### Environment Variables

**Required in `app/.env.local`:**
```env
# Database
DATABASE_URL="sqlserver://server.database.windows.net:1433;database=db;user=user;password=pass;encrypt=true"

# API (for local dev)
NEXT_PUBLIC_API_BASE_URL="http://localhost:3000/api"

# Optional: Azure Blob Storage (for image uploads)
STORAGE_CONNECTION_STRING="DefaultEndpointsProtocol=https;AccountName=..."
```

### Key Commands

```bash
# Development
pnpm dev          # Start Next.js dev server

# Build
pnpm build        # Production build
pnpm start        # Start production server

# Type Checking
npx tsc --noEmit  # Run TypeScript compiler

# Linting
pnpm lint         # Run ESLint
```

### Database

**Prisma Client Access:**
```typescript
import { getPrismaClient } from '@/api/lib/prisma';

const prisma = getPrismaClient();
const person = await prisma.oPSTypedPerson.findFirst({
  where: { Name: 'Elon Musk' },
  include: { Links: true },
});
```

**Schema Location:** `data/src/prisma/schema.prisma`

### Blob Storage

**Functional API:**
```typescript
import { uploadFile, getBlobClient } from '@/api/lib/blob-storage';

// Check if storage is configured
const client = getBlobClient();
if (!client) {
  // Storage not configured
}

// Upload file
const result = await uploadFile({
  file: fileBuffer,
  container: 'images',
  filename: 'person.jpg',
});
```

## 🎯 OPS Domain Concepts

### Type Structure

Each OPS typed person includes:
- **MBTI Type**: 4-letter MBTI code (e.g., INTJ)
- **OPS Type**: Full type with functions (e.g., Ti/Ne-CS/P(B))
- **Cognitive Functions**: Stack of Ti, Te, Fi, Fe, Ni, Ne, Si, Se
- **Animals**: Blast, Consume, Play, Sleep (in order)
- **Temperament**: IxxP, IxxJ, ExxP, ExxJ
- **Modality**: Observer/Decider, Energy/Info dominant
- **Social Type**: Social behavior pattern
- **Attributes**: Jumper, Glass Lizard, etc.

### Search Filters

The system supports searching by:
- **Temperament**: Decider/Observer, IxxP, ExxJ, etc.
- **Functions**: Self/Tribe (Di/De), Gather/Organize (Oe/Oi)
- **Cognitive Types**: Thinker, Feeler, Intuitive, Sensor
- **Letter Combinations**: SF, ST, NF, NT
- **Specific Functions**: Ti, Te, Fi, Fe, Ni, Ne, Si, Se
- **Special Attributes**: Jumper, Glass Lizard
- **Name or Type**: Direct name/type matching

### Data Models

Key types in `@/models/ops-typed-people.models.ts`:
- `OPSTypedPersonExtended` - Complete person data
- `OpsTypedPersonSearchRequestDto` - Search request (filterText, pagination)
- `OpsTypedPersonSearchResponseDto` - Paginated search results

## 📚 References

### OPS Resources
- [OPS Wiki - Personality Database](https://wiki.personality-database.com/books/objective-personality)
- [What is OPS? - Subjective Personality](https://subjectivepersonality.wordpress.com/2020/08/19/what-is-ops/)
- [OPS History and Method](https://wiki.personality-database.com/books/objective-personality/page/history-and-method)

### Technical Documentation
- [Next.js 16 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Material-UI Documentation](https://mui.com)

## 🚀 Recent Major Changes

### Architecture Refactoring (January 2026)

Completed a comprehensive refactoring to modernize the codebase:

1. **Eliminated HTTP Layer**: Server components now call backend services directly
   - Removed API routes for server-side data fetching
   - Removed frontend HTTP service layer
   - 50% reduction in architecture layers (4 → 2)

2. **Functional Transformation**: Converted class-based services to functional approach
   - Replaced `TypedPersonService` class with pure functions
   - Converted `BlobStorageClient` to functional API
   - Module-level singletons for Prisma and Blob Storage clients

3. **Folder Structure Cleanup**: Removed non-standard underscore prefixes
   - `_api` → `api`
   - `_models` → `models`
   - Added TypeScript path aliases

4. **Performance Improvements**:
   - No HTTP serialization/deserialization overhead
   - Direct TypeScript types (no HTTP boundary)
   - Better tree-shaking with functional approach

## 📝 Contributing

When working on this codebase:

1. **Follow the coding standards** outlined above
2. **Use functional programming patterns** (arrow functions, pure functions)
3. **Server components only** for data fetching (no client-side API calls)
4. **Keep business logic in services** (`@/api/services/`)
5. **Use ServiceResponse pattern** for error handling
6. **Write descriptive commit messages** that explain "why" not "what"

## 🤖 Working with Claude Code

This project uses Claude Code for AI-assisted development. Key conventions:

- **Code style enforcement**: ESLint rules ensure consistency
- **Function expressions**: Required for all functions (except rare overloading)
- **Single-line conditionals**: No braces for one-liners
- **Modern patterns**: Functional programming, direct service access
- **Type safety**: Strict TypeScript, no `any` unless necessary

---

**Last Updated**: January 2026
**Maintained By**: Development Team
**License**: ISC
