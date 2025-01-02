// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      jost: ["Jost", "Sans-serif"],
    },
    extend: {
      colors: {
        primary: '#1E88E5',
        secondary: '#43A047',
        accent: {
          gold: '#FFD700',
          red: '#E53935',
        },
        neutral: {
          light: '#F9FAFB',
          dark: '#212121',
          medium: '#757575',
        },
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)',
        button: '0 2px 4px rgba(0, 0, 0, 0.08)',
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
};
