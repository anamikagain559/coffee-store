/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Merriweather', 'ui-serif', 'Georgia'],
        'mono': ['Mulish', 'ui-monospace', 'SFMono-Regular'],
        'rancho': ['Rancho', 'cursive'],
      },
    },
  },
  plugins: [require("daisyui")],
};
