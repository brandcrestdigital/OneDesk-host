// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   darkMode: 'class', // enables dark: prefix
//   theme: {
//     extend: {
//       colors: {
//         // Dark theme (default)
//         'bg-black': '#000000',
//         'bg-dark': '#0a0e17',
//         'bg-darker': '#111111',
//         'bg-card': '#0f0f17',
//         'accent-orange': {
//           400: '#fb923c',
//           500: '#f97316',
//           600: '#ea580c',
//           700: '#c2410c',
//           800: '#9a3412',
//           900: '#7c2d12',
//         },
//         'text-white': '#ffffff',
//         'text-muted-dark': '#e5e5e5',

//         // Light theme colors
//         'bg-light': '#f8fafc',
//         'bg-light-card': '#ffffff',
//         'bg-light-hover': '#f1f5f9',
//         'text-dark': '#0f172a',
//         'text-muted-light': '#64748b',
//         'border-light': '#e2e8f0',
//       },
//       backgroundImage: {
//         'orange-gradient': 'linear-gradient(135deg, #f97316, #c2410c)',
//         'sidebar-gradient-dark': 'linear-gradient(to bottom, #0a0e17, #000000)',
//         'sidebar-gradient-light': 'linear-gradient(to bottom, #ffffff, #f8fafc)',
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Base semantic colors
        primary: {
          bg: 'var(--bg-primary)',
          text: 'var(--text-primary)',
        },
        secondary: {
          bg: 'var(--bg-secondary)',
          text: 'var(--text-secondary)',
        },
        card: {
          bg: 'var(--card-bg)',
          border: 'var(--card-border)',
        },
        accent: {
          orange: {
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
        },
        // Status colors
        gain: '#10b981',
        loss: '#ef4444',
      },
    },
  },
  plugins: [],
}