# Eco-Smart Bin

Django + React + TypeScript app with JWT auth.

## Structure

```
Eco_smart_bin/
├── Hello/          # Django config
├── Home/           # API endpoints
├── static/         # Images
├── frontend/       # React + TypeScript app
│   ├── src/
│   │   ├── pages/      # Home, Login, Signup, Dashboard
│   │   ├── services/   # API client (TypeScript)
│   │   ├── contexts/   # Auth state (TypeScript)
│   │   ├── types/      # TypeScript interfaces
│   │   └── components/ # ProtectedRoute
│   └── public/Images/  # Static assets
└── requirements.txt
```

## Quick Start

**Backend:**
```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`

## API Endpoints

| Method | Endpoint | Auth |
|--------|----------|------|
| POST | `/api/signup/` | No |
| POST | `/api/login/` | No |
| GET | `/api/profile/` | JWT |
| POST | `/api/logout/` | JWT |

## Tech Stack

- **Backend:** Django, Django REST Framework, JWT
- **Frontend:** React, TypeScript, Vite, React Router, Axios

## TypeScript Structure

All source files have been converted to TypeScript (`.tsx` / `.ts`):

- `src/types/index.ts` - Type definitions for User, Tokens, API responses
- `src/services/api.ts` - API client with typed requests
- `src/contexts/AuthContext.tsx` - Auth state management with TypeScript
- `src/pages/*.tsx` - Page components with proper typing
- `src/components/*.tsx` - Reusable components with TypeScript

## Building for Production

```bash
cd frontend
npm run build
```

Static files will be generated in `frontend/dist/`.
