# 🐞 BugFlow – Agile Issue & Defect Tracker

A clean, responsive single-page issue and bug tracking application built with **React** and **Tailwind CSS**. Designed to help developers and QA teams log, search, filter, edit, and resolve software defects seamlessly.

🔗 **Live Demo:** bugflow-react-tracker-oind2hlp9-sarvesh-kumar-s-projects.vercel.app

---

## ✨ Key Features

- **Full CRUD Operations:** Create new bug tickets, edit details inline (`Title`, `Assignee`, `Severity`), toggle resolution status (`Open` ↔ `Resolved`), and delete tickets.
- **Real-Time Multi-Field Search:** Instantly filter tickets by bug title or assigned developer (case-insensitive).
- **Status Filtering & Live Metrics:** Switch between `All`, `Open`, and `Resolved` views with live ticket counters.
- **Severity-Based Tagging:** Color-coded badges (`High`, `Medium`, `Low`) for quick visual prioritization.
- **Persistent Storage:** Automatically saves all tickets to the browser's `localStorage` using React `useEffect`, preserving data across page reloads.

---

## 🛠️ Tech Stack

- **Frontend:** React (Hooks: `useState`, `useEffect`)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Storage:** Browser `localStorage` API

---

## 🚀 Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd bugflow-react-tracker
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
