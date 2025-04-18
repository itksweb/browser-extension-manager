/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "card-bg":"hsl(200, 60%, 99%)",
        "card-border-color":"hsl(217, 61%, 90%)",
        "switch-bg":"var(--switch-bg)",
        "red-main":"var(--red-main)"
      },
      boxShadow: {
        "card-box":"0 4px hsl(217, 61%, 90%)"
      },
    },
  },
  plugins: [],
}

