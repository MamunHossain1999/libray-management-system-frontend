# 📚 Minimal Library Management System

A clean and functional client-side **Library Management System** built with **React**, **TypeScript**, **Redux Toolkit Query**, and **Tailwind CSS**. This system enables users to manage books and borrow records without authentication.

---

## 🚀 Project Overview

This project demonstrates:
- Modern React development with **TypeScript**
- State and API management using **Redux Toolkit Query**
- Responsive UI with **Tailwind CSS**
- CRUD and aggregation logic via RESTful API integration

All routes are public and focus solely on core library features such as viewing, adding, editing, borrowing, and summarizing books.

---

## ✅ Features

### 1. Public Routes
- All pages are accessible without login or authentication.

### 2. 📚 Book Management
- **Book List Table**: Shows title, author, genre, ISBN, copies, availability, and actions.
- **Edit Book**: Opens a pre-filled form to update book data.
- **Delete Book**: Removes book after confirmation.
- **Add Book**: Form with fields like Title, Author, Genre, ISBN, Description, Copies.
- **Borrow Book**: Opens a form to borrow a selected book.

#### Business Logic:
- Copies = 0 ➝ Book marked as *Unavailable*
- UI reflects real-time changes upon CRUD operations.

### 3. 🔄 Borrow Functionality
- Borrow form with fields: **Quantity**, **Due Date**
- Borrowing restricted to available copies
- Updates copies and availability status dynamically
- Success feedback via toast and redirection to borrow summary

### 4. 📊 Borrow Summary
- Aggregated view of all borrowed books
- Shows: Book Title, ISBN, Total Quantity Borrowed

---

## 🧩 Routes & Pages

| Route | Description |
|-------|-------------|
| `/books` | All books list with CRUD and borrow actions |
| `/create-book` | Add a new book |
| `/books/:id` | View single book details |
| `/edit-book/:id` | Edit an existing book |
| `/borrow/:bookId` | Borrow a book |
| `/borrow-summary` | Borrowed books summary |

---

## 🖥️ UI/UX

- **Minimalist Design** using Tailwind CSS
- **Responsive** for mobile, tablet, and desktop
- **Clean Navigation**: Header with links to main sections
- **Toast Notifications** for user feedback
- **Type-Safe Forms** with validation

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React + TypeScript |
| State Management | Redux Toolkit + RTK Query |
| Styling | Tailwind CSS |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |

---

## 🌐 Live Demo

> 🔗 [https://libray-rho.vercel.app/]
> 🔗 [https://api-theta-navy.vercel.app/](#)
