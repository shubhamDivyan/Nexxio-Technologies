# 🐱‍👤 Pokémon Viewer App (React + Vite + Tailwind CSS)

## 🚀 Overview

This project is a simple **Pokémon Viewer Application** built using **React (Vite)** and styled with **Tailwind CSS**.

It displays Pokémon data with:

* 🖼️ Image (centered in circle)
* 🏷️ Pokémon Name (bold & centered)
* 📝 Description
* ⬅️➡️ Next / Previous buttons

---

## 🎯 UI Requirements (Implemented)

* Main container:

  * Width: **500px**
  * Full height
  * Background color: **#b9cdcc**

* Inner card:

  * Margin: **5px**
  * Border radius: **10px**

* Pokémon Image:

  * Centered
  * Size: **200px x 200px**
  * Circular shape

* Text:

  * Name → **bold + centered**
  * Description → below name

* Buttons:

  * Positioned at bottom
  * Color: **#514b6e**

---

## 🛠️ Tech Stack

* ⚛️ React (Vite)
* 🎨 Tailwind CSS
* 🌐 PokéAPI (for Pokémon data)

---

## 📁 Folder Structure

```id="pokemon-struct"
pokemon-app/
│
├── src/
│   ├── hook/
│   │   └── usePokemon.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── vite.config.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Create Project (Vite)

```id="cmd1"
npm create vite@latest pokemon-app
cd pokemon-app
npm install
```

---

### 2️⃣ Install Tailwind CSS

```id="cmd2"
npm install tailwindcss @tailwindcss/vite
```

---

### 3️⃣ Configure Vite

```id="cmd3"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

---

### 4️⃣ Add Tailwind in CSS

```id="cmd4"
@import "tailwindcss";
```

---

### 5️⃣ Run Project

```id="cmd5"
npm run dev
```

---

## 🔍 Features

* 🔄 Navigate Pokémon using Next/Prev buttons
* 🖼️ Dynamic Pokémon image display
* 📝 Description rendering
* 🎨 Clean UI using Tailwind CSS

---

## 🌐 API Used

PokéAPI
Example:


## 🚀 Future Improvements

* 🔎 Search Pokémon by name
* ❤️ Add favorites
* 📱 Make responsive for mobile
* ⚡ Add loading spinner

---

## 👨‍💻 Author

Shubham Divyanshu

---

## ⭐ Conclusion

This project demonstrates a clean and simple **UI-based React application** using Tailwind CSS, focusing on layout design and API integration.

---
