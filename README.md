# 🚀 Expo Router, React Components, and NativeWind Integration in React Native

This project demonstrates how to build a **React Native application** using:

- **Expo Router** → File-based navigation system.
- **React Components** → Modular UI development.
- **NativeWind** → Utility-first styling inspired by Tailwind CSS.
- **@expo/vector-icons** → Icon support.

An **auto review** will be launched at the deadline to assess the submission.

---

## 📖 Understanding Expo Router

Expo Router is a **file-based routing system** for React Native apps built on top of Expo.  
It automatically generates navigation routes from the `app/` folder structure.

### 🔑 Key Features
- **File-based Routing** → Define screens as files inside `app/` (e.g., `app/index.tsx`, `app/home.tsx`).
- **Automatic Linking** → No manual route configuration needed.
- **Deep Linking Support** → Works across mobile and web.
- **Nested & Dynamic Routes** → Example: `app/profile/[id].tsx`.
- **Seamless Expo CLI Integration** → Optimized for Expo-managed workflows.

---

## ⚛️ React Components in Expo Router

React components are the building blocks of this application. Screens and UI elements are built using **functional components** that return JSX.

### ✅ Best Practices
- **Modular & Reusable Components** → Example: `components/Button.tsx`.
- **State Management** → Use `useState`, `useEffect`.
- **Lazy Loading** → Optimize performance with `React.lazy()`.
- **Props & Context** → Manage global state with React Context.
- **Error Boundaries** → Catch unexpected errors to prevent crashes.

---

## 🎨 NativeWind Integration

NativeWind brings **Tailwind CSS–style utility classes** to React Native.

### ⚙️ Setup Notes
- Define Tailwind classes in `tailwind.config.js`.
- Configure:
  - `expo-router.config.js` → Navigation behavior.
  - `.env` → Environment variables.
  - `metro.config.js` → Module resolution & asset optimization.

---

## 📦 Expo Vector Icons

This project uses **@expo/vector-icons** for scalable icons.

### Installation
```bash
npm install @expo/vector-icons
