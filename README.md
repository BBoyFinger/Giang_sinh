# Hospital Platform Starter

Base project includes:

- Next.js frontend (`apps/web`)
- NestJS API (`apps/api`)
- PostgreSQL
- Redis
- Docker Compose for local development

## Quick Start

1. Copy env file:

```bash
cp .env.example .env
```

PowerShell:

```powershell
Copy-Item .env.example .env
```

2. Install dependencies:

```bash
npm install
```

3. Start all services:

```bash
docker compose up --build
```

4. Open:

- Web: http://localhost:3000
- API: http://localhost:4000
- API health: http://localhost:4000/health

## Run without Docker (web + api only)

Make sure PostgreSQL/Redis are running first.

```bash
npm run dev:api
npm run dev:web
```

## Suggested Next Modules

- Authentication / RBAC
- Patients
- Doctors
- Appointments
- Notifications (queue via Redis)
