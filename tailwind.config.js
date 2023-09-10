/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sprite1': 'url(/images/spritesheet1-compressed.jpg)',
        'sprite2': 'url(/images/spritesheet2-compressed.jpg)',
      },
    },
  },
  plugins: [],
}

