/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        custom: "calc(288% + 1.3px)",
      },
      fontFamily: { manropeBold: "ManropeBold" },
    },
  },
  plugins: [],
};
