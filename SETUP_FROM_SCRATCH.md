# Django Voting System - Fresh Setup Guide

This guide will help you set up the Django Voting System backend on a new machine from scratch.

## Prerequisites

Before starting, ensure you have the following installed:
- **Git** - [Download](https://git-scm.com/download/win)
- **Python 3.8+** - [Download](https://www.python.org/downloads/)
- **pip** - Usually comes with Python

Verify installations:
```powershell
git --version
python --version
pip --version
```

## Step 1: Clone the Repository

```powershell
git clone <your-repo-url>
cd voting_system
```

Replace `<your-repo-url>` with your actual GitHub repository URL.

## Step 2: Create Virtual Environment

```powershell
python -m venv .venv
```

## Step 3: Activate Virtual Environment

```powershell
.venv\Scripts\Activate.ps1
```

**Note:** If you get an execution policy error, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then try activating again.

## Step 4: Install Dependencies

Create a `requirements.txt` file in the root directory with the following content:

```txt
Django==6.0
mysqlclient==2.2.7
requests==2.31.0
```

Then install:
```powershell
pip install -r requirements.txt
```

## Step 5: Configure Database

### Option A: SQLite (Recommended for Development)

Edit `voting_system/settings.py` and set:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

### Option B: MySQL (Production)

Ensure MySQL is installed and running. Edit `voting_system/settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'voting_system',
        'USER': 'voting_user',
        'PASSWORD': 'Root@123',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

Create the database:
```sql
CREATE DATABASE voting_system;
CREATE USER 'voting_user'@'localhost' IDENTIFIED BY 'Root@123';
GRANT ALL PRIVILEGES ON voting_system.* TO 'voting_user'@'localhost';
FLUSH PRIVILEGES;
```

## Step 6: Run Migrations

```powershell
python manage.py migrate
```

This will create all necessary database tables.

## Step 7: Create Superuser (Optional)

For admin access at `http://localhost:8000/admin/`:

```powershell
python manage.py createsuperuser
```

Follow the prompts to set username, email, and password.

## Step 8: Start the Server

```powershell
python manage.py runserver
```

Server will be available at: **http://127.0.0.1:8000/**

---

## Verification Checklist

- [ ] Git cloned successfully
- [ ] Virtual environment created and activated
- [ ] Dependencies installed (django, mysqlclient, requests)
- [ ] Database configured (SQLite or MySQL)
- [ ] Migrations applied successfully
- [ ] Server started without errors
- [ ] Access `http://localhost:8000/` in browser

## Common Issues & Solutions

### Issue: "ModuleNotFoundError: No module named 'django'"
**Solution:** Virtual environment not activated. Run:
```powershell
.venv\Scripts\Activate.ps1
```

### Issue: "Error loading MySQLdb module"
**Solution:** Install mysqlclient:
```powershell
pip install mysqlclient
```

Or switch to SQLite (see Step 5, Option A).

### Issue: "Port 8000 already in use"
**Solution:** Run on a different port:
```powershell
python manage.py runserver 8001
```

### Issue: "InconsistentMigrationHistory"
**Solution:** Delete `db.sqlite3` and rerun migrations:
```powershell
Remove-Item db.sqlite3
python manage.py migrate
```

## Project Structure

```
voting_system/
├── elections/                 # Main app
│   ├── models.py             # Database models
│   ├── views.py              # API views
│   ├── urls.py               # URL routing
│   └── admin.py              # Admin configuration
├── voting_system/            # Project settings
│   ├── settings.py           # Configuration
│   ├── urls.py               # Main URL routing
│   └── wsgi.py               # WSGI configuration
├── manage.py                 # Django management
├── db.sqlite3                # SQLite database (auto-created)
└── requirements.txt          # Python dependencies
```

## API Endpoints

All endpoints available at: `http://localhost:8000/elections/`

- `POST /api/voter/register/` - Register new voter
- `GET /api/voter/profile/` - Get voter profile
- `GET /api/candidates/` - Get candidates
- `GET /api/parties/` - Get parties
- `POST /vote/submit/` - Submit vote
- `GET /results/summary/` - Get voting summary
- `GET /results/seats/` - Get seat allocation

See `SERVER_SETUP.md` for complete API documentation.

## Next Steps

1. **Import Postman Collection:** Import `Voting_System_API.postman_collection.json` to Postman for API testing
2. **Read Full Documentation:** See `SERVER_SETUP.md` for detailed API documentation
3. **Create Sample Data:** Use Django admin to create provinces, districts, candidates, and parties
4. **Connect Frontend:** The React frontend is in `day-1/` folder

---

## Support

For issues or questions, refer to:
- `SERVER_SETUP.md` - Full API documentation
- `elections/README.md` - App-specific documentation
- Django Documentation: https://docs.djangoproject.com/
