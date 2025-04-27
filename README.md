# Personal Portfolio Website 🌸

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. Features smooth animations, clean design, and a cherry blossom theme.

## 🌐 Live Website

Visit my webpage at [yaquelinehoyos.com](https://yaquelinehoyos.com)

## ✨ Features

- 🎨 Modern and responsive design
- ⚡ Built with React + TypeScript + Vite
- 🎭 Smooth scroll animations
- 🎯 Intersection Observer for scroll animations
- 🎨 SASS/SCSS for styling
- 🔄 Redux for state management

## 🚀 Sections

- Profile
- About Me
- Professional Experience
- Education
- Skills & Certifications
- Contact Information

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- Redux Toolkit
- SASS/SCSS
- Framer Motion
- ESLint
- Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yaquelinehoyos/my-webpage.git
```

2. Install dependencies
```bash
cd my-webpage
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📝 Project Structure

```
my-webpage/
├── src/
│   ├── components/     # React components
│   ├── store/         # Redux store and slices
│   ├── styles/        # Global styles and variables
│   ├── App.tsx        # Main App component
│   └── main.tsx       # Entry point
├── public/            # Static assets
└── index.html         # HTML template
```

## 🎨 Customization

The website content can be easily customized by modifying the data in `src/store/slices/resumeSlice.ts`. This includes:

- Personal information
- Work experience
- Education
- Skills and certifications
- Contact details

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop screens

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👩‍💻 Author

**Yaqueline Hoyos**
- Website: [yaquelinehoyos.com](https://yaquelinehoyos.com)
- LinkedIn: [yaquelinehoyos](https://linkedin.com/in/yaquelinehoyos/)
- Email: yaqueline150@gmail.com

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
