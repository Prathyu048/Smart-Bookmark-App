# 🔖 Smart Bookmark App

A full-stack web application that allows users to securely save, organize, and manage personal bookmarks using Google authentication and real-time updates.

## 🌍 Live Demo

👉 https://smart-bookmark-app-beige-theta.vercel.app

---

## 🚀 Features

- 🔐 Google Sign-In (Supabase Auth)
- ➕ Add bookmarks (Title + URL)
- 📋 View personal bookmarks
- ❌ Delete bookmarks
- 🔄 Real-time updates
- 👤 User-specific private data (Row Level Security)
- 🚪 Secure logout
- 🎨 Responsive UI with Tailwind CSS

---

## 🧠 Tech Stack

**Frontend**
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

**Backend & Database**
- Supabase
- PostgreSQL
- Supabase Authentication (Google OAuth)
- Supabase Realtime

---

## 🔐 Authentication Flow

1. User signs in using Google
2. Supabase verifies identity
3. Session created securely
4. User redirected to dashboard

---

## 🗄 Database Design

The application uses a PostgreSQL database hosted on Supabase.

### 📌 Bookmarks Table

Stores user-specific bookmark data.

| Column | Type | Description |
|--------|------|-------------|
id | UUID | Unique bookmark ID  
user_id | UUID | References authenticated user  
title | TEXT | Bookmark title  
url | TEXT | Website link  
created_at | TIMESTAMP | Creation time  

### 🔒 Security

- Row Level Security (RLS) enabled
- Users can only access their own bookmarks
- Policies restrict SELECT, INSERT, DELETE operations to authenticated user

---

## 🐞 Challenges & Solutions

### OAuth Redirect Issue
Resolved incorrect redirect configuration by updating Supabase URL settings for production deployment.

### Session Handling
Handled asynchronous session loading using authentication state listeners.

### Deployment Issues
Fixed TypeScript and environment configuration issues during Vercel deployment.

---

## ▶️ Run Locally

```bash
npm install
npm run dev

Open in your browser:

http://localhost:3000