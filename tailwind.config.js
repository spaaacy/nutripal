/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      margin: {
        '250px' : '250px',
        '200px': '200px',
        '120px': '120px',
        '100px': '100px',
        '50px': '50px',
      },
    },
  },
  plugins: [],
};
