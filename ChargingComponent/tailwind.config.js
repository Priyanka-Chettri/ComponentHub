/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    boxShadow: {
      'custom': '4px 4px 24px 4px rgba(225, 148, 255, 0.5)', // Example custom shadow
    },
  },
  plugins: [],
}

