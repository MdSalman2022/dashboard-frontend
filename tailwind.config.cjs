/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    daisyui: {
      themes: [
        {
          mytheme: {
          
  "primary": "#FEB019",
          
  "secondary": "#F1F2F6",
          
  "accent": "#d4e587",
          
  "neutral": "#222222",
          
  "base-100": "#F1F2F6",
          
  "info": "#7AC1F0",
          
  "success": "#179271",
          
  "warning": "#F7D426",
          
  "error": "#F24A6E",
          },
        },
      ],
  },
  plugins: [require("daisyui")],
}