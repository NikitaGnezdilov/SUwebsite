# SUwebsite

**SUwebsite** is a simple university project built using **Node.js**, **Express.js**, and **SQLite**.  
The project demonstrates a basic backend server that handles routing, serves static files, and stores submitted form data in a database.

⚠️ This project was developed with the help of **ChatGPT** to meet a tight university deadline and demonstrate backend logic using JavaScript.

## 📦 Technologies Used

- **Node.js** — JavaScript runtime
- **Express.js** — server framework
- **SQLite3** — lightweight database for storing form submissions
- **body-parser** — to parse POST request data
- **HTML / CSS / JavaScript** — static frontend (in `/public`)

## 🚀 How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/your-username/SUwebsite.git
cd SUwebsite
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node server.js
```

> Or with `nodemon` (if installed globally):

```bash
npx nodemon server.js
```

4. Open your browser and visit:

```
http://localhost:80
```

## 📁 Project Structure

- `server.js` — main server file (Express app)
- `/public` — static frontend (HTML, CSS, JS)
- `database.sqlite` — local database file (created on first run)
- `package.json` — dependencies and scripts

## ❗ Notes

- `node_modules/` is excluded from version control via `.gitignore`
- All dependencies are installed using `npm install`
- This project was built with the assistance of **ChatGPT** for educational purposes only
