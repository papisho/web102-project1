# 🥾 Trailhead — Local Hiking Trails

A community board built with **React + Vite** that showcases local hiking trails. Each trail is displayed as a card with its location, difficulty, distance, elevation gain, a short description, and a link to learn more.

> WEB102 · Unit 1 · Project 1 — Community Board

## ✨ Features

### Required
- ✅ A cohesive, unique theme (local hiking trails) for a specific community
- ✅ A header/title describing the theme
- ✅ 12 unique trails displayed in a responsive card format (requirement: at least 10)
- ✅ Cards are arranged in an organized grid
- ✅ Each card includes information about the trail (location, difficulty, distance, elevation, description)

### Stretch
- ✅ A "View Trail" link on each card pointing to a related resource
- ✅ Responsive layout for both desktop and mobile (multi-column grid → single column on phones)

## 🛠️ Built With
- [React](https://react.dev/) — UI components and props
- [Vite](https://vite.dev/) — build tooling and dev server
- Plain CSS — theme styling and responsive grid

## 🚀 Getting Started

Make sure you have [Node.js](https://nodejs.org/) installed, then:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open the local URL printed in the terminal (usually http://localhost:5173) to view the app.

To create a production build:

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Board title and theme description
│   └── TrailCard.jsx   # A single trail card (receives data via props)
├── data/
│   └── trails.js       # Array of trail data shown on the board
├── App.jsx             # Renders the header and maps trails into cards
├── App.css             # Theme styling and responsive grid
└── index.css           # Base styles
```

## 📸 Screenshot

<!-- Add a screenshot or GIF of your running app here, e.g.: -->
<!-- ![Trailhead screenshot](./screenshot.png) -->

_Add a screenshot of the running app here._

## 📝 License

Created for educational purposes as part of the WEB102 course.
