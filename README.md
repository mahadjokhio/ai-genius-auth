# AI-Genius Authentication & RBAC Backend

AI-Genius is a secure backend authentication and authorization system built using Node.js, Express.js, and MongoDB. It demonstrates modern security practices including JWT-based authentication, refresh token rotation, secure cookies, and Role-Based Access Control (RBAC).

The project is designed as a production-style backend API for managing users and protecting AI service endpoints based on user roles.

---

## 🚀 Features

* JWT Authentication (Access Token + Refresh Token)
* Short-lived Access Tokens (15 minutes)
* Refresh Token Rotation (RTR)
* Secure httpOnly Cookies for Refresh Tokens
* Role-Based Access Control (Admin, Premium_User, Free_User)
* MongoDB-based Refresh Token Whitelisting
* Secure Password Hashing using bcrypt
* Centralized Error Handling Middleware
* Protected AI API Routes
* Database Seeder for Test Users

---

## 🧠 User Roles

| Role         | Permissions                            |
| ------------ | -------------------------------------- |
| Free_User    | Access free AI endpoints               |
| Premium_User | Access free + premium AI endpoints     |
| Admin        | Full access including purge operations |

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB & Mongoose
* JSON Web Token (JWT)
* bcryptjs
* cookie-parser
* dotenv
* nodemon

---

## 📁 Project Structure

```
src/
├── controllers/        # Business logic (auth + AI)
├── middleware/         # Auth & RBAC protection
├── models/             # MongoDB schemas
├── routes/             # API endpoints
├── server.js           # Main server file
scripts/
└── seed.js             # Database seeder
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/mahadjokhio/ai-genius-auth.git
cd ai-genius-auth
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create `.env` file:

```
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/ai-genius
JWT_SECRET=your_secret_key
JWT_REFRESH_SECRET=your_refresh_secret
JWT_ACCESS_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
NODE_ENV=development
```

---

## 🌱 Seed Database

Create test users:

```bash
npm run seed
```

Default users:

* Admin → [admin@ai-genius.com](mailto:admin@ai-genius.com) / AdminPassword123!
* Premium → [premium@ai-genius.com](mailto:premium@ai-genius.com) / PremiumPassword123!
* Free → [free@ai-genius.com](mailto:free@ai-genius.com) / FreePassword123!

---

## ▶️ Run Project

```bash
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 🔐 Auth Routes

**Login**

```
POST /api/auth/login
```

**Refresh Token**

```
POST /api/auth/refresh
```

**Logout**

```
POST /api/auth/logout
```

---

### 🤖 AI Routes

**Free Model**

```
GET /api/ai/free-model
```

**Premium Model**

```
POST /api/ai/premium-model
```

**Purge Cache (Admin Only)**

```
DELETE /api/ai/purge-cache
```

---

## 🔒 Security Features

* Passwords hashed using bcrypt (salt rounds = 10)
* Access tokens expire in 15 minutes
* Refresh tokens stored in httpOnly cookies
* Refresh token rotation for security
* Role-based route protection
* MongoDB whitelist for session validation
* Centralized error handling

---

## 🧪 Testing

You can test APIs using:

* Postman
* Browser Dashboard (if included)
* curl / REST clients

---

## 👨‍💻 Author

Mahad Jokhio
Email: [mahadjokhio08@gmail.com](mailto:mahadjokhio08@gmail.com)

---

## 📌 Notes

This project follows production-style backend architecture patterns commonly used in SaaS applications, authentication systems, and AI platforms.
