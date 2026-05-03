# 🐄 QurbaniHat – Livestock Booking Platform

A modern livestock marketplace web application where users can explore animals for Qurbani (such as cows and goats), view detailed information, and place bookings after authentication.

---

## 🚀 Live Demo
🔗 https://qurbani-hat-platform.vercel.app/

---

## 📌 Project Purpose

QurbaniHat is designed to simplify the process of browsing and booking sacrificial animals online. Users can:
- Explore available animals
- View detailed information
- Place bookings after login
- Manage their profile

---

## ✨ Key Features

### 🏠 Home Page
- Hero banner section
- Featured animals (4 items)
- Qurbani tips section
- Top breeds section

### 🐂 All Animals Page
- Display animals from JSON data
- Sort by price (Low → High / High → Low)
- Animal cards with details button

### 📄 Animal Details Page
- Full animal information view
- Booking form (name, email, phone, address)
- Login required for booking
- Success toast notification
- Form resets after submission

### 🔐 Authentication
- User registration system
- Login system
- Google authentication
- Protected routes

### 👤 Profile System
- View logged-in user info
- Update profile (name & image)
- Uses Better Auth update API

### ⚙️ Extra Features
- Fully responsive design
- Toast notifications
- Loading states
- Not Found page (404)
- Secure environment variables
- Unique UI design

---

## 📂 Routes

### 🌐 Public Routes
- `/` → Home
- `/animals` → All Animals
- `/login` → Login
- `/register` → Register

### 🔒 Private Routes
- `/details/[id]` → Animal Details
- `/my-profile` → Profile Page

---

## 🧾 Sample Animal Data

```json
{
  "id": 1,
  "name": "Deshi Shahi Cow",
  "type": "Cow",
  "breed": "Local Deshi",
  "price": 120000,
  "weight": 280,
  "age": 3,
  "location": "Bogura",
  "description": "Healthy deshi cow suitable for Qurbani.",
  "image": "https://i.postimg.cc/example-cow1.jpg",
  "category": "Large Animal"
}