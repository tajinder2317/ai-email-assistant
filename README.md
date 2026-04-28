# AI Email Assistant

Minimal full-stack starter for an AI email assistant:

- **Backend:** Node.js + Express (API server)
- **Frontend:** React + Vite + Tailwind (UI)

## Repo Structure

- `backend/` Express API (`http://localhost:5000`)
- `frontend/` React app (`http://localhost:5173`)

## Prerequisites

- Node.js 18+ (recommended)
- npm

## Setup

Install dependencies for each workspace:

```bash
npm install --prefix backend
npm install --prefix frontend
```

## Run (Dev)

From the repo root, run both servers together:

```bash
npm run dev
```

Or run them separately:

```bash
npm run dev:backend
npm run dev:frontend
```

## API Endpoints

Backend routes are mounted under `/api`:

- `GET /api/health` → basic health check
- `GET /api/email/test` → placeholder email endpoint

## Environment Variables

The backend loads environment variables from `.env` (via `dotenv`).

- `PORT` (optional, defaults to `5000`)

Create `backend/.env` if you need to override defaults.

## Notes

- The frontend “Check Backend” button calls `http://localhost:5000/api/health`.
- Build output (like `frontend/dist`) and env files are ignored via `.gitignore`.

