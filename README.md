
---

## 🚀 What the Script Does

The `insert_books.js` script:

1. Connects to your MongoDB Atlas cluster.
2. Checks if the `books` collection in the `plp_bookstore` database already exists.
3. If it does, it drops the existing collection to avoid duplicates.
4. Inserts 12 sample books with metadata like title, author, genre, price, etc.
5. Prints the inserted books to the terminal.

---

## 🛠️ Prerequisites

- Node.js installed (v14 or higher recommended)
- MongoDB Atlas account
- A cluster created with a valid connection string
- Network access properly set up on Atlas (IP Whitelist & Database Access)

---

## 🧩 Setup Instructions

1. **Clone or download this repo**.

2. **Install dependencies** (if any — the script uses only the built-in `mongodb` package):

```bash
npm install mongodb
