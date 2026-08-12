/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14233A",
          soft: "#33445F",
          muted: "#5A6A82",
        },
        coral: {
          DEFAULT: "#E8674C",
          dark: "#CF4E34",
          light: "#F4A38F",
        },
        teal: {
          DEFAULT: "#2C7A85",
          dark: "#1F5A63",
          light: "#7FB3B9",
        },
        gold: "#D9A441",
        sand: "#FBF6EF",
        cream: "#FFFDF9",
        rose: "#F6D9CE",
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(20, 35, 58, 0.18)",
        card: "0 8px 30px -10px rgba(20, 35, 58, 0.15)",
        glow: "0 20px 60px -20px rgba(232, 103, 76, 0.45)",
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
