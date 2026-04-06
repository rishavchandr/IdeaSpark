# IdeaSpark Frontend

Minimal React frontend for the IdeaSpark startup analysis platform.

## Stack

- React
- React Router DOM
- Axios
- Tailwind CSS
- Lucide React
- Vite

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create env file:

```bash
cp .env.example .env
```

3. Start the app:

```bash
npm run dev
```

## Environment

- `VITE_API_BASE_URL`: defaults to `http://localhost:5000/api/v1`
- `VITE_USER_ID`: sent to the backend using the required `x-user-id` header

## API note

The current backend route in this repository is `/api/v1/idea`, so the frontend is wired to that live contract.
