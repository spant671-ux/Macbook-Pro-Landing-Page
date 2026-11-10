# MacBook Pro 3D Landing Page 💻

An Apple-inspired interactive 3D landing page clone showcasing the MacBook Pro, featuring real-time 3D rendering, scroll-driven animations, and authentic Apple typography and UI polish.

Built with **React 19**, **Three.js**, **React Three Fiber**, **Drei**, and **Tailwind CSS**.

---

## 🚀 Features

- **🎮 Real-Time 3D MacBook Model**: Photorealistic 3D model (`mac.glb`) rendered via WebGL with metallic sheen and studio environment lighting.
- **📜 Scroll-Driven Lid Animation**: Natural lid-opening kinematics scrubbed smoothly by the user's scroll progress using `@react-three/drei`'s `ScrollControls`.
- **🖼️ Screen Texture Mapping**: M3 wallpaper texture dynamically mapped to the laptop's display matte material.
- **✨ Glowing Gradient Text Mask**: Apple-style `macbook pro.` title with a vibrant wallpaper mask and ambient dual-layer backlight blur.
- **🪄 Zero-Overlap Fade Physics**: Sub-details (headline, description, and CTA buttons) seamlessly fade and float out of the way as the display rises, then return when closed.
- **🍎 Authentic Apple Navigation**: Global header complete with Apple logo, navigation categories, search, and bag icons powered by Remix Icon and Retina hairline dividers.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite](https://vite.dev/)
- **3D Engine**: [Three.js](https://threejs.org/)
- **React 3D Renderer**: [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **3D Helpers**: [@react-three/drei](https://github.com/pmndrs/drei)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Remix Icon](https://remixicon.com/)
- **Typography**: Helvetica / Helvetica Neue via CDN

---

## 📂 Project Structure

```text
├── public/
│   ├── favicon.svg          # Favicon
│   ├── mac.glb              # 3D MacBook Pro binary model
│   └── red.jpg              # High-res screen wallpaper texture
├── src/
│   ├── App.jsx              # Main landing page layout, Navbar, and Canvas
│   ├── MacContainer.jsx     # 3D Model loader, scroll loop, and screen physics
│   ├── style.css            # Custom CSS, text masking, and glow filters
│   ├── index.css            # Tailwind CSS import
│   └── main.jsx             # React DOM entry point
├── eslint.config.js         # ESLint configuration tailored for R3F loops
└── package.json             # Project dependencies and scripts
```

---

## 🏁 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or newer) installed.

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd Macbook-Pro-Landing-Page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:5173/
   ```

---

## 📦 Scripts

- `npm run dev`: Runs the local development server with Hot Module Replacement (HMR).
- `npm run build`: Bundles the project into minified static assets in `/dist`.
- `npm run lint`: Runs ESLint to verify code quality.
- `npm run preview`: Previews the production build locally.

---

## 💡 Notes on React 19 & Three.js

Three.js relies on real-time mutable scene graphs updated at 60 FPS inside `useFrame`. The ESLint configuration (`eslint.config.js`) has been optimized to work with React 19 by disabling render-phase immutability rules for animation loops.

---

## 📄 License

This project is created for educational and portfolio demonstration purposes. All Apple trademarks, product names, and designs belong to Apple Inc.
