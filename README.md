# Eco-Smart Bin

Django + React app with JWT auth.

## Structure

```
Eco_smart_bin/
├── Hello/          # Django config
├── Home/           # API endpoints
├── static/         # Images
├── frontend/       # React app
│   ├── src/
│   │   ├── pages/      # Home, Login, Signup, Dashboard
│   │   ├── services/   # API client
│   │   └── contexts/   # Auth state
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
- **Frontend:** React, Vite, React Router, Axios
