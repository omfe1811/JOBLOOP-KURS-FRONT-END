# Tailwind CSS + Vite Setup

## 01 - Setup Vite

Create a new Vite project (if you don’t have one yet) and navigate into it:

```bash
npm create vite@latest my-project
cd my-project
```

---

## 02 - Install Tailwind

Install Tailwind CSS and the Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## 03 - Configure the Vite Plugin

Edit `vite.config.ts` to include the Tailwind plugin:

```ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(),],
})
```

---

## 04 - Import Tailwind CSS

In your main CSS file (e.g., `src/style.css`), import Tailwind:

```css
@import "tailwindcss";
```

---

## 05 - Start the Build Process

Run the dev server to compile Tailwind:

```bash
npm run dev
```

---

## 06 - Use Tailwind in HTML

Include the compiled CSS in your HTML and start using Tailwind classes:

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/style.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```
